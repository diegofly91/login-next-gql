import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./states/component.state";
import { updateComponent, updateDrawer } from "./reducer/component.reducer";

export const slice = createSlice({
  name: "component",
  initialState,
  reducers: {
    UpdateComponent: updateComponent,
    UpdateDrawer: updateDrawer,
  },
});

export const { UpdateComponent, UpdateDrawer } = slice.actions;
export default slice.reducer;
