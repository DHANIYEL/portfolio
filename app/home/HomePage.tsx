"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { GlowButton } from "../components/Button";
import { FaAngleDoubleDown } from "react-icons/fa";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  // Determine if the screen size is less than the md breakpoint
  const isMobile = window.innerWidth < 768; // Example breakpoint, adjust as needed

  // Function to handle the resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/DhaniyelDarveshResume.pdf"; // Path to your PDF file
    link.download = "Dhaniyel_Darvesh_Resume.pdf"; // The file name you want to give the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up by removing the link after the click
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="text-[256px] urbanshock text-[#EEE9C7] main">
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
          <GlowButton color={"#ffffff"} onClick={handleDownload}>
            RESUME
          </GlowButton>
          <div className="absolute bottom-5">
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 rounded-full flex justify-center items-center "
              whileHover={{
                scale: 1.2, // Slight scaling effect on hover
                rotate: 360, // Rotate the icon on hover
                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
              }}
            >
              <FaAngleDoubleDown className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
