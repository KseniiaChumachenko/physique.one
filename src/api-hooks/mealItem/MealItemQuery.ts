import { graphql } from "react-relay";

export const MealItemQuery = graphql`
  query MealItemQuery($id: uuid = "", $u_id: uuid = "") {
    meal_item_connection(where: { id: { _eq: $id }, u_id: { _eq: $u_id } }) {
      edges {
        cursor
        node {
          weight
          u_id
          recipe_id
          proteins
          meal_id
          id
          food
          fats
          energy_kj
          energy_cal
          carbohydrates
        }
      }
    }
  }
`;
