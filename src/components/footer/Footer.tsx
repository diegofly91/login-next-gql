import { Container, Typography } from "@mui/material";
import useStyles from "@/styles/components/footer.style";
import Link from "../link/Link";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="subtitle2" component="div" align="center">
          Copyright &copy; 2022{" "}
          <Link color="secondary" href="http://localhost:3000">
            {" "}
            PostaEnLinea
          </Link>
          . Todos los derechos reservados
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
