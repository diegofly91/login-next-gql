import * as yup from "yup";
import { ILogin } from "@/interfaces/login";

export const LoginYup = yup.object().shape({
  password: yup
    .string()
    .min(8, "Contraseña minimo de 8 caracteres")
    .required("Contraseña requerida"),
  username: yup
    .string()
    .min(5, "Usuario minimo de 8 caracteres")
    .required("Usuario requerida"),
} as Record<keyof ILogin, any>);
