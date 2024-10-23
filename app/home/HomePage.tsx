"use client";

import React, { useState, useEffect } from "react";
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
      <span key={index} className="char">
        {char}
      </span>
    ));
  };

  // GSAP Animations
  useEffect(() => {
    // Animate characters on mount
    gsap.from(".char", {
      yPercent: 130,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "bounce.in",
    });

    // Fade in Resume button
    gsap.from(".resume-btn", {
      opacity: 0,
      duration: 1,
      delay: 1, // Start after the text animation
      ease: "power2.out",
    });

    // Arrow comes from bottom
    gsap.from(".arrow-icon", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1.5, // Start after the button animation
      ease: "back.out(1.7)",
    });
  }, []);

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
          {/* GlowButton with GSAP fade-in effect */}
          <GlowButton
            className="resume-btn"
            color={"#ffffff"}
            onClick={handleDownload}
          >
            RESUME
          </GlowButton>

          {/* Down arrow with GSAP upward animation */}
          <div className="absolute bottom-5">
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
              whileHover={{
                scale: 1.2, // Slight scaling effect on hover
                rotate: 360, // Rotate the icon on hover
                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
              }}
              onClick={handleNavigate} // Trigger smooth animation and navigate when clicked
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
