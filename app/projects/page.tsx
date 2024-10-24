"use client";

import React, { useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

const Page = () => {
  const { x, y } = useMousePosition();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Track hovered item
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 300 : 40;

  const ProjectItems = [
    {
      name: "Gemini-Clone",
      imgSrc: "/assets/hoverImages/gemini-clone.png", // Correct path
      link: "https://gemini-clone-two-psi.vercel.app/", // Add the link
    },
    {
      name: "Car Hub",
      imgSrc: "/assets/hoverImages/carhub.png", // Correct path
      link: "https://carhub-two.vercel.app/", // Add the link
    },
    {
      name: "Hoster",
      imgSrc: "/assets/hoverImages/cloud.png", // Correct path
      link: "https://serverninja.in/", // Add the link
    },
    {
      name: "Nike",
      imgSrc: "/assets/hoverImages/nike.png", // Correct path
      link: "https://nike-app-tailwindcss-bice.vercel.app/", // Add the link
    },
    {
      name: "Institute",
      imgSrc: "/assets/hoverImages/institute.png", // Correct path
      link: "https://vidyalaya-inst.vercel.app/", // Add the link
    },
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
            <h1>PROJECTS</h1>
          </motion.div>

          {/* Section containing project links */}
          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full lg:px-32">
            {ProjectItems.map((item) => (
              <div
                className="project_item_border border-y cursor-pointer py-10 flex justify-start items-center"
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.imgSrc)} // Show image on hover
                onMouseLeave={() => setHoveredItem(null)} // Hide image on leave
                onClick={() => window.open(item.link, "_blank")} // Open link in new tab
              >
                <h2 className="ml-8 max-md:ml-4">{item.name}</h2>
              </div>
            ))}
          </section>

          {/* Image that follows the cursor with fade in/out transitions */}
          <AnimatePresence>
            {hoveredItem && (
              <motion.img
                key={hoveredItem} // Key for proper animation switching
                src={hoveredItem}
                alt="Project preview"
                initial={{ opacity: 0, y: -50 }} // Starting position and opacity
                animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
                exit={{ opacity: 0, y: 50 }} // Fade out and move slightly down
                style={{
                  position: "fixed",
                  top: y + 20,
                  left: x + 20,
                  width: "300px",
                  height: "200px",
                  pointerEvents: "none",
                  borderRadius: "15px",
                }}
                transition={{ ease: "easeInOut", duration: 0.6 }} // Smooth transition
                className="z-50"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
