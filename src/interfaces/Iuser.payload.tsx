export interface IUserPayload {
  readonly id: number;

  readonly username: string;

  readonly status?: string;

  readonly roleId: number;

  readonly roleName: string;

  readonly companyId?: number;
}
