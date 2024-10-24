"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13 and later
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { GlowButton } from "../components/Button";
import { FaAngleDoubleDown } from "react-icons/fa";
import { gsap } from "gsap";

const HomePage = () => {
  const router = useRouter(); // Initialize the router
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  // Function to handle the resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/DhaniyelDarveshResume.pdf"; // Path to your PDF file
    link.download = "Dhaniyel_Darvesh_Resume.pdf"; // The file name you want to give the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up by removing the link after the click
  };

  // Function to split text into characters wrapped in spans
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: "130%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          delay: index * 0.05,
          type: "spring",
          bounce: 0.5,
          duration: 1,
        }}
        className="char"
      >
        {char}
      </motion.span>
    ));
  };

  // Variants for Resume button fade-in
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1, ease: "easeOut" },
    },
  };

  // Arrow from bottom animation
  const arrowVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.5, duration: 1, ease: "easeOut" },
    },
  };

  // Function to trigger smooth page animation and navigate to the About page
  const handleNavigate = () => {
    // Create a smooth page transition using GSAP
    gsap.to(".main, .body", {
      opacity: 0,
      y: -50, // Slide the content up a bit
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/about"); // Navigate to the About page after animation
      },
    });
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="text-[256px] max-md:text-[200px] max-sm:text-8xl urbanshock text-[#EEE9C7] main">
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
            className="w-full split"
          >
            {splitText("DHANIYEL DARVESH")}
          </h1>
        </motion.div>
        <div className="body">
          <h1 className="text-center split">{splitText("DHANIYEL DARVESH")}</h1>
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
          {/* GlowButton with Framer Motion fade-in effect */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="resume-btn z-50"
          >
            <GlowButton color={"#ffffff"} onClick={handleDownload}>
              RESUME
            </GlowButton>
          </motion.div>

          {/* Down arrow with Framer Motion animation */}
          <motion.div
            className="absolute bottom-5 z-[999]"
            variants={arrowVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
              whileHover={{
                scale: 1.2, // Slight scaling effect on hover
                rotate: 360, // Rotate the icon on hover
                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
              }}
              onClick={handleNavigate} // Trigger navigation when clicked
            >
              <FaAngleDoubleDown className="w-5 h-5 z-50 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


