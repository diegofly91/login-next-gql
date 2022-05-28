import React from 'react'
import { MenuItem, ListItemIcon } from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import { persistor } from "@/contexts/context.redux";

function LogOut() {
    const handleClose = async () => {  
        await persistor.purge();
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