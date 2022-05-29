import MyProfile from "@/components/account/profile/MyProfile";
import { Avatar } from "@mui/material";
import { RoleType } from "@/enums/index";
import { IComponentItem } from "@/interfaces/index";

export const ComponentsAccount: IComponentItem[] = [
  {
    ComponentMain: <MyProfile />,
    title: "mi perfil",
    icon: <Avatar />,
    path: "DataPerfile",
    roles: [RoleType.ADMIN, RoleType.SUPERUSER],
  },
];
