"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import "./style.css";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  // Framer Motion variants for fade and slide up animation
  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 }, // Start off-screen slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust duration for the fade effect
        ease: "easeInOut", // Smooth easing function
      },
    },
  };

  return (
    <div className="relative w-screen">
      <div className="text-9xl urbanshock text-[#EEE9C7] about_main ">
        <motion.div
          className="about_mask flex justify-start gap-10 items-center flex-col "
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          {/* Heading with fade and slide-up animation */}
          <motion.h1
            variants={fadeSlideVariant} // Apply fade and slide animation variants
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-center"
          >
            ABOUT ME
          </motion.h1>

          {/* Paragraph with fade and slide-up animation */}
          <motion.div initial="hidden" animate="visible">
            <motion.p
              variants={fadeSlideVariant} // Apply fade and slide animation variants
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="font-light font-sans text-4xl leading-relaxed max-w-screen-xl text-black text-center px-5"
            >
              With one year of hands-on experience, I specialize in crafting
              user-friendly, responsive web applications. I’m highly proficient
              in HTML, CSS, and JavaScript, with a deep understanding of
              front-end development principles. I am passionate about designing
              visually appealing and interactive user experiences that stand
              out.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="about_body flex justify-start gap-10 items-center flex-col ">
          {/* Additional heading with fade and slide-up animation */}
          <motion.h1
            variants={fadeSlideVariant} // Apply fade and slide animation variants
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            className="text-center"
          >
            ABOUT ME
          </motion.h1>
          {/* Additional paragraph with fade and slide-up animation */}
          <motion.div
            variants={fadeSlideVariant} // Apply fade and slide animation variants
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
          >
            <p className="font-extralight font-sans text-4xl leading-relaxed max-w-screen-xl px-5 text-center">
              With one year of hands-on experience, I specialize in crafting
              user-friendly, responsive web applications. I’m highly proficient
              in HTML, CSS, and JavaScript, with a deep understanding of
              front-end development principles. I am passionate about designing
              visually appealing and interactive user experiences that stand
              out.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
