import graphql from 'babel-plugin-relay/macro';

export const UpdateMealItemMutation = graphql`
  mutation UpdateMealItemMutation($id: uuid!, $_set: meal_item_set_input = {}) {
    update_meal_item_by_pk(pk_columns: { id: $id }, _set: $_set) {
      carbohydrates
      energy_cal
      energy_kj
      fats
      food
      id
      meal_id
      proteins
      recipe_id
      u_id
      weight
    }
  }
`;
