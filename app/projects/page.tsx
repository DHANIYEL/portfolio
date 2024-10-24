"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import "./style.css";

const Page = () => {
  const { x, y } = useMousePosition(); // Get mouse position
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Track hovered item
  const ProjectItems = [
    {
      name: "Gemini-Clone",
      imgSrc: "/assets/hoverImages/gemini-clone.png", // Correct path
    },
    {
      name: "Car Hub",
      imgSrc: "/assets/hoverImages/carhub.png", // Correct path
    },
    {
      name: "Hoster",
      imgSrc: "/assets/hoverImages/cloud.png", // Correct path
    },
    {
      name: "Nike",
      imgSrc: "/assets/hoverImages/nike.png", // Correct path
    },
    {
      name: "Institute",
      imgSrc: "/assets/hoverImages/institute.png", // Correct path
    },
  ];

  return (
    <div className="relative w-screen">
      <div>
        <div className="text-9xl urbanshock text-[#EEE9C7] project_main ">
          <motion.div className="flex justify-start gap-10 items-center flex-col project_mask">
            <h1>PROJECTS</h1>
          </motion.div>
          <motion.div className="project_body flex justify-start gap-10 items-center flex-col ">
            <h1>PROJECTS</h1>
          </motion.div>

          {/* Section containing links */}
          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full lg:px-32">
            {ProjectItems.map((item) => (
              <div
                key={item.name}
                className="border-y cursor-pointer border-[#5ef13d] py-10 flex justify-start items-center project_item_border"
                onMouseEnter={() => setHoveredItem(item.imgSrc)} // Show image on hover
                onMouseLeave={() => setHoveredItem(null)} // Hide image on leave
              >
                <h2 className="ml-8 max-md:ml-4">{item.name}</h2>
              </div>
            ))}
          </section>

          {/* Image that follows the cursor */}
          {hoveredItem && (
            <motion.img
              src={hoveredItem}
              alt="Project preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Control opacity fade-in
              style={{
                position: "fixed",
                top: y + 20, // Add offset to avoid overlap with cursor
                left: x + 20,
                width: "300px",
                height: "200px",
                pointerEvents: "none",
                borderRadius: "15px",
              }}
              transition={{ ease: "easeOut", duration: 0.3 }} // Smooth fade-in animation
              className="z-50"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
