import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { IDashboard } from "@/interfaces/index";

export const updateComponent: CaseReducer<IDashboard, PayloadAction<string>> = (
  state,
  action
) => {
  state.path = action.payload;
};

export const updateDrawer: CaseReducer<IDashboard> = (state) => {
  state.drawer = !state.drawer;
};

export const updateSuccess: CaseReducer<IDashboard, PayloadAction<boolean>> = (
  state,
  action
) => {
  state.success = action.payload;
};
