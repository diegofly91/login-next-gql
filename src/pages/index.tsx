import * as React from "react";
import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import styles from "@/styles/pages/Index.module.scss";
import Footer from "@/components/footer/Footer";
import Login from "@/components/login/Login";
import Logo from "@/components/logo/logo";

const Home: NextPage = () => {
  return (
    <div className={styles.Layout}>
      <Container className={styles.component} maxWidth="sm">
        <Logo width={150} />
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          {" "}
          BIENVENIDO{" "}
        </Typography>
        <Login />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
