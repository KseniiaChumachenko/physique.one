import graphql from 'babel-plugin-relay/macro';

export const RecipeQuery = graphql`
  query RecipeQuery {
    recipe_connection(order_by: { increment: desc }) {
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
    }
  }
`;
