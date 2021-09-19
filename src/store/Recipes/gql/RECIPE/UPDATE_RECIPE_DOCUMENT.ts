import { gql } from "@apollo/client";

export const UPDATE_RECIPE_DOCUMENT = gql`
  mutation UpdateRecipe(
    $id: uuid!
    $name: String
    $description: String
    $link: String
    $portions: Int
  ) {
    update_recipe_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        description: $description
        link: $link
        portions: $portions
      }
    ) {
      id
    }
  }
`;
