import { createSlice } from "@reduxjs/toolkit";
import { initialUserPayloadState, initialProfile } from "./states/index";
import {
  updateUserPayload,
  logOut,
  updateProfile,
  updateUserKeyValue,
} from "./reducer";

import { IUser } from "@/interfaces/IUser";

const userInitial: IUser = {
  ...initialUserPayloadState,
  ...initialProfile,
};

const slice = createSlice({
  name: "user",
  initialState: userInitial,
  reducers: {
    UpdateUserPayload: updateUserPayload,
    LogOutUser: logOut,
    UpdateProfile: updateProfile,
    UpdateUserKeyValue: updateUserKeyValue,
  },
});

export const {
  UpdateUserPayload,
  LogOutUser,
  UpdateProfile,
  UpdateUserKeyValue,
} = slice.actions;
export default slice.reducer;
