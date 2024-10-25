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
  const [isHolding, setIsHolding] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
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
    if (holdTimer) {
      clearTimeout(holdTimer);
    }
    if (isHolding) {
      setIsHolding(false);
      gsap.to(".hovered-image", {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          window.open(link, "_blank");
        },
      });
    }
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

          <section className="porsche 2xl:text-5xl z-50 text-3xl mt-20 max-md:text-xl absolute w-full">
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
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setIsHolding(false);
                  if (holdTimer) {
                    clearTimeout(holdTimer);
                  }
                }}
                onMouseDown={() => {
                  setIsHolding(true);
                  const timer = setTimeout(() => {
                    handleItemHoldRelease(item.link);
                  }, 200);
                  setHoldTimer(timer);
                }}
                onMouseUp={() => {
                  if (holdTimer) {
                    clearTimeout(holdTimer);
                  } else {
                    window.open(item.link, "_blank");
                  }
                }}
                initial={{ background: "transparent" }}
                whileHover={{
                  background:
                    "linear-gradient(90deg, rgba(58, 86, 61, 1), rgba(114, 171, 120, 1), rgba(167, 251, 174, 1), rgba(227, 252, 99, 1))",
                  transition: { duration: 0.3 },
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${x}px ${y}px`, // Follow cursor position
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="max-md:px-16 max-sm:px-6 px-32">{item.name}</h2>
                <BsArrowUpRight className="mr-10 max-md:mr-4" />
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
                  width: "300px",
                  height: "200px",
                  pointerEvents: "none",
                  borderRadius: "15px",
                }}
                className="z-50 hovered-image"
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
                Tap & Hold
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
