import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateDrawer } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";

const BtnDrawer = () => {
  const dispatch = useDispatch();
  return (
    <IconButton
      size="large"
      onClick={() => {
        dispatch(UpdateDrawer());
      }}
      key={"menu"}
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2, ml: 1 }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default BtnDrawer;
