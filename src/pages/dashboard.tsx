import * as React from "react";
import type { NextPage } from "next";
import styles from "@/styles/pages/Dashboard.module.scss";
import Logo from "@/components/logo/logo";
import LayoutDashboard from "@/layouts/dashboard/LayoutDashboard";
import HeaderAppBar from "@/components/header/Header.dasboard";
import Panel from "@/layouts/dashboard/PanelDashboard";

const Dashboard: NextPage = () => {
  return (
    <LayoutDashboard className={styles.Layout}>
      <Panel className={styles.panel} />
      <HeaderAppBar />
      <div className={styles.component}>
        {" "}
        <Logo width={300} />
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
