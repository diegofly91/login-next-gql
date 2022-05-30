import { gql } from "@apollo/client";

export const USER_CURRENT = gql`
  query {
    userCurrent {
      id
      roleId
      username
      status
      roleName
      companyId
    }
  }
`;
