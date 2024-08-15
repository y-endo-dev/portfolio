import { GITHUB_API_URL } from "@/config";
import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe: React.FC = () => {
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
    threshold: 0.3,
  });

  return (
    <Box
      id="about-me"
      sx={{
        height: "100vh",
      }}
      ref={ref}
    >
      <Box className="p-10">
        <Box
          className={`bg-gray-50 gap-6 flex items-center rounded-xl bg-muted border p-6 transition duration-500 ${
            inView ? "shadow-lg" : ""
          }`}
        >
          <Box
            className={`aspect-square rounded-lg overflow-hidden border-2 border-primary-foreground w-20 relative transition duration-500 ${
              inView ? "scale-125 -rotate-12 shadow-lg" : ""
            }`}
          >
            <img src={profileImage} alt="img" />
          </Box>
          <Box className="flex-1 text-center">
            <h2 className="font-bold text-xl mb-1 text-center">Yuma Endo</h2>
            <p className="text-muted-foreground text-center">Webアプリ開発</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
