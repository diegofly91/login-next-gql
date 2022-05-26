import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

type Props = {
  error: any;
};

const ErrorMessage = ({ error }: Props) => {
  const [view, setCount] = useState(true);

  setTimeout(() => {
    setCount(false);
  }, 4500);

  if (!view) return <></>;
  const message = error?.message ? error.message : error;
  return (
    <Alert severity="error" sx={{ marginBottom: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};

export default ErrorMessage;
