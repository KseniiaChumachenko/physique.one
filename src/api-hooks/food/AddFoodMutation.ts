import graphql from 'babel-plugin-relay/macro';

export const AddFoodMutation = graphql`
  mutation AddFoodMutation($objects: [food_insert_input!]!) {
    insert_food(objects: $objects) {
      returning {
        weight
        u_id
        type
        proteins
        name
        id
        fats
        energy_kj
        energy_cal
        carbohydrates
        brand_id
        food_brand {
          name
          id
        }
      }
    }
  }
`;
