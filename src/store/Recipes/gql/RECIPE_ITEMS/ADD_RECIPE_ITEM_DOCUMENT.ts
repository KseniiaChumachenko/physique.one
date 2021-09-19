import { gql } from "@apollo/client";

export const ADD_RECIPE_ITEM_DOCUMENT = gql`
  mutation AddRecipeItem(
    $id: uuid!
    $energy_cal: numeric
    $energy_kj: numeric
    $proteins: numeric
    $carbohydrates: numeric
    $fats: numeric
    $recipe_id: uuid!
    $food_id: uuid!
    $u_id: uuid!
    $weight: numeric!
  ) {
    insert_recipe_item_one(
      object: {
        id: $id
        u_id: $u_id
        food_id: $food_id
        recipe_id: $recipe_id
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
