import { graphql } from "react-relay";

export const AddRecipeItemMutation = graphql`
  mutation AddRecipeItemMutation(
    $id: uuid!
    $objects: [recipe_item_insert_input!]!
  ) {
    insert_recipe_item(objects: $objects) {
      returning {
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
        recipe {
          description
          id
          increment
          link
          name
          portions
          u_id
          recipe_items_connection(where: { id: { _eq: $id } }) {
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
  }
`;
