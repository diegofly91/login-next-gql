import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($input: LoginUserDto!) {
    loginUser(input: $input) {
      access_token
    }
  }
`;
