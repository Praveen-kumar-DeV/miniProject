import { Button } from "@mui/material";
import React from "react";

import LoginIcon from "@mui/icons-material/Login";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Login
      <LoginIcon />
    </Button>
  );
};

export default LaunchButton;
