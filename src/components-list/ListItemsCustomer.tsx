import MyProfile from "@/components/account/profile/MyProfile";
import { Avatar } from "@mui/material";
import { RoleType, ComponentType } from "@/enums/index";
import { IComponentItem } from "@/interfaces/index";

export const ListItemsComponents: IComponentItem[] = [
  {
    ComponentMain: <MyProfile />,
    title: "mi perfil",
    icon: <Avatar />,
    path: "DataPerfile",
    roles: [RoleType.ADMIN, RoleType.SUPERUSER],
    show: [ComponentType.HEADER, ComponentType.PANEL],
  },
];
