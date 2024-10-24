"use client";

import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
const page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;
  return (
    <div className="relative w-screen">
      <div>
        <div className="text-9xl urbanshock text-[#EEE9C7] project_main ">
          <motion.div
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            className="flex justify-start gap-10 items-center flex-col project_mask"
          >
            <h1
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              PROJECTS
            </h1>
          </motion.div>
          <motion.div className="project_body flex justify-start gap-10 items-center flex-col ">
            <h1>PROJESTS</h1>
          </motion.div>
          <section className="porsche text-6xl absolute w-full lg:px-32">
            <div className="border-y border-[#5ef13d] py-10 flex justify-start items-center">
              <h2 className="ml-5">WORK</h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
