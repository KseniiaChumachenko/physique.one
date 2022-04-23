import { graphql } from "react-relay";

export const UsersQuery = graphql`
  query UsersQuery {
    users_connection {
      edges {
        node {
          id
          email
          first_name
          last_name
          user_name
          fb_id
          fb_picture_url
          isActive
        }
      }
    }
  }
`;
