import React from "react";
import MainBG from "../assets/back.svg";
import { Box } from "@mui/material";

const section1 = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        {/* Main Background */}
        <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
          <img src={MainBG} alt="background" style={{ width: "100%" }} />
        </Box>
      </Box>
    </div>
  );
};

export default section1;
