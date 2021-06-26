import { gql } from "@apollo/client";

const PANTRIES_LISTING_DOCUMENT = gql`
  query PantriesListing($u_id: uuid!) {
    pantry(where: { pantry_users: { user_id: { _eq: $u_id } } }) {
      name
      id
      pantry_users {
        user {
          user_name
        }
      }
      pantry_items_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

const ADD_PANTRY_DOCUMENT = gql`
  mutation AddPantry(
    $name: name
    $pantry_users: pantry_user_arr_rel_insert_input
  ) {
    insert_pantry_one(object: { name: $name, pantry_users: $pantry_users }) {
      name
      pantry_users {
        user_id
      }
    }
  }
`;

const ADD_PANTRY_USER_DOCUMENT = gql`
  mutation RemovePantryUser($user_id: uuid!, $pantry_id: uuid!) {
    insert_pantry_user_one(
      object: { user_id: $user_id, pantry_id: $pantry_id }
    ) {
      user_id
    }
  }
`;

const UPDATE_PANTRY_NAME_DOCUMENT = gql`
  mutation EditPantryDocument($id: uuid!, $name: name) {
    update_pantry_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      name
    }
  }
`;

const REMOVE_PANTRY_DOCUMENT = gql`
  mutation RemovePantryUser($id: uuid!) {
    delete_pantry_items(where: { pantry_id: { _eq: $id } }) {
      affected_rows
    }
    delete_pantry_by_pk(id: $id) {
      id
    }
  }
`;
const REMOVE_PANTRY_USER_DOCUMENT = gql`
  mutation RemovePantryUser($id: uuid!) {
    delete_pantry_user_by_pk(id: $id) {
      user_id
    }
  }
`;

export {
  PANTRIES_LISTING_DOCUMENT,
  ADD_PANTRY_DOCUMENT,
  ADD_PANTRY_USER_DOCUMENT,
  REMOVE_PANTRY_USER_DOCUMENT,
  UPDATE_PANTRY_NAME_DOCUMENT,
  REMOVE_PANTRY_DOCUMENT,
};

// const DOCUMENT = gql``
