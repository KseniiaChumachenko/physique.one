import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { NIL } from "uuid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  createStyles,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { useStore } from "../../store";
import { FoodPreloadedHookProps } from "../../api-hooks/food";
import { RecipePreloadedHookProps } from "../../api-hooks/recipe";
import { RecipeCardHeader, RecipeCardHeaderProps } from "./RecipeCardHeader";
import { RecipeTableEditableRow } from "./RecipeTableEditableRow";
import { aggregate, getValueByPortionCoefficient } from "./utils";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      overflow: "auto",
    },
    addButton: {
      width: "100%",
    },
  })
);

export interface RecipeItem {
  readonly id: string;
  readonly food: {
    readonly id: string;
    readonly name: string;
  };
  readonly proteins: number;
  readonly fats: number;
  readonly carbohydrates: number;
  readonly energy_cal: number;
  readonly energy_kj: number;
  readonly weight: number;
}
type ExtendProps = RecipeCardHeaderProps &
  FoodPreloadedHookProps &
  RecipePreloadedHookProps;

interface Props extends ExtendProps {
  recipe_items?: readonly RecipeItem[];
}

// TODO recipe items remapped twice because of submit of adjustable rows and portioning
export const RecipeCard = observer(
  ({
    foodQR,
    recipeQR,
    id,
    name,
    u_id,
    description,
    recipe_items,
    portions,
    link,
  }: Props) => {
    const classes = useStyles();
    const {
      userStore: {
        user: { id: userId },
      },
    } = useStore();

    const [displayPortions, setDisplayPortions] = useState(portions || 1);

    const [withAddRow, setWithAddRow] = useState(false);
    const handleCancelAddRow = () => setWithAddRow(false);

    const isPermitted = userId === u_id;
    const coefficientForPortions =
      portions === displayPortions ? 1 : displayPortions / (portions || 1);

    return (
      <Card className={classes.root}>
        <RecipeCardHeader
          id={id}
          description={description}
          name={name}
          u_id={u_id}
          portions={portions}
          link={link}
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
              {recipe_items?.map((row) => (
                <RecipeTableEditableRow
                  foodQR={foodQR}
                  recipeQR={recipeQR}
                  recipe_id={id}
                  row={row}
                  key={row.id}
                  u_id={u_id}
                  coefficientForPortions={coefficientForPortions}
                />
              ))}
              {/*Row total for portions: */}
              {recipe_items && recipe_items?.length > 1 && (
                <TableRow>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      <Trans>TOTAL</Trans>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "weight"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "energy_cal"),
                        coefficientForPortions
                      )}
                      &nbsp;kCal |&nbsp;
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "energy_kj"),
                        coefficientForPortions
                      )}
                      &nbsp;kJ
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "proteins"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "carbohydrates"),
                        coefficientForPortions
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={"button"} color={"textSecondary"}>
                      {getValueByPortionCoefficient(
                        aggregate(recipe_items, "fats"),
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
                  key={id}
                  recipe_id={id}
                  row={{ id: NIL, weight: 100 }}
                  u_id={u_id}
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
      </Card>
    );
  }
);
