import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./states/component.state";
import {
  updateComponent,
  updateDrawer,
  updateSuccess,
} from "./reducer/component.reducer";

export const slice = createSlice({
  name: "component",
  initialState,
  reducers: {
    UpdateComponent: updateComponent,
    UpdateDrawer: updateDrawer,
    UpdateSuccess: updateSuccess,
  },
});

export const { UpdateComponent, UpdateDrawer, UpdateSuccess } = slice.actions;
export default slice.reducer;
