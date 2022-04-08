import { graphql } from "react-relay";

export const UserQuery = graphql`
  query UserQuery($id: uuid) {
    users_connection(where: { id: { _eq: $id } }) {
      edges {
        node {
          id
          email
          first_name
          last_name
          user_name
          fb_id
          fb_picture_url
        }
      }
    }
  }
`;
