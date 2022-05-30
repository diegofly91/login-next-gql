import React, { useContext } from "react";
import { UserContext } from "@/contexts/context.react";
import { MenuItem, ListItemIcon } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { persistor } from "@/contexts/context.redux";

function LogOut() {
  const { refreshUser } = useContext(UserContext);
  const handleClose = async () => {
    await persistor.purge();
    localStorage.clear();
    refreshUser();
  };

  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      cerrar
    </MenuItem>
  );
}

export default LogOut;
