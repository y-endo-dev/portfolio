import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Skills: React.FC = () => {
  return (
    <Container
      id="skils"
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">JavaScript / TypeScript</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">React</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Node.js</Typography>
          </Paper>
        </Grid>
        {/* 他のスキルを追加 */}
      </Grid>
    </Container>
  );
};

export default Skills;
