import { IUserPayload } from "@/interfaces/index";
import { RoleType } from "@/enums/roletype";

export const initialUserPayloadState: IUserPayload = {
  id: 0,
  username: "",
  status: "",
  roleId: 0,
  roleName: RoleType.UNDEFINED,
  companyId: 0,
};
