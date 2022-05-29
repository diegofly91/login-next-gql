import * as React from "react";
import type { NextPage } from "next";
import styles from "@/styles/pages/Dashboard.module.scss";
import LayoutDashboard from "@/layouts/dashboard/LayoutDashboard";
import HeaderAppBar from "@/components/header/Header.dasboard";
import Panel from "@/layouts/dashboard/PanelDashboard";
import { RootState } from "@/contexts/reducers/root.reducers";
import { useSelector } from "react-redux";

const Dashboard: NextPage = () => {
  const { component } = useSelector((state: RootState) => state.dashboard);
  if (!component) return <></>;
  return (
    <LayoutDashboard className={styles.Layout}>
      <HeaderAppBar />
      <Panel className={styles.panel} />
      <div className={styles.component}>{component}</div>
    </LayoutDashboard>
  );
};

export default Dashboard;
