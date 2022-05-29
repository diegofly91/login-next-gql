import { PayloadAction, CaseReducer } from "@reduxjs/toolkit";
import { IUserPayload, IProfile } from "@/interfaces/index";

interface IUser extends IUserPayload, IProfile {}

export const updateUserPayload: CaseReducer<
  IUser,
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

export const updateProfile: CaseReducer<IUser, PayloadAction<IProfile>> = (
  state,
  action
) => {
  const { firstname, lastname, phone, email } = action.payload;
  state.firstname = firstname;
  state.lastname = lastname;
  state.phone = phone;
  state.email = email;
};

export const updateUserKeyValue: CaseReducer<
  IUser,
  PayloadAction<{ key: string; value: any }>
> = (state, action) => {
  const { key, value } = action.payload;
  return {
    ...state,
    [key]: value,
  };
};

export const logOut: CaseReducer<IUser> = (state) => {};
