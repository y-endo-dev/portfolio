"use client";

import { motion } from "framer-motion";

interface GeometricShapeProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function GeometricShape({
  width = 128,
  height = 128,
  color = "#3B82F6",
}: GeometricShapeProps) {
  return (
    <motion.div
      className="mx-auto my-4"
      style={{ width, height }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M50 10 L90 90 L10 90 Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          animate={{
            d: [
              "M50 10 L90 90 L10 90 Z",
              "M10 10 L90 10 L50 90 Z",
              "M50 10 L90 90 L10 90 Z",
            ],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  );
}
