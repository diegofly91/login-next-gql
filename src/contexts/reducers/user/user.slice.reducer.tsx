import { createSlice } from "@reduxjs/toolkit";
import { initialUserPayloadState, initialProfile } from "./states/index";
import {
  updateUserPayload,
  logOut,
  updateProfile,
  updateUserKeyValue,
} from "./reducer";

const slice = createSlice({
  name: "user",
  initialState: { ...initialUserPayloadState, ...initialProfile },
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
