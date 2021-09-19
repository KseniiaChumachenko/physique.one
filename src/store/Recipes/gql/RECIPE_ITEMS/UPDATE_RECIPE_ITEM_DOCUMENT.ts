import { gql } from "@apollo/client";

export const UPDATE_RECIPE_ITEM_DOCUMENT = gql`
  mutation UpdateRecipeItemByPK(
    $id: uuid!
    $food_id: uuid!
    $weight: numeric
    $energy_cal: numeric
    $energy_kj: numeric
    $proteins: numeric
    $carbohydrates: numeric
    $fats: numeric
  ) {
    update_recipe_item_by_pk(
      pk_columns: { id: $id }
      _set: {
        food_id: $food_id
        weight: $weight
        energy_cal: $energy_cal
        energy_kj: $energy_kj
        proteins: $proteins
        carbohydrates: $carbohydrates
        fats: $fats
      }
    ) {
      id
    }
  }
`;
