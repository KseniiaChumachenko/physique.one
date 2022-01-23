import { graphql } from "react-relay";

export const DeleteFoodBrandMutation = graphql`
  mutation DeleteFoodBrandMutation($id: uuid!) {
    delete_food_brand_by_pk(id: $id) {
      id
      name
    }
  }
`;
