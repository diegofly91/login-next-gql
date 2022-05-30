import React from "react";
import { RoleType, ComponentType } from "@/enums/index";

export interface IComponentItem {
  ComponentMain?: React.ReactNode;
  title: string;
  path: string;
  icon: React.ReactNode;
  roles: RoleType[];
  show: ComponentType[];
}
