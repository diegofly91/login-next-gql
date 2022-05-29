import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      padding: 20,
      minHeight: 50,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "wrap",
      color: "#463f3f",

      [theme.breakpoints.down("sm")]: {
        padding: 0,
        overflow: "visible",
      },
    },
  })
);

export default useStyles;
