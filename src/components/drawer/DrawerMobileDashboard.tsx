import React from "react";
import { Divider, SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UpdateDrawer } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";
import { RootState } from "@/contexts/reducers/root.reducers";

const MobileDrawer = () => {
  const { drawer } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  return (
    <SwipeableDrawer
      anchor="left"
      open={drawer}
      onClose={() => dispatch(UpdateDrawer())}
      onOpen={() => dispatch(UpdateDrawer())}
    >
      <Divider />
      <Divider />
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
