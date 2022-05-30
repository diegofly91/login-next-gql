import { IFormInput } from "@/interfaces/form/IFormInput";

export const ListProfileInputs: IFormInput[] = [
  {
    title: "NOMBRE",
    name: "firstname",
    type: "text",
    fullWidth: true,
    md: 8,
    xs: 10,
  },
  {
    title: "APELLIDO",
    name: "lastname",
    type: "text",
    fullWidth: true,
    md: 8,
    xs: 10,
  },
  {
    title: "CORREO ELECTRONICO",
    name: "email",
    type: "email",
    fullWidth: true,
    md: 8,
    xs: 10,
  },
  {
    title: "TELEFONO",
    name: "phone",
    type: "text",
    fullWidth: true,
    md: 8,
    xs: 10,
  },
];
