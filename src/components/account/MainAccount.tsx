import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { ListItemsComponents } from "@/comp-list/index";
import { RootState } from "@/contexts/reducers/root.reducers";
import { useSelector, useDispatch } from "react-redux";
import { IComponentItem } from "@/interfaces/index";
import { UpdateComponent } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";
import Logout from "./Logout";
import AvatarUser from "./AvatarUser";
import { ComponentType } from "@/enums/index";

function MainAccount() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { roleName } = useSelector((state: RootState) => state.user);
  const { path } = useSelector((state: RootState) => state.dashboard);
  const [listIttems, setListItems] = useState<IComponentItem[]>([]);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (roleName) {
      const list: IComponentItem[] = ListItemsComponents.filter(
        (item: IComponentItem) =>
          item.roles.includes(roleName) &&
          item.show.includes(ComponentType.HEADER)
      );
      setListItems(list);
    }
  }, [roleName]);

  return (
    <React.Fragment>
      <AvatarUser handleClick={handleClick} open={open} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {listIttems?.map((item: IComponentItem) => {
          return (
            <MenuItem
              selected={path === item.path}
              onClick={() => {
                const { path } = item;
                dispatch(UpdateComponent(path));
                handleClose();
              }}
              key={item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.title}
            </MenuItem>
          );
        })}
        <Divider />
        <Logout />
      </Menu>
    </React.Fragment>
  );
}

export default MainAccount;
