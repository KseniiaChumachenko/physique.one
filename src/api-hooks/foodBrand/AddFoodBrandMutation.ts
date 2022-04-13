import graphql from 'babel-plugin-relay/macro';

export const AddFoodBrandMutation = graphql`
  mutation AddFoodBrandMutation($objects: [food_brand_insert_input!]!) {
    insert_food_brand(objects: $objects) {
      returning {
        id
        name
      }
    }
  }
`;
