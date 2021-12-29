import { graphql } from "react-relay";

export const AddMealMutation = graphql`
  mutation AddMealMutation(
    $name: String
    $date: date
    $time: time
    $data: [meal_item_insert_input!]!
    $u_id: uuid!
  ) {
    insert_meal_one(
      object: {
        date: $date
        time: $time
        meal_items: { data: $data }
        name: $name
        u_id: $u_id
      }
    ) {
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
`;
