import { RoleType } from "../enums";
export interface IUserPayload {
  readonly id: number;

  readonly username: string;

  readonly status?: string;

  readonly roleId: number;

  readonly roleName?: RoleType;

  readonly companyId?: number;
}
