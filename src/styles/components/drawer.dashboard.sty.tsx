import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: theme.width.drawer,
      flexShrink: 0,
      height: "100%",
      position: "relative",
      whiteSpace: "nowrap",
      overflowX: "hidden",
      [theme.breakpoints.down("xs")]: {
        height: "100%",
      },
    },
    drawerOpen: {
      width: theme.width.drawer,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7),
      [theme.breakpoints.down("xs")]: {
        width: 0,
      },
    },
    drawerMobileList: {
      paddingTop: 10,
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.height.header + 10,
        minWidth: 180,
      },
    },
  })
);

export default useStyles;
