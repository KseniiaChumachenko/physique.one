import React, { useState } from "react";
import { TableCell, TableRow, TextField, Typography } from "@material-ui/core";
import { EditDeleteButtonGroup } from "src/screens/components/EditDeletButtonGroup";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { useIsMobile } from "src/hooks/useIsMobile";
import { Meal_Item } from "src/types";
import { RecipeQuery$data } from "src/api-hooks/recipe";
import { MealAutocomplete } from "../MealAutocomplete";
import { Props as BaseProps } from "./index";
import { useStyles } from "./styles";

// TODO: be more generic than import from Recipes
type foodType =
  RecipeQuery$data["recipe_connection"]["edges"][0]["node"]["recipe_items"][0]["food"];

export type RowData = Pick<
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
> & {
  isOwner: boolean;
  food_id: string;
  food: foodType;
};

type Props = { data: RowData } & RecipesPreloadedHookProps &
  FoodPreloadedHookProps &
  Pick<
    BaseProps,
    "isEditable" | "withRecipes" | "onSubmitRowChange" | "onRemoveRow"
  >;

export const Row = ({
  recipesQR,
  foodQR,
  isEditable,
  onSubmitRowChange,
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
                value={weight}
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
          <TableCell component="th" scope="row" children={values.weight} />
        </>
      )}
      <TableCell
        component="th"
        scope="row"
        children={
          <React.Fragment>
            {values?.energy_cal}
            &nbsp;|&nbsp;
            {values?.energy_kj}
          </React.Fragment>
        }
      />
      {!isMobile && (
        <>
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={values?.proteins}
          />
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={values?.carbohydrates}
          />
          <TableCell
            component="th"
            scope="row"
            align={"right"}
            children={values?.fats}
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
