import {
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay";
import { userQuery } from "../../graphql/__generated__/userQuery.graphql";

export const UserQuery = graphql`
  query userQuery($id: uuid) {
    users(where: { id: { _eq: $id } }) {
      id
      email
      first_name
      last_name
      user_name
      fb_id
      fb_picture_url
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
