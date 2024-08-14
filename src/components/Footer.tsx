import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: "auto",
        p: 2,
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 Yuma Endo
      </Typography>
    </Box>
  );
};

export default Footer;
