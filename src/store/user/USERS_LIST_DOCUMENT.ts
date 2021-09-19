import { gql } from "@apollo/client";

export const USERS_LIST_DOCUMENT = gql`
  query Users {
    users {
      id
      first_name
      last_name
      full_name
      user_name
      email
      fb_id
      fb_picture_url
    }
  }
`;
