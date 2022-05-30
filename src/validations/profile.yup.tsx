import * as yup from "yup";
import { IProfile } from "@/interfaces/index";
import { ProfileRows } from "@/enums/profile.rows.enums";

export const ProfileYup = yup.object().shape({
  [`${ProfileRows.firstname}`]: yup.string().optional(),
  [`${ProfileRows.lastname}`]: yup.string().optional(),
  [`${ProfileRows.email}`]: yup
    .string()
    .email()
    .required("el email es requerido"),
  [`${ProfileRows.phone}`]: yup.string().optional(),
} as Record<keyof IProfile, any>);
