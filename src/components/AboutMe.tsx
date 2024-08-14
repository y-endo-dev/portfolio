import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <Container
      id="about-me"
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          こんにちは！私は[あなたの名前]です。エンジニアとしてのスキルと経験について紹介します。
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
