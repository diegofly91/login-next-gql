import React from "react";
import Head from "next/head";
import theme from "@/styles/theme";
import Footer from "@/components/footer/Footer";

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
      <Footer />
    </div>
  );
};

export default LayoutDashboard;
