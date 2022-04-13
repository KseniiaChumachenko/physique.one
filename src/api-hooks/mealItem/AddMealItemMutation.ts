import { graphql } from "react-relay";

export const AddMealItemMutation = graphql`
  mutation AddMealItemMutation($objects: [meal_item_insert_input!]!) {
    insert_meal_item(objects: $objects) {
      returning {
        carbohydrates
        energy_cal
        energy_kj
        fats
        food
        id
        meal_id
        proteins
        recipe_id
        u_id
        weight
      }
    }
  }
`;
