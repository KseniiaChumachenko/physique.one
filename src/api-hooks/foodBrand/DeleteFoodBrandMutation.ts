import graphql from 'babel-plugin-relay/macro';

export const DeleteFoodBrandMutation = graphql`
  mutation DeleteFoodBrandMutation($id: uuid!) {
    delete_food_brand_by_pk(id: $id) {
      id @deleteRecord
      name
    }
  }
`;
