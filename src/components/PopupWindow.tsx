import { Box } from "@mui/material";
import React from "react";

const PopupWindow: React.FC = () => {
  return (
    <>
      <Box className="[perspective:2000px] w-fit mx-auto">
        <Box
          className="
            group border w-80 mx-async 
            [transform-style:preserve-3d] [transform:rotateY(-24deg)_rotateX(45deg)] 
            rounded-md shadow-ms mt-20 rounderd-lg"
        >
          <Box
            className="
                flex
                gap-2 p-4 border-b  bg-gray-50
                *:size-2.5 *:rounded-full"
          >
            <Box className="bg-red-500"></Box>
            <Box className="bg-green-500"></Box>
            <Box className="bg-yellow-500"></Box>
          </Box>
          <Box className="aspect-[3/4] p-4 [transform-style:preserve-3d]">
            <Box
              className="
                aspect-video rounded hover:[transform:translateZ(40px)]
                transition duration-500 hover:shadow-xl
                shadow bg-gray-500 group"
            >
              <Box
                className="p-4 opacity-0 group-hover:opacity-100
                    transition duration-500"
              >
                <h2>キャンペーン</h2>
                <p>test</p>
              </Box>
            </Box>
            <Box className="h-4 rounded-full border overflow-hidden bg-gray-50 mt-10">
              <Box
                className="size-full bg-lime-500 origin-left scale-x-0
                    transition duration-500
                    group-hover:scale-x-100"
              ></Box>
            </Box>

            <Box
              className="mt-10 border scale-75 rounderd-lg bg-gray-50 shadow-sm w-1/2 aspect-video
                group-hover:scale-100 opacity-0 group-hover:opacity-100
                transition duration-500"
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PopupWindow;
