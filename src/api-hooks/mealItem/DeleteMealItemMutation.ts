import { graphql } from "react-relay";

export const DeleteMealItemMutation = graphql`
  mutation DeleteMealItemMutation($id: uuid!) {
    delete_meal_item_by_pk(id: $id) {
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
`;
