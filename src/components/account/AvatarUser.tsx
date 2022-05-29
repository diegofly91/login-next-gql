import { Tooltip, IconButton, Avatar } from "@mui/material";

type Props = {
  open: boolean;
  handleClick: any;
};

const AvatarUser = ({ open, handleClick }: Props) => {
  return (
    <Tooltip title="Account settings">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2, mr: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
    </Tooltip>
  );
};

export default AvatarUser;
