import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const TopBanner: React.FC = () => {
  return (
    <Box
      sx={{
        height: "calc( 100vh - 70px)", // ビューポート全体の高さ
        backgroundColor: "#282c34",
        display: "flex", // Flexbox を使用
        alignItems: "center", // 縦方向の中央寄せ
        justifyContent: "center", // 横方向の中央寄せ
        textAlign: "center", // テキストの中央寄せ
      }}
    >
      <Grid>
        <Typography variant="h1" color={"white"}>
          U-MAP
        </Typography>
        <Typography variant="subtitle1" color={"white"}>
          Yuma Engineering Portfolio
        </Typography>
      </Grid>
    </Box>
  );
};

export default TopBanner;
