import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PayNow = () => {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center" }}
        variant="h1"
        component="div"
        gutterBottom
      >
        Payment System Coming Soon...
      </Typography>
    </Box>
  );
};

export default PayNow;
