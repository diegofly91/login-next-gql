import React from "react";
import { AppBar, Container } from "@mui/material";
import useStyles from "@/styles/components/header.dasborad.sty";
import HideOnScroll from "./HideOnScroll";

const HeaderAppBar = () => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar position="relative" className={classes.root}>
        <Container className={classes.navBar}></Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderAppBar;
