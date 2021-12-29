import {
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay";
import { userQuery } from "./__generated__/userQuery.graphql";

export const UserQuery = graphql`
  query userQuery($id: uuid) {
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

export const useUserQuery = () => {
  return useQueryLoader<userQuery>(UserQuery);
};

export const useUserPreloadedQuery = (
  userQueryRef: PreloadedQuery<userQuery>
) => {
  return usePreloadedQuery<userQuery>(UserQuery, userQueryRef);
};

//TODO: issue with build: error with subscription transport
