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
  const [isHolding, setIsHolding] = useState(false); // State for holding
  const size = isHovered ? 300 : 40;

  const ProjectItems = [
    {
      name: "Gemini-Clone",
      imgSrc: "/assets/hoverImages/gemini-clone.png",
      link: "https://gemini-clone-two-psi.vercel.app/",
    },
    {
      name: "Car Hub",
      imgSrc: "/assets/hoverImages/carhub.png",
      link: "https://carhub-two.vercel.app/",
    },
    {
      name: "Hoster",
      imgSrc: "/assets/hoverImages/cloud.png",
      link: "https://serverninja.in/",
    },
    {
      name: "Nike",
      imgSrc: "/assets/hoverImages/nike.png",
      link: "https://nike-app-tailwindcss-bice.vercel.app/",
    },
    {
      name: "Institute",
      imgSrc: "/assets/hoverImages/institute.png",
      link: "https://vidyalaya-inst.vercel.app/",
    },
  ];

  const handleItemHoldRelease = (link: string) => {
    setIsHolding(false); // Reset holding state
    // GSAP animation for fade-out effect before navigation
    gsap.to(".hovered-image", {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        window.open(link, "_blank"); // Open the link after animation completes
      },
    });
  };

  useEffect(() => {
    // GSAP animation for slide-up effect on component mount
    gsap.fromTo(
      ".project_main, .project_body",
      {
        opacity: 0,
        y: 50,
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
    gsap.to(".project_main, .project_body", {
      opacity: 0,
      y: -50,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/contacts");
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

          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full lg:px-32">
            {ProjectItems.map((item) => (
              <div
                className="project_item_border border-y cursor-pointer py-10 flex justify-between items-center"
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.imgSrc)}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setIsHolding(false); // Reset holding state when leaving
                }}
                onMouseDown={() => setIsHolding(true)} // Trigger on mouse down
                onMouseUp={() => handleItemHoldRelease(item.link)} // Handle release
              >
                <h2 className="ml-8 max-md:ml-4">{item.name}</h2>
                <BsArrowUpRight className="mr-8 max-md:mr4" />
              </div>
            ))}
          </section>

          <AnimatePresence>
            {hoveredItem && (
              <motion.img
                key={hoveredItem}
                src={hoveredItem}
                alt="Project preview"
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isHolding ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
                } // Keep visible during hold
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
                className="z-50 hovered-image" // Added class for targeting in GSAP animation
                transition={{ ease: "easeInOut", duration: 0.6 }}
              />
            )}
          </AnimatePresence>

          <motion.div
            className="bottom-10 fixed z-[999]"
            variants={arrowVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.4, ease: "easeInOut" },
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
