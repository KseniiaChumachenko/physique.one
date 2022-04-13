import { graphql } from "react-relay";

export const AddRecipeMutation = graphql`
  mutation AddRecipeMutation($objects: [recipe_insert_input!]!) {
    insert_recipe(objects: $objects) {
      returning {
        description
        id
        increment
        link
        name
        portions
        u_id
        recipe_items {
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
  }
`;
