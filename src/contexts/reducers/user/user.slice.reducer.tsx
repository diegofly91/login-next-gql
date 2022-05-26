import { createSlice } from "@reduxjs/toolkit";
import { initialUserPayloadState } from "./states/user.state";
import { updateUserPayload } from "./reducer";

const slice = createSlice({
  name: "user",
  initialState: initialUserPayloadState,
  reducers: {
    UpdateUserPayload: updateUserPayload,
  },
});

export const { UpdateUserPayload } = slice.actions;
export default slice.reducer;
