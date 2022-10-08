import { graphql } from "react-relay";

export const RegisterMutation = graphql`
  mutation RegisterMutation($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      first_name
      full_name
      last_name
      password
      user_name
      email
    }
  }
`;
