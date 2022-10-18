import React, { Suspense, useState } from "react";
import {
  Box,
  CardContent,
  Chip,
  ClickAwayListener,
  Drawer,
  Slider,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import clsx from "clsx";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import {
  RecipePreloadedHookProps,
  useRecipe,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { t } from "@lingui/macro";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { CaloricTable } from "src/components/CaloricTable";
import { useIsMobile } from "src/hooks/useIsMobile";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { RecipeCardHeader, RecipeCardHeaderProps } from "./RecipeCardHeader";
import { useStyles } from "./styles";
import { useRecipeHeaderLogic } from "./useRecipeHeaderLogic";
import { useRecipeItemLogic } from "./useRecipeItemLogic";

type ExtendProps = Partial<RecipeCardHeaderProps> &
  FoodPreloadedHookProps &
  RecipesPreloadedHookProps;

interface RecipeDrawerProps extends ExtendProps {
  isOpen: boolean;
  onClose(): void;
  id: string;
}

type RecipeDrawerBodyProps = RecipeDrawerProps & RecipePreloadedHookProps;

export const RecipeDrawerBody = ({
  foodQR,
  recipesQR,
  recipeQR,
  onClose,
}: RecipeDrawerBodyProps) => {
  const classes = useStyles();
  const { data: fetchedData } = useRecipePreloaded(recipeQR);

  const data = fetchedData.recipe_connection.edges[0]?.node || {};
  const portions = data?.portions || 1;

  const { isEditable, setIsEditable, state, handleSetState, handleDelete } =
    useRecipeHeaderLogic({ data, recipeQR });

  const { onAdd, onUpdate, onRemove } = useRecipeItemLogic({
    foodQR,
    recipeQR,
    recipesQR,
    recipe_id: data?.id || "",
  });

  const [displayPortions, setDisplayPortions] = useState(portions);

  return (
    <>
      <RecipeCardHeader
        key={data?.id}
        data={{ ...state, isOwner: !!data?.isOwner }}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        setNewValue={handleSetState}
        onClose={onClose}
        onDelete={() => {
          handleDelete();
          onClose();
        }}
      />
      <CardContent>
        {!isEditable && (
          <Box className={classes.sliderContainer}>
            <Typography variant={"overline"} color={"textSecondary"}>
              {t`Portions:`}
            </Typography>
            <div className={classes.slider}>
              <Slider
                defaultValue={displayPortions}
                value={displayPortions}
                step={0.5}
                max={50}
                valueLabelFormat={(v) => v}
                valueLabelDisplay="off"
                marks={true}
                onChange={(e, v) => {
                  setDisplayPortions(v as number);
                }}
              />
            </div>
            <Chip color={"primary"} label={displayPortions} />
          </Box>
        )}

        <CaloricTable
          recipesQR={recipesQR}
          foodQR={foodQR}
          data={data?.recipe_items?.map((i) => ({
            ...i,
            food_id: i?.food?.id,
          }))}
          isEditable={isEditable}
          onAddItem={onAdd}
          onRemoveRow={onRemove}
          onSubmitRowChange={onUpdate}
          portions={portions}
          displayPortions={isEditable ? portions : displayPortions}
        />
      </CardContent>
    </>
  );
};

export const RecipeDrawer = ({ id, ...rest }: RecipeDrawerProps) => {
  const classes = useStyles();
  const isMobile = useIsMobile();

  const { queryReference: recipeQR } = useRecipe({
    id: base64ToUuid(id || ""),
  });

  const handleClickAway = () => {
    rest.onClose();
  };

  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={handleClickAway}>
      <Drawer
        className={clsx({
          [classes.drawer]: !isMobile,
          [classes.drawerMobile]: isMobile,
        })}
        variant={!isMobile ? "persistent" : "temporary"}
        anchor="right"
        open={rest.isOpen}
        classes={{
          paper: !isMobile ? classes.drawerPaper : classes.drawerPaperMobile,
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          {recipeQR && (
            <RecipeDrawerBody id={id} recipeQR={recipeQR} {...rest} />
          )}
        </Suspense>
      </Drawer>
    </ClickAwayListener>
  );
};
