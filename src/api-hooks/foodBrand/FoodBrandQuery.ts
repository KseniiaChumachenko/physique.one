import graphql from 'babel-plugin-relay/macro';

export const FoodBrandQuery = graphql`
  query FoodBrandQuery {
    food_brand_connection(order_by: { name: asc }) {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;
