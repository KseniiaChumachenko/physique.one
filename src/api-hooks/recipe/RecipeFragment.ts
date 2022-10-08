import { graphql } from "react-relay";

export const RecipeFragment = graphql`
  fragment RecipeFragment on query_root
  @refetchable(queryName: "RecipeFragment") {
    recipe_connection(first: $count, after: $cursor)
      @connection(key: "Root__recipe_connection") {
      edges {
        node {
          id
          name
          description
          u_id
          link
          portions
          recipe_items {
            id
            food {
              id
              name
            }
            proteins
            fats
            carbohydrates
            energy_cal
            energy_kj
            weight
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;
