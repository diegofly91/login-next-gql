import { gql } from "@apollo/client";

export const USER_PROFILE = gql`
  query ($userId: Int!) {
    getProfileUserById(userId: $userId) {
      firstname
      lastname
      email
      phone
    }
  }
`;
