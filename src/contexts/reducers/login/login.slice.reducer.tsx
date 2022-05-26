import { createSlice } from "@reduxjs/toolkit";
import { initialLoginState } from "./states/login.state";
import { updatePassword, updateUsername } from "./reducer";

const slice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    UpdatePassword: updatePassword,
    UpdateUsername: updateUsername,
  },
});

export const { UpdatePassword, UpdateUsername } = slice.actions;
export default slice.reducer;
