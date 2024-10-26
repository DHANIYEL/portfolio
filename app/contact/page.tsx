"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import "./style.css";
import { section } from "framer-motion/client";

const page = () => {
  const [hovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = hovered ? 300 : 40;
  return (
    <section className="relative w-screen h-screen overflow-y-auto">
      <div className="contact_main text-[256px] max-md:text-[200px] max-sm:text-8xl urbanshock text-[#EEE9C7]">
        <motion.div
          className="contact_mask "
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
            CONTACT
          </h1>
        </motion.div>
        <div className="contact_body">
          <h1 className="text-center ">CONTACT</h1>
        </div>
      </div>
    </section>
  );
};

export default page;
