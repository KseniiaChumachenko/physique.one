import graphql from 'babel-plugin-relay/macro';

export const FoodTypeQuery = graphql`
  query FoodTypeQuery {
    food_type_connection {
      edges {
        cursor
        node {
          id
          decription
          value
          img_url
        }
      }
    }
  }
`;
