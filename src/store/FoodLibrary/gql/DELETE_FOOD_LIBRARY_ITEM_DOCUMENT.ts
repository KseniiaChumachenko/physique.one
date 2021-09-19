import { gql } from "@apollo/client";

export const DELETE_FOOD_LIBRARY_ITEM_DOCUMENT = gql`
  mutation DeleteFoodLibraryItem($id: uuid!) {
    delete_food_by_pk(id: $id) {
      id
    }
  }
`;
