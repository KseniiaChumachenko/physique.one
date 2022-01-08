import { gql } from "@apollo/client";

export const UPDATE_FOOD_LIBRARY_ITEM_DOCUMENT = gql`
  mutation UpdateFoodLibraryItem(
    $id: uuid!
    $name: String
    $proteins: numeric
    $fats: numeric
    $energy_kj: numeric
    $energy_cal: numeric
    $carbohydrates: numeric
    $type: String
  ) {
    update_food_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        energy_cal: $energy_cal
        energy_kj: $energy_kj
        proteins: $proteins
        type: $type
        fats: $fats
        carbohydrates: $carbohydrates
      }
    ) {
      id
    }
  }
`;
