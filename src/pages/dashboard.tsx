import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "@/styles/pages/Dashboard.module.scss";
import LayoutDashboard from "@/components/layouts/dashboard/LayoutDashboard";
import HeaderAppBar from "@/components/header/Header.dasboard";
import Panel from "@/components/layouts/dashboard/PanelDashboard";
import { RootState } from "@/contexts/reducers/root.reducers";
import { useSelector } from "react-redux";
import SuccessMessage from "@/components/sucess/Sucess";
import { ListItemsComponents } from "@/comp-list/index";
import { IComponentItem } from "../interfaces";

const Dashboard: NextPage = () => {
  const { path, success } = useSelector((state: RootState) => state.dashboard);

  // select item with path actuality the dashboard
  const [component, setComponent] = useState<React.ReactNode | null>(null);
  useEffect(() => {
    const item: IComponentItem[] = ListItemsComponents.filter(
      (item: IComponentItem) => item.path === path
    );
    setComponent(item[0]?.ComponentMain);
  }, [path]);

  return (
    <LayoutDashboard className={styles.Layout}>
      <HeaderAppBar />
      <Panel className={styles.panel} />
      <div className={styles.component}>{component}</div>
      {success && <SuccessMessage />}
    </LayoutDashboard>
  );
};

export default Dashboard;
