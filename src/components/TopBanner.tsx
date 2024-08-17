import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link as Scroll } from "react-scroll";

const TopBanner: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh", // ビューポート全体の高さ
        backgroundColor: "#d9e1e8",
        display: "flex", // Flexbox を使用
        flexDirection: "column", // 縦方向に配置
        alignItems: "center", // 横方向の中央寄せ
        justifyContent: "center", // 中央寄せ
        textAlign: "center", // テキストの中央寄せ
        position: "relative", // 絶対位置を使うために relative に設定
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ letterSpacing: "0.4rem" }}
          color={"282c37"}
          fontWeight="bold"
        >
          U-MAP
        </Typography>
        <Typography variant="h4" color={"282c37"}>
          Yuma Engineering Portfolio.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Scroll to="profile" smooth={true} duration={800} offset={-50}>
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "(#282c37, 0.5)", // ホバー時の背景色
                transition: "transform 0.6s, background-color 0.5s", // ホバー時のサイズ変更
              },
            }}
          >
            <ExpandCircleDownIcon
              sx={{ width: 80, height: 80, color: "282c37" }}
            />
          </IconButton>
        </Scroll>
      </Box>
    </Box>
  );
};

export default TopBanner;
