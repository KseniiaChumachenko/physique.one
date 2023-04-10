import React, { useState } from "react";
import { TableCell, TableRow, TextField, Typography } from "@material-ui/core";
import { EditDeleteButtonGroup } from "src/screens/components/EditDeletButtonGroup";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { useIsMobile } from "src/hooks/useIsMobile";
import { Meal_Item } from "src/types";
import { RecipeQuery$data } from "src/api-hooks/recipe";
import { MealAutocomplete } from "../MealAutocomplete";
import {
  getValueByPortionCoefficient,
} from "../../screens/Recipes/utils";
import { Props as BaseProps } from "./index";
import { useStyles } from "./styles";

const ENERGY_KEYS: Array<keyof FoodDefinition> = ["energy_cal", "energy_kj"];

const MACROS_KEYS: Array<keyof FoodDefinition> = ["proteins", "carbohydrates", "fats"];

// TODO: be more generic than import from Recipes
type foodType =
  RecipeQuery$data["recipe_connection"]["edges"][0]["node"]["recipe_items"][0]["food"];

type FoodDefinition = Pick<
    Meal_Item,
    | "id"
    | "recipe_id"
    | "recipe"
    | "weight"
    | "energy_cal"
    | "energy_kj"
    | "proteins"
    | "carbohydrates"
    | "fats"
>

export type RowData = FoodDefinition & {
  isOwner: boolean;
  food_id: string;
  food: foodType;
};

type Props = { data: RowData } & RecipesPreloadedHookProps &
  FoodPreloadedHookProps &
  Pick<
    BaseProps,
    "isEditable" | "withRecipes" | "onSubmitRowChange" | "onRemoveRow"
  > & { coefficientForPortions: number };

export const Row = ({
  recipesQR,
  foodQR,
  isEditable,
  onSubmitRowChange,
  coefficientForPortions,
  onRemoveRow,
  withRecipes,
  data: values,
}: Props) => {
  const isMobile = useIsMobile();
  const classes = useStyles();
  const [item, setItem] = useState(values.food_id || values.recipe_id || "");
  const [weight, setWeight] = useState(values.weight || 100); // initial value is not updated after value props are updated

  const name = values?.food?.name || values?.recipe?.name;
  const brand = values?.food?.food_brand?.name;

  const handleSetItem = (id: string, type?: "food" | "recipe") => {
    setItem(id);
    if (type === "recipe") {
      onSubmitRowChange({
        ...values,
        weight,
        recipe_id: id,
        id: values.id,
      });
    } else {
      onSubmitRowChange({
        ...values,
        weight,
        food_id: id,
        id: values.id,
      });
    }
  };

  const handleSetWeight = (weight: number) => {
    setWeight(weight);
    onSubmitRowChange({ ...values, weight, id: values.id });
  };

  const handleDelete = () => {
    if (values.id) {
      onRemoveRow(values.id);
    }
  };

  const weightValue = getValueByPortionCoefficient(
    values.weight,
    coefficientForPortions
  );

  const energyValues = ENERGY_KEYS.map((k) =>
    getValueByPortionCoefficient(values[k] as number, coefficientForPortions)
  );

  const macrosValues = MACROS_KEYS.map((k) =>
    getValueByPortionCoefficient(values[k] as number, coefficientForPortions)
  );

  return (
    <TableRow>
      {isEditable ? (
        <>
          <TableCell
            component="th"
            scope="row"
            className={classes.foodCell}
            children={
              <MealAutocomplete
                recipesQR={recipesQR}
                foodQR={foodQR}
                value={item}
                setValue={handleSetItem}
                withRecipes={withRecipes}
                className={classes.foodSelect}
                fieldMargin={"none"}
                withInputLabel={false}
              />
            }
          />
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            className={classes.weightCell}
            children={
              <TextField
                value={weightValue}
                type={"number"}
                onChange={(event: any) => handleSetWeight(event?.target?.value)}
                className={classes.weightInput}
              />
            }
          />
        </>
      ) : (
        <>
          <TableCell
            component="th"
            scope="row"
            children={
              <>
                {name}
                {brand && (
                  <Typography variant={"caption"} color={"textSecondary"}>
                    {" " + brand}
                  </Typography>
                )}
              </>
            }
            className={classes.foodCellReadOnly}
          />
          <TableCell component="th" scope="row" children={weightValue} />
        </>
      )}
      <TableCell
        component="th"
        scope="row"
        children={
          <React.Fragment>
            {energyValues[0]}
            &nbsp;|&nbsp;
            {energyValues[1]}
          </React.Fragment>
        }
      />
      {!isMobile && (
        <>
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={macrosValues[0]}
          />
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={macrosValues[1]}
          />
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={macrosValues[2]}
          />
          {isEditable && (
            <TableCell
              component="th"
              scope="row"
              align={"right"}
              children={
                isEditable && (
                  <EditDeleteButtonGroup onDeleteClick={handleDelete} />
                )
              }
            />
          )}
        </>
      )}
    </TableRow>
  );
};
