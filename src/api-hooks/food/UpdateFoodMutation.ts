import graphql from 'babel-plugin-relay/macro';

export const UpdateFoodMutation = graphql`
  mutation UpdateFoodMutation($_set: food_set_input!, $id: uuid!) {
    update_food_by_pk(pk_columns: { id: $id }, _set: $_set) {
      brand_id
      carbohydrates
      energy_cal
      energy_kj
      fats
      food_brand {
        id
        name
      }
      id
      name
      proteins
      type
      u_id
      weight
    }
  }
`;
