import { graphql } from "react-relay";

// TODO: update hasura engine for support of fetching on mutation
export const UpdateRecipeItemMutation = graphql`
  mutation UpdateRecipeItemMutation(
    $id: uuid!
    #    $recipe_id: uuid!
    $set: recipe_item_set_input
  ) {
    update_recipe_item_by_pk(pk_columns: { id: $id }, _set: $set) {
      recipe {
        description
        id
        increment
        link
        name
        portions
        u_id
        #        recipe_items_connection(where: { recipe_id: { _eq: $recipe_id } }) {
        #          edges {
        #            node {
        #              carbohydrates
        #              energy_cal
        #              energy_kj
        #              fats
        #              food_id
        #              id
        #              proteins
        #              recipe_id
        #              u_id
        #              weight
        #            }
        #          }
        #        }
      }
    }
  }
`;
