import { useEffect } from "react";
import { Grid, FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextFieldCustom from "../../inputs/TextFieldCustom";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProfile,
  UpdateUserKeyValue,
} from "@/contexts/reducers/user/user.slice.reducer";
import { UpdateSuccess } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";
import { ProfileYup } from "@/validations/profile.yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "@/gql/mutations/user.query";
import { USER_PROFILE } from "@/gql/querys/user";
import ErrorMessage from "../../error/ErrorMessage";
import { RootState } from "@/contexts/reducers/root.reducers";
import { ListProfileInputs } from "@/forms/ListProfile.input";
import { IFormInput } from "@/interfaces/form/IFormInput";

const MyProfile = () => {
  const { firstname, lastname, email, phone, id } = useSelector(
    (state: RootState) => state.user
  );
  const [updateProfile, { loading, error: errorProfile }] =
    useMutation(UPDATE_PROFILE);
  const { data, error } = useQuery(USER_PROFILE, {
    variables: { userId: id },
    fetchPolicy: "network-only",
  });
  const dispatch = useDispatch();

  useEffect(() => {
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
      const { data: dataProfile } = await updateProfile({
        variables: { input: values },
      });
      if (dataProfile) {
        dispatch(UpdateSuccess(true));
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent="center" spacing={2}>
        {ListProfileInputs?.map((inpt: IFormInput) => {
          return (
            <Grid
              item
              md={inpt?.md ? inpt.md : 6}
              xs={inpt?.xs ? inpt.xs : 6}
              key={inpt.name}
            >
              <FormHelperText>{inpt.title}:</FormHelperText>
              <TextFieldCustom
                id={inpt.name}
                name={inpt.name}
                type={inpt.type}
                value={formik.values[inpt.name]}
                error={!!formik.errors[inpt.name] && formik.touched[inpt.name]}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                  const send = { key: inpt.name, value: e.target.value };
                  dispatch(UpdateUserKeyValue(send));
                }}
                fullWidth={true}
              />
            </Grid>
          );
        })}
        <Grid item md={8} xs={10}>
          {error && <ErrorMessage error={error} />}
          {errorProfile && <ErrorMessage error={errorProfile} />}
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
