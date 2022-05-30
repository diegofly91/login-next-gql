import React from "react";
import { Alert } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { UpdateSuccess } from "@/contexts/reducers/dashboard/dashboard.slice.reducer";
import { useDispatch } from "react-redux";

const SuccessMessage = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(UpdateSuccess(false));
  }, 1500);

  return (
    <Alert
      sx={{
        position: "fixed",
        bottom: "13%",
        right: "50px",
        zIndex: 100,
        width: "150px",
      }}
      variant="outlined"
      iconMapping={{
        success: <CheckCircleOutlineIcon fontSize="inherit" />,
      }}
    >
      Success
    </Alert>
  );
};

export default SuccessMessage;
