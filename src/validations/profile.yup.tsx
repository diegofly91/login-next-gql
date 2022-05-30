import * as yup from "yup";
import { IProfile } from "@/interfaces/index";

export const ProfileYup = yup.object().shape({
  firstname: yup.string().optional(),
  lastname: yup.string().optional(),
  email: yup.string().email().required("el email es requerido"),
  phone: yup.string().optional(),
} as Record<keyof IProfile, any>);
