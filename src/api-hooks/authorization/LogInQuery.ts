import { graphql } from "react-relay";

export const LogInQuery = graphql`
  query LogInQuery($where: users_bool_exp!) {
    users_connection(where: $where) {
      edges {
        node {
          id
          email
          user_name
          first_name
          last_name
          full_name
          fb_id
          fb_picture_url
          password
        }
      }
    }
  }
`;
