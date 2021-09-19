import { gql } from "@apollo/client/core";

export const RECIPES_LISTING_DOCUMENT = gql`
  query RecipeListing {
    recipe(order_by: { increment: desc }) {
      id
      name
      description
      u_id
      link
      portions
      recipe_items {
        id
        food {
          id
          name
        }
        proteins
        fats
        carbohydrates
        energy_cal
        energy_kj
        weight
      }
    }
  }
`;
