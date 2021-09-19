import { gql } from "@apollo/client";

export const DELETE_RECIPE_ITEM_DOCUMENT = gql`
  mutation DeleteRecipeItemByPK($id: uuid!) {
    delete_recipe_item_by_pk(id: $id) {
      id
    }
  }
`;
