import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "flex-end",
    },
    sectionDesktop: {
      display: "flex",
      position: "relative",
    },
    btn: {
      padding: 0,
    },
  })
);
export default useStyles;
