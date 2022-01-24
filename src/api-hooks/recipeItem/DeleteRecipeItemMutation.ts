import { graphql } from "react-relay";

export const DeleteRecipeItemMutation = graphql`
  mutation DeleteRecipeItemMutation($recipe_id: uuid!) {
    delete_recipe_item(where: { recipe_id: { _eq: $recipe_id } }) {
      returning {
        id @deleteRecord
      }
    }
  }
`;
