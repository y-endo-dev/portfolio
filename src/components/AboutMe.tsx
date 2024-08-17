import { GITHUB_API_URL } from "@/config";
import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutMeSection: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>("");
  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await axios.get(GITHUB_API_URL);
        setProfileImage(response.data.avatar_url);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };
    fetchGitHubProfile();
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <Box
      id="profile"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 4,
        color: "#282c37",
      }}
    >
      <Grid container alignItems="center" width="60%" ref={ref}>
        <Grid item xs={12} md={3}>
          <Avatar
            src={profileImage}
            sx={{ width: 120, height: 120, mx: "auto" }}
            className={`aspect-square relative transition duration-500 opacity-0 scale-75 ${
              inView ? "opacity-100 scale-100 shadow-xl" : ""
            }`}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          className={`opacity-0 scale-75 transition duration-500 ${
            inView ? "opacity-100 scale-100" : ""
          }`}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Profile
          </Typography>
          <Typography variant="subtitle2" paragraph>
            2018年にエンジニアへ転職。現在は主にWebアプリ開発に従事しています。フロントエンドとバックエンドの両方をバランスよく担当し、モダンな技術スタックを用いてユーザーエクスペリエンスの向上に努めています。プロジェクト全体を見渡しながら、ビジネスの成長や変化に応じてシステムやソフトウェアが柔軟に対応できるソリューションを提供することを心掛けています。
          </Typography>
          <Typography variant="subtitle2" paragraph>
            GitHub
            <Link
              href="https://github.com/y-endo-dev"
              target="_blank"
              rel="not found"
              sx={{ textDecoration: "none", padding: "4px" }}
            >
              https://github.com/y-endo-dev
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
