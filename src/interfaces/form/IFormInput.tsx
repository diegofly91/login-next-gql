import { ProfileRows } from "@/enums/profile.rows.enums";

export interface IFormInput {
  title: string;
  name: keyof typeof ProfileRows;
  type: string;
  fullWidth: boolean;
  md?: number;
  xs?: number;
}

/*   const  ProfileRows = {
    firstname = 'firstname',
    lastname = 'lastname',
    email = 'email',
    phone = 'phone',
  } */
