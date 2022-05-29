import { IDashboard } from "@/interfaces/index";
import { Container } from "@mui/material";

export const initialState: IDashboard = {
  component: <Container />,
  path: "",
  drawer: false,
};
