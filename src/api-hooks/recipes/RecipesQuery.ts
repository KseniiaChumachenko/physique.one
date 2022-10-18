import { graphql } from "react-relay";

export const RecipesQuery = graphql`
  query RecipesQuery {
    recipe_connection(order_by: { increment: desc }, last: 10000) {
      edges {
        node {
          id
          name
          recipe_items_aggregate {
            aggregate {
              sum {
                energy_cal
                energy_kj
                carbohydrates
                proteins
                fats
                weight
              }
            }
          }
        }
      }
    }
  }
`;
