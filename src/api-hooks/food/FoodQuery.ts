import { graphql } from "react-relay";

export const FoodQuery = graphql`
  query FoodQuery {
    food_connection {
      edges {
        node {
          id
          name
          type
          food_brand {
            name
          }
          carbohydrates
          proteins
          fats
          energy_cal
          energy_kj
          u_id
          weight
        }
      }
    }
  }
`;
