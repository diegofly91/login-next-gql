import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { ILogin } from "@/interfaces/index";

export const updateUsername: CaseReducer<ILogin, PayloadAction<string>> = (
  state,
  action
) => {
  state.username = action.payload;
};

export const updatePassword: CaseReducer<ILogin, PayloadAction<string>> = (
  state,
  action
) => {
  state.password = action.payload;
};
