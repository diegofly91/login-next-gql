import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateProfileUserDto!) {
    updateProfileUser(input: $input) {
      userId
    }
  }
`;
