import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import useStyles from "@/styles/components/header.dasborad.sty";
import HideOnScroll from "./HideOnScroll";
import MainAccount from "@/components/account/MainAccount";
import BtnDrawer from "../drawer/BtnDrawer";

const HeaderAppBar = () => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar position="relative" className={classes.root}>
        <Container className={classes.navBar} maxWidth="xl">
          <BtnDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <MainAccount />
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderAppBar;
