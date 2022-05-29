import { useEffect } from "react";
import { Grid, FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextFieldCustom from "../../inputs/TextFieldCustom";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProfile,
  UpdateUserKeyValue,
} from "@/contexts/reducers/user/user.slice.reducer";
import { ProfileYup } from "@/validations/profile.yup";
import { useFormik } from "formik";
import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "@/gql/querys/user";
import ErrorMessage from "../../error/ErrorMessage";
import { RootState } from "@/contexts/reducers/root.reducers";

const MyProfile = () => {
  const { firstname, lastname, email, phone, id } = useSelector(
    (state: RootState) => state.user
  );
  const { data, error, loading } = useQuery(USER_PROFILE, {
    variables: { userId: id },
    fetchPolicy: "network-only",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
    if (data && data.getProfileUserById) {
      dispatch(UpdateProfile(data.getProfileUserById));
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      email,
      phone,
    },
    enableReinitialize: true,
    validationSchema: ProfileYup,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={8} xs={10}>
          <FormHelperText>NOMBRE:</FormHelperText>
          <TextFieldCustom
            id="firstname"
            name="firstname"
            value={formik.values.firstname}
            error={!!formik.errors.firstname && formik.touched.firstname}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              const send = { key: "firstname", value: e.target.value };
              dispatch(UpdateUserKeyValue(send));
            }}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={8} xs={10}>
          <FormHelperText>APELLIDO:</FormHelperText>
          <TextFieldCustom
            id="lastname"
            name="lastname"
            value={formik.values.lastname}
            error={!!formik.errors.lastname && formik.touched.lastname}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              const send = { key: "lastname", value: e.target.value };
              dispatch(UpdateUserKeyValue(send));
            }}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={8} xs={10}>
          <FormHelperText>EMAIL:</FormHelperText>
          <TextFieldCustom
            id="email"
            name="email"
            value={formik.values.email}
            error={!!formik.errors.email && formik.touched.email}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              const send = { key: "email", value: e.target.value };
              dispatch(UpdateUserKeyValue(send));
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
            GUARDAR
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default MyProfile;
