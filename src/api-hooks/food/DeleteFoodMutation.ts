import graphql from 'babel-plugin-relay/macro';

export const DeleteFoodMutation = graphql`
  mutation DeleteFoodMutation($id: uuid!) {
    delete_food_by_pk(id: $id) {
      brand_id
      carbohydrates
      energy_cal
      energy_kj
      fats
      food_brand {
        id
        name
      }
      id @deleteRecord
      name
      proteins
      type
      u_id
      weight
    }
  }
`;
