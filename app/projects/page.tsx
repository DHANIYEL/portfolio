"use client";

import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
const page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 40;
  const ProjectItems = [
    "Gemini-Clone",
    "Car Hub",
    "Hoster",
    "Nike",
    "Institute",
  ];
  return (
    <div className="relative w-screen">
      <div>
        <div className="text-9xl 2xl:text-[256px] urbanshock text-[#EEE9C7] project_main ">
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
          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full lg:px-32">
            {ProjectItems.map((item) => (
              <div
                className="project_item_border border-y cursor-pointer py-10 flex justify-start items-center"
                key={item}
              >
                <h2 className="ml-8 max-md:ml-4">{item}</h2>
              </div>
            ))}
          </section>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
