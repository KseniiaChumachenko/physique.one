import { graphql } from "react-relay";

export const UpdateFoodBrandMutation = graphql`
  mutation UpdateFoodBrandMutation($_set: food_brand_set_input!, $id: uuid!) {
    update_food_brand_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      name
    }
  }
`;
