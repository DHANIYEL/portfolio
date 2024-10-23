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
      <div className="text-9xl urbanshock text-[#EEE9C7] about_main ">
        <motion.div
          className="about_mask flex justify-start gap-10 items-center flex-col "
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
            ABOUT ME
          </h1>
          <motion.div
            className=""
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="font-light font-sans text-4xl leading-relaxed  max-w-screen-xl  text-black text-center px-5"
            >
              With one year of hands-on experience, I specialize in crafting
              user-friendly, responsive web applications. I’m highly proficient
              in HTML, CSS, and JavaScript, with a deep understanding of
              front-end development principles. I am passionate about designing
              visually appealing and interactive user experiences that stand
              out.
            </p>
          </motion.div>
        </motion.div>
        <div className="about_body flex justify-start gap-10 items-center flex-col ">
          <h1 className="text-center">ABOUT ME</h1>
          <div>
            <p className="font-extralight font-sans text-4xl leading-relaxed  max-w-screen-xl  px-5 text-center">
              With one year of hands-on experience, I specialize in crafting
              user-friendly, responsive web applications. I’m highly proficient
              in HTML, CSS, and JavaScript, with a deep understanding of
              front-end development principles. I am passionate about designing
              visually appealing and interactive user experiences that stand
              out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
