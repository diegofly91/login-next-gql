import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Drawer, Divider } from "@mui/material";
import useStyles from "@/styles/components/drawer.dashboard.sty";
import { RootState } from "@/contexts/reducers/root.reducers";

const MiniDrawer = () => {
  const classes = useStyles();
  const { drawer } = useSelector((state: RootState) => state.dashboard);
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawer,
        [classes.drawerClose]: !drawer,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: drawer,
          [classes.drawerClose]: !drawer,
        }),
      }}
      elevation={3}
    >
      <Divider />
      <Divider />
    </Drawer>
  );
};

export default MiniDrawer;
