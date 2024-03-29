import { graphql } from "react-relay";

export const DeleteRecipeItemMutation = graphql`
  mutation DeleteRecipeItemMutation($id: uuid!) {
    delete_recipe_item(where: { id: { _eq: $id } }) {
      returning {
        id @deleteRecord
      }
    }
  }
`;
