import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { IUserPayload } from "@/interfaces/user.payload";

export const updateUserPayload: CaseReducer<
  IUserPayload,
  PayloadAction<IUserPayload>
> = (state, action) => {
  const { id, username, roleId, roleName, companyId, status } = action.payload;
  state.id = id;
  state.username = username;
  state.roleId = roleId;
  state.status = status;
  state.roleName = roleName;
  state.companyId = companyId;
};
