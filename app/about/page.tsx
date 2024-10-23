"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import "./style.css";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    <div className="relative w-screen">
      <div className="text-9xl urbanshock text-[#EEE9C7] about_main">
        <motion.div
          className="about_mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=""
          >
            ABOUT
          </h1>
        </motion.div>
        <div className="about_body">
          <h1 className="text-center">ABOUT</h1>
        </div>
      </div>
      <div className="p-10">
        {" "}
        {/* Padding for the paragraph */}
        <p className="text-lg text-center text-[#EEE9C7]">
          {" "}
          {/* Added text styling */}I am a software engineer with a passion for
          creating user-friendly and accessible digital experiences. I have
          worked on various projects, from small startups to large corporations,
          and I am always looking for new opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
