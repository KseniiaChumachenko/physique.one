import { graphql } from "react-relay";

export const RecipeQuery = graphql`
  query RecipeQuery {
    recipe_connection(order_by: { increment: desc }, last: 10000)
      @connection(key: "Listing__recipe_connection") {
      __id
      edges {
        node {
          id
          name
          description
          u_id
          link
          portions
          isOwner
          recipe_items {
            id
            u_id
            isOwner
            food {
              id
              name
              food_brand {
                name
              }
            }
            proteins
            fats
            carbohydrates
            energy_cal
            energy_kj
            weight
          }
          recipe_items_aggregate {
            aggregate {
              sum {
                energy_cal
                energy_kj
                carbohydrates
                proteins
                fats
              }
            }
          }
        }
      }
    }
  }
`;
