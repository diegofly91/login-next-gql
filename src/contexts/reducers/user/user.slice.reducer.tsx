import { createSlice } from "@reduxjs/toolkit";
import { initialUserPayloadState } from "./states/user.state";
import { updateUserPayload, logOut } from "./reducer";

const slice = createSlice({
  name: "user",
  initialState: initialUserPayloadState,
  reducers: {
    UpdateUserPayload: updateUserPayload,
    LogOutUser: logOut,
  },
});

export const { UpdateUserPayload, LogOutUser } = slice.actions;
export default slice.reducer;
