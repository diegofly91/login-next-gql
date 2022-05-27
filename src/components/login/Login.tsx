import { useContext } from "react";
import { Grid, FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextFieldCustom from "../inputs/TextFieldCustom";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateUsername,
  UpdatePassword,
} from "@/contexts/reducers/login/login.slice.reducer";
import { LoginYup } from "@/validations/login.yup";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/mutations/login";
import ErrorMessage from "../error/ErrorMessage";
import { UserContext } from "@/contexts/context.react";
import { RootState } from "@/contexts/reducers/root.reducers";

const Login = () => {
  const { refresh } = useContext(UserContext);
  const [login, { error, loading }] = useMutation(LOGIN);
  const { password, username } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username,
      password,
    },
    validationSchema: LoginYup,
    onSubmit: async (values) => {
      const { data }: any = await login({
        variables: {
          input: {
            username: values.username,
            password: values.password,
          },
        },
      });
      await localStorage.setItem("token", data.loginUser.access_token);
      refresh();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={8} xs={10}>
          <FormHelperText>USUARIO:</FormHelperText>
          <TextFieldCustom
            id="username"
            name="username"
            value={formik.values.username}
            error={!!formik.errors.username && formik.touched.username}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              dispatch(UpdateUsername(e.target.value));
            }}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={8} xs={10}>
          <FormHelperText>CONTRASEÑA:</FormHelperText>
          <TextFieldCustom
            id="password"
            name="password"
            value={formik.values.password}
            error={!!formik.errors.password && formik.touched.password}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              dispatch(UpdatePassword(e.target.value));
            }}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={8} xs={10}>
          {error && <ErrorMessage error={error} />}
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{ borderRadius: 4 }}
            fullWidth={true}
            disabled={!formik.isValid}
            loading={loading}
          >
            INICIAR SESIÓN
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
