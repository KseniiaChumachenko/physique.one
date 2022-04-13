import graphql from 'babel-plugin-relay/macro';

export const DeleteMealMutation = graphql`
  mutation DeleteMealMutation($id: uuid!) {
    delete_meal_item(where: { meal_id: { _eq: $id } }) {
      returning {
        id @deleteRecord
      }
    }
    delete_meal_by_pk(id: $id) {
      id @deleteRecord
    }
  }
`;
