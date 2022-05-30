import React, { useState, useEffect } from "react";
import { RootState } from "@/contexts/reducers/root.reducers";
import { IComponentItem } from "@/interfaces/index";
import { useSelector, useDispatch } from "react-redux";
import { UpdateComponent } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ListItemsComponents } from "@/comp-list/index";
import { ComponentType } from "@/enums/index";
import useStyles from "@/styles/components/drawer.dashboard.sty";

const ListDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { path } = useSelector((state: RootState) => state.dashboard);
  const { roleName } = useSelector((state: RootState) => state.user);
  const [listIttems, setListItems] = useState<IComponentItem[]>([]);

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
    <List className={classes.drawerMobileList}>
      {listIttems.map((item: IComponentItem) => {
        return (
          <ListItem
            key={item.path}
            selected={path === item.path}
            disablePadding={true}
          >
            <ListItemButton
              sx={{ padding: 1 }}
              onClick={() => dispatch(UpdateComponent(item.path))}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListDrawer;
