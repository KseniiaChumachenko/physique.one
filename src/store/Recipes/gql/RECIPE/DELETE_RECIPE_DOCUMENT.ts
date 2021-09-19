import { gql } from "@apollo/client";

export const DELETE_RECIPE_DOCUMENT = gql`
  mutation DeleteRecipeByPK($id: uuid!) {
    delete_recipe_by_pk(id: $id) {
      id
    }
  }
`;
