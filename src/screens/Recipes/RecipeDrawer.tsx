import {
  Box,
  CardContent,
  Chip,
  ClickAwayListener,
  Drawer,
  Slider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
import {
  RecipePreloadedHookProps,
  RecipeQuery$data,
} from "src/api-hooks/recipe";
import { t } from "@lingui/macro";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { CaloricTable } from "src/components/CaloricTable";
import { useIsMobile } from "src/hooks/useIsMobile";
import { RecipeCardHeader, RecipeCardHeaderProps } from "./RecipeCardHeader";
import { useStyles } from "./styles";

type ExtendProps = Partial<RecipeCardHeaderProps> &
  FoodPreloadedHookProps &
  RecipePreloadedHookProps;

interface Props extends ExtendProps {
  isOpen: boolean;
  onClose(): void;
  data?: RecipeQuery$data["recipe_connection"]["edges"][0]["node"];
}

export const RecipeDrawer = ({
  foodQR,
  recipeQR,
  data,
  onClose,
  isOpen,
}: Props) => {
  const classes = useStyles();
  const isMobile = useIsMobile();

  const portions = data?.portions || 1;

  const [displayPortions, setDisplayPortions] = useState(portions);
  const [isEditable, setIsEditable] = useState(false);

  const handleSetNewValue = (key: string, value: any) => {};

  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={onClose}>
      <Drawer
        className={clsx({
          [classes.drawer]: !isMobile,
          [classes.drawerMobile]: isMobile,
        })}
        variant={!isMobile ? "persistent" : "temporary"}
        anchor="right"
        open={isOpen}
        classes={{
          paper: !isMobile ? classes.drawerPaper : classes.drawerPaperMobile,
        }}
      >
        <RecipeCardHeader
          key={data?.id}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setNewValue={handleSetNewValue}
          onClose={onClose}
          recipeQR={recipeQR}
          data={data}
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
            recipeQR={recipeQR}
            foodQR={foodQR}
            data={data?.recipe_items.map((i) => ({ ...i, food_id: i.food.id }))}
            isEditable={isEditable}
            onAddItem={() => {}}
            onRemoveRow={() => {}}
            onSubmitRowChange={() => {}}
            portions={portions}
            displayPortions={isEditable ? portions : displayPortions}
          />
        </CardContent>
      </Drawer>
    </ClickAwayListener>
  );
};
