import { graphql } from "react-relay";

// TODO: update hasura then uncoment part of the query
export const UpdateRecipeMutation = graphql`
  mutation UpdateRecipeMutation($id: uuid!, $set: recipe_set_input) {
    update_recipe_by_pk(pk_columns: { id: $id }, _set: $set) {
      description
      id
      link
      increment
      name
      portions
      u_id
      #      recipe_items_connection(where: { recipe_id: { _eq: $id } }) {
      #        edges {
      #          node {
      #            weight
      #            u_id
      #            recipe_id
      #            proteins
      #            id
      #            food_id
      #            fats
      #            energy_kj
      #            energy_cal
      #            carbohydrates
      #          }
      #        }
      #      }
      recipe_items_aggregate {
        aggregate {
          sum {
            carbohydrates
            energy_cal
            energy_kj
            fats
            proteins
            weight
          }
        }
      }
    }
  }
`;
