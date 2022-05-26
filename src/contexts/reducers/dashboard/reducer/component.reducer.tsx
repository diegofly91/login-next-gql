import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { IDashboard } from "@/interfaces/index";

export const updateComponent: CaseReducer<
  IDashboard,
  PayloadAction<IDashboard>
> = (state, action) => {
  state.component = action.payload.component;
  state.path = action.payload.path;
};

export const updateDrawer: CaseReducer<IDashboard> = (state) => {
  state.drawer = !state.drawer;
};
