import { gql } from "@apollo/client";

export const ADD_RECIPE_DOCUMENT = gql`
  mutation AddRecipe(
    $id: uuid!
    $u_id: uuid!
    $name: String
    $description: String
  ) {
    insert_recipe_one(
      object: { id: $id, u_id: $u_id, description: $description }
    ) {
      id
    }
  }
`;
