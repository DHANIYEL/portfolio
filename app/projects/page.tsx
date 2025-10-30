"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { gsap } from "gsap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

const Page = () => {
  const { x, y } = useMousePosition();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const size = isHovered ? 300 : 40;

  const ProjectItems = [
    {
      name: "Gemini-Clone",
      imgSrc: "/assets/hoverImages/gemini-clone.png",
      link: "https://gemini-clone-two-psi.vercel.app/",
    },
    {
      name: "Dcars",
      imgSrc: "/assets/hoverImages/dcars.png",
      // link: "",
    },
    {
      name: "Mom's & Wive",
      imgSrc: "/assets/hoverImages/moms.png",
      link: "https://momsandwives.com/",
    },
    {
      name: "Dexpress",
      imgSrc: "/assets/hoverImages/dexpress.png",
      link: "https://app.dexpress.ai/app",
    },
    {
      name: "GTA VI",
      imgSrc: "/assets/hoverImages/gta.png",
      link: "https://gta-vi-eight-swart.vercel.app/",
    },
    {
      name: "Nearwala",
      imgSrc: "/assets/hoverImages/nearwala.png",
      link: "https://nearwala.vercel.app/",
    },
  ];

  const handleItemDoubleClick = (link?: string) => {
    if (!link) {
      console.warn("⚠️ No link provided — skipping open.");
      return;
    }
    gsap.to(".hovered-image", {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        window.open(link, "_blank");
      },
    });
  };

  const showHoldPopup = () => {
    setShowPopup(true);
    setPopupShown(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  useEffect(() => {
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
  }, []);

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
        router.push("/skills");
      },
    });
  };

  return (
    <div className="relative w-screen overflow-x-hidden">
      <div>
        <div className="text-9xl 2xl:text-[180px] xl:text-[140px] max-lg:text-[100px] max-md:text-7xl max-sm:text-5xl urbanshock text-[#EEE9C7] project_main">
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

          <section className="porsche 2xl:text-5xl xl:text-4xl z-50 text-3xl mt-20 max-md:text-xl max-sm:text-base absolute w-full">
            {ProjectItems.map((item) => (
              <motion.div
                className="project_item_border hover:text-black border-y cursor-pointer py-7 flex justify-between items-center"
                key={item.name}
                onMouseEnter={() => {
                  setHoveredItem(item.imgSrc);
                  if (!popupShown) {
                    showHoldPopup();
                  }
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onDoubleClick={() => handleItemDoubleClick(item.link)}
                initial={{ background: "transparent" }}
                whileHover={{
                  background:
                    "linear-gradient(90deg, rgba(58, 86, 61, 1), rgba(114, 171, 120, 1), rgba(167, 251, 174, 1), rgba(227, 252, 99, 1))",
                  transition: { duration: 0.3 },
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${x}px ${y}px`,
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="max-md:px-16 max-sm:px-4 px-32">{item.name}</h2>
                <BsArrowUpRight className="mr-10 max-md:mr-4 max-sm:mr-2" />
              </motion.div>
            ))}
          </section>

          <AnimatePresence>
            {hoveredItem && (
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
                  pointerEvents: "none",
                  borderRadius: "15px",
                }}
                className="z-50 hovered-image w-[300px] h-[200px] max-md:w-[200px] max-md:h-[133px] max-sm:w-[150px] max-sm:h-[100px]"
                transition={{ ease: "easeInOut", duration: 0.6 }}
              />
            )}
          </AnimatePresence>

          {/* Popup Message */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                className="popup-message fixed bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 text-lg font-sans text-white px-3 py-2 rounded-lg"
                style={{
                  top: y - 50,
                  left: x + 30,
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Double-click to open
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="bottom-2 lg:bottom-5 fixed z-[999]"
            variants={arrowVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="border-[#eee9c7] border-[2px] w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              onClick={handleNavigate}
            >
              <FaAngleDoubleDown className="w-5 h-5 z-50 max-sm:w-3 max-sm:h-3 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
