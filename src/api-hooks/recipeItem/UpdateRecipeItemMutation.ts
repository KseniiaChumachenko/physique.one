import { graphql } from "react-relay";

export const UpdateRecipeItemMutation = graphql`
  mutation UpdateRecipeItemMutation($id: uuid!, $recipe_id: uuid!) {
    update_recipe_item_by_pk(pk_columns: { id: $id }) {
      recipe {
        description
        id
        increment
        link
        name
        portions
        u_id
        recipe_items_connection(where: { recipe_id: { _eq: $recipe_id } }) {
          edges {
            node {
              carbohydrates
              energy_cal
              energy_kj
              fats
              food_id
              id
              proteins
              recipe_id
              u_id
              weight
            }
          }
        }
      }
    }
  }
`;
