import { Theme, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme extends Theme {
      width: {
        drawer: number;
      };
      height: {
        header: number,
      };
    }
    interface ThemeOptions extends ThemeOptions {
      width?: {
        drawer?: number;
      };
      height?: {
        header?: number,
      };
    }
}