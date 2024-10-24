"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { gsap } from "gsap"; // Import GSAP
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

const Page = () => {
  const { x, y } = useMousePosition();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
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

  const handleItemClick = (link: string) => {
    setIsClicked(true);
    setTimeout(() => {
      window.open(link, "_blank");
    }, 600);
  };

  useEffect(() => {
    // GSAP animation for slide-up effect on component mount
    gsap.fromTo(
      ".project_main, .project_body",
      {
        opacity: 0,
        y: 50, // Start below
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []); // Run only on component mount

  const arrowVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.5, duration: 1, ease: "easeOut" },
    },
  };

  const router = useRouter();
  const handleNavigate = () => {
    // Create a smooth page transition using GSAP
    gsap.to(".project_main, .project_body", {
      opacity: 0,
      y: -50, // Slide the content up a bit
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/contacts"); // Navigate to the About page after animation
      },
    });
  };

  return (
    <div className="relative w-screen">
      <div>
        <div className="text-9xl 2xl:text-[256px] urbanshock text-[#EEE9C7] project_main">
          <motion.div
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
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
          <motion.div className="project_body flex justify-start gap-10 items-center flex-col">
            <h1>PROJECTS</h1>
          </motion.div>

          {/* Section containing project links */}
          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full lg:px-32">
            {ProjectItems.map((item) => (
              <div
                className="project_item_border border-y cursor-pointer py-10 flex justify-between items-center"
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.imgSrc)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item.link)}
              >
                <h2 className="ml-8 max-md:ml-4">{item.name}</h2>
                <BsArrowUpRight className="mr-8 max-md:mr4" />
              </div>
            ))}
          </section>

          {/* Image that follows the cursor with fade in/out transitions */}
          <AnimatePresence>
            {hoveredItem && !isClicked && (
              <motion.img
                key={hoveredItem}
                src={hoveredItem}
                alt="Project preview"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                style={{
                  position: "fixed",
                  top: y + 20,
                  left: x + 20,
                  width: "300px",
                  height: "200px",
                  pointerEvents: "none",
                  borderRadius: "15px",
                }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
                className="z-50"
              />
            )}
            {isClicked && (
              <motion.div
                key="fade-out"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <motion.div
            className=" bottom-10 fixed z-[999]"
            variants={arrowVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
              whileHover={{
                scale: 1.2, // Slight scaling effect on hover
                rotate: 360, // Rotate the icon on hover
                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
              }}
              onClick={handleNavigate} // Trigger navigation when clicked
            >
              <FaAngleDoubleDown className="w-5 h-5 z-50 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
