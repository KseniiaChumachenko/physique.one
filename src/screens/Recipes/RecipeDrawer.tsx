import { NIL } from "uuid";
import {
  Box,
  Button,
  CardContent,
  Chip,
  ClickAwayListener,
  Drawer,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  RecipePreloadedHookProps,
  RecipeQuery$data,
} from "src/api-hooks/recipe";
import { Trans } from "@lingui/macro";
import { useActiveUser } from "src/api-hooks/authorization";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { aggregate, getValueByPortionCoefficient } from "./utils";
import { RecipeTableEditableRow } from "./RecipeTableEditableRow";
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { user } = useActiveUser();

  const portions = data?.portions;

  const [displayPortions, setDisplayPortions] = useState(portions || 1);

  const [withAddRow, setWithAddRow] = useState(false);
  const handleCancelAddRow = () => setWithAddRow(false);

  const isPermitted = user?.id === data?.u_id;
  const coefficientForPortions =
    portions === displayPortions ? 1 : displayPortions / (portions || 1);

  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={onClose}>
      <Drawer
        className={classes.drawer}
        variant={matches ? "persistent" : "temporary"}
        anchor="right"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/*TODO: wrong header*/}
        <RecipeCardHeader
          key={data?.id}
          id={data?.id}
          description={data?.description}
          name={data?.name}
          u_id={data?.u_id}
          portions={portions}
          link={data?.link}
          recipeQR={recipeQR}
        />
        <CardContent>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant={"overline"} color={"textSecondary"}>
              <Trans>Portions: </Trans>
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"60%"}
              marginX={2}
            >
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
            </Box>
            <Chip color={"primary"} label={displayPortions} />
          </Box>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Ingredient</TableCell>
                <TableCell>Weight&nbsp;(g)</TableCell>
                <TableCell>Calories&nbsp;|&nbsp;kJ</TableCell>
                <TableCell>Protein&nbsp;(g)</TableCell>
                <TableCell>Carbohydrate&nbsp;(g)</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
                {isPermitted && <TableCell>Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.recipe_items?.map(
                (row) =>
                  row && (
                    <RecipeTableEditableRow
                      foodQR={foodQR}
                      recipeQR={recipeQR}
                      recipe_id={data?.id}
                      row={row}
                      key={row.id}
                      u_id={data?.u_id}
                      coefficientForPortions={coefficientForPortions}
                    />
                  )
              )}
              {/*Row total for portions: */}
              {data?.recipe_items && data?.recipe_items?.length > 1 && (
                <TableRow>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      <Trans>TOTAL</Trans>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "weight"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "energy_cal"),
                        coefficientForPortions
                      )}
                      &nbsp;kCal |&nbsp;
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "energy_kj"),
                        coefficientForPortions
                      )}
                      &nbsp;kJ
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "proteins"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "carbohydrates"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(data?.recipe_items, "fats"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell />
                </TableRow>
              )}
              {withAddRow && isPermitted && (
                <RecipeTableEditableRow
                  foodQR={foodQR}
                  recipeQR={recipeQR}
                  key={data?.id}
                  recipe_id={data?.id}
                  row={{ id: NIL, weight: 100 } as any} // TODO
                  u_id={data?.u_id}
                  coefficientForPortions={coefficientForPortions}
                  onDiscardAddRow={handleCancelAddRow}
                />
              )}
            </TableBody>
          </Table>
          {!withAddRow && (
            <Button
              variant={"text"}
              onClick={() => setWithAddRow(true)}
              size={"large"}
              color={"primary"}
              className={classes.addButton}
            >
              <Trans> + Add ingredient</Trans>
            </Button>
          )}
        </CardContent>
      </Drawer>
    </ClickAwayListener>
  );
};
