"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { GlowButton } from "../components/Button";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  // Determine if the screen size is less than the md breakpoint
  const isMobile = window.innerWidth < 768; // Example breakpoint, adjust as needed

  return (
    <div className="relative w-screen h-screen">
      <div className="text-[256px]  urbanshock text-[#EEE9C7] main">
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full"
          >
            DHANIYEL {isMobile && <br />} DARVESH
          </h1>
        </motion.div>
        <div className="body">
          <h1 className="text-center">DHANIYEL {isMobile && <br />} DARVESH</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <GlowButton
            onClick={() => console.log("Button clicked")}
            color={"#ffffff"}
          >
            RESUME
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
