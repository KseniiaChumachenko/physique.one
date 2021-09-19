import { gql } from "@apollo/client/core";

export const FOODS_DOCUMENT = gql`
  query Foods {
    food {
      id
      name
      type
      carbohydrates
      proteins
      fats
      energy_cal
      energy_kj
      u_id
    }
  }
`;
