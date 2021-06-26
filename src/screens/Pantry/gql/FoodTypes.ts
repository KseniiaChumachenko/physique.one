import { gql } from "@apollo/client";

const FOOD_TYPES_DOCUMENT = gql`
  query FoodTypes {
    food_type {
      value
      decription
      img_url
      food_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

const ADD_FOOD_TYPE_DOCUMENT = gql`
  mutation AddFoodType($decription: String, $img_url: String, $value: String!) {
    insert_food_type_one(
      object: { img_url: $img_url, decription: $decription, value: $value }
    ) {
      value
      decription
      img_url
      food_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

const DELETE_FOOD_TYPE_DOCUMENT = gql`
  mutation DeleteFoodType($value: String!) {
    delete_food_type_by_pk(value: $value) {
      value
    }
  }
`;

const UPDATE_FOOD_TYPE_DOCUMENT = gql`
  mutation UpdateFoodType(
    $decription: String
    $img_url: String
    $value: String!
  ) {
    update_food_type_by_pk(
      pk_columns: { value: $value }
      _set: { value: $value, decription: $decription, img_url: $img_url }
    ) {
      value
      decription
      img_url
      food_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export {
  FOOD_TYPES_DOCUMENT,
  ADD_FOOD_TYPE_DOCUMENT,
  UPDATE_FOOD_TYPE_DOCUMENT,
  DELETE_FOOD_TYPE_DOCUMENT,
};
