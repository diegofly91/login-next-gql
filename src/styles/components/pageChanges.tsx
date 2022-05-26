import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.6)",
    zIndex: 10000,
  },
  img: {
    width: "100px",
    animation: `$myEffect 2000ms linear infinite`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.6,
      transform: "rotate(0deg)",
    },
    "80%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: "rotate(360deg)",
    },
  },
}));

export default useStyles;
