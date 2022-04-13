import graphql from 'babel-plugin-relay/macro';

export const GetForgottenPasswordByEmailQuery = graphql`
  query GetForgottenPasswordByEmailQuery($where: users_bool_exp) {
    users_connection(where: $where) {
      edges {
        node {
          password
        }
      }
    }
  }
`;
