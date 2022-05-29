import { Typography } from "@mui/material";

type Props = {
  title: string;
};

const TitleCompanent = ({ title }: Props) => {
  return (
    <Typography variant="h4" component="div">
      {title}
    </Typography>
  );
};

export default TitleCompanent;
