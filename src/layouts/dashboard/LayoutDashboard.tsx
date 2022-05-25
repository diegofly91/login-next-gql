import React from "react";
import Head from "next/head";
import theme from "@/styles/theme";

type Props = {
  className?: any;
  children: React.ReactNode;
};

const LayoutDashboard = ({ className, children }: Props) => {
  return (
    <div className={className}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title>Posta | Digitunos Dashboard</title>
      </Head>
      {children}
    </div>
  );
};

export default LayoutDashboard;
