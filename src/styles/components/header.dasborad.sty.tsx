import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      height: theme.height.header,
      boxShadow:
        "0px 1px 1px -1px rgba(0,0,0,0.05), 0px 1px 2px 0px rgba(0,0,0,0.05), 0px 1px 2px 0px rgba(0,0,0,0.05)",
    },
    navBar: {
      display: "flex",
      padding: 0,
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

export default useStyles;
