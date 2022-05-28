import React from "react";
import { AppBar, Container } from "@mui/material";
import useStyles from "@/styles/components/header.dasborad.sty";
import HideOnScroll from "./HideOnScroll";
import MainAccount from '@/components/account/MainAccount'

const HeaderAppBar = () => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar position="relative" className={classes.root}>
        <Container className={classes.navBar}>
          <MainAccount />
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderAppBar;
