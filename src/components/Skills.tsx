import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 4,
        backgroundColor: "#d9e1e8",
        color: "#282c37",
      }}
    >
      <Box ref={ref} sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          className={`opacity-0 scale-75 transition duration-500 ${
            inView ? "opacity-100 scale-100" : ""
          }`}
        >
          Skills
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Comparison"
                dataKey="A"
                stroke="#ffc658"
                fill="#ffc658"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
