import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    textField: {
      width: "100%",
      minWidth: "300px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    button: {
      padding: "10px 10px",
      textTransform: "capitalize",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      border: "none",
      zIndex: 11,
      color: "white",
      width: 150,
    },
  })
);

export default useStyles;
