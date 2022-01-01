import { graphql } from "react-relay";

export const AddMealMutation = graphql`
  mutation AddMealMutation($data: [meal_insert_input!]!) {
    insert_meal(objects: $data) {
      returning {
        id
        time
        date
        name
        meal_items_connection {
          edges {
            node {
              id
              u_id
              meal_id
              food
              foodDesc {
                id
                name
                energy_cal
                energy_kj
                carbohydrates
                fats
                proteins
              }
              weight
              carbohydrates
              proteins
              fats
              energy_cal
              energy_kj

              recipe_id
              recipe {
                name
              }
            }
            cursor
          }
        }
      }
    }
  }
`;
