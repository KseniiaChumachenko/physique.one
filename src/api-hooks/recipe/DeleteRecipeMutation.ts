import graphql from 'babel-plugin-relay/macro';

export const DeleteRecipeMutation = graphql`
  mutation DeleteRecipeMutation($id: uuid!) {
    delete_recipe_item(where: { recipe_id: { _eq: $id } }) {
      returning {
        id @deleteRecord
      }
    }

    delete_recipe_by_pk(id: $id) {
      id @deleteRecord
    }
  }
`;
