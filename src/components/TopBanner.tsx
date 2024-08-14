import { Box, Container } from "@mui/material";
import React from "react";

const TopBanner: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: "100%",
          backgroundColor: "#282c34",
        }}
      >
        Edit <code>src/App.tsx</code> and save to reload.
      </Container>
    </Box>
  );
};

export default TopBanner;
