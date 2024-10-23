"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-start overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{
          backgroundColor: "hsla(290, 0%, 0%, 1)",
          backgroundImage: `
            radial-gradient(at 93% 0%, hsla(240, 64%, 65%, 0.1) 0px, transparent 50%)
          `,
        }}
        animate={{
          backgroundColor: [
            "hsla(290, 0%, 0%, 1)", // solid black
            "hsla(240, 64%, 65%, 0.1)", // subtle blue tint
          ],
          backgroundImage: [
            `radial-gradient(at 93% 0%, hsla(240, 64%, 65%, 0.1) 0px, transparent 50%)`,
            `radial-gradient(at 93% 0%, hsla(0, 0%, 0%, 0.1) 0px, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 5, // Duration of the animation
          ease: [0.6, 0.05, 0.2, 0.95], // Easing function for smoothness
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Your content here */}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
