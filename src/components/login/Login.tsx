import { Grid, FormHelperText, Button } from "@mui/material";
import TextFieldCustom from "../inputs/TextFieldCustom";

const Login = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item md={8} xs={12}>
        <FormHelperText>CORREO ELECTRONICO:</FormHelperText>
        <TextFieldCustom fullWidth={true} />
      </Grid>
      <Grid item md={8} xs={12}>
        <FormHelperText>CONTRASEÑA:</FormHelperText>
        <TextFieldCustom fullWidth={true} />
      </Grid>
      <Grid item md={8} sm={8}>
        <Button variant="contained" sx={{ borderRadius: 4 }} fullWidth={true}>
          INICIAR SESIÓN
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
