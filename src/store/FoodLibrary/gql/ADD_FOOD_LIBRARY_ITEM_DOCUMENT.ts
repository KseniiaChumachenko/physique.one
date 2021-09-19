import { gql } from "@apollo/client";

export const ADD_FOOD_LIBRARY_ITEM_DOCUMENT = gql`
  mutation AddFoodLibraryItem(
    $id: uuid!
    $name: bpchar
    $proteins: numeric
    $fats: numeric
    $energy_kj: numeric
    $energy_cal: numeric
    $carbohydrates: numeric
    $type: String
    $u_id: uuid!
  ) {
    insert_food(
      objects: {
        id: $id
        name: $name
        type: $type
        energy_cal: $energy_cal
        energy_kj: $energy_kj
        proteins: $proteins
        carbohydrates: $carbohydrates
        fats: $fats
        u_id: $u_id
      }
    ) {
      affected_rows
    }
  }
`;
