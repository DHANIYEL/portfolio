"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [section, setSection] = useState("about"); // Track the current section
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  // Framer Motion variants for fade and slide up animation
  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 }, // Start off-screen slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust duration for the fade effect
        ease: "easeInOut", // Smooth easing function
      },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }, // Exit animation for smooth fade-out
  };

  const aboutContent = {
    title: "ABOUT ME",
    description:
      "With one year of hands-on experience, I specialize in crafting user-friendly, responsive web applications. I’m highly proficient in HTML, CSS, and JavaScript, with a deep understanding of front-end development principles. I am passionate about designing visually appealing and interactive user experiences that stand out.",
  };

  const experienceContent = {
    title: "EXPERIENCE",
    description: (
      <>
        As a self-taught developer with a passion for crafting engaging user
        experiences, I’ve spent the{" "}
        <span className="">past year freelancing </span> and mastering the core
        principles of web development. Now, I’m a freelancer ready to bring your
        ideas to life! If you’re interested in collaborating, feel free to hire
        me. I’ve honed my skills in HTML, CSS, JavaScript, and React through
        hands-on projects and courses from platforms like freeCodeCamp and
        Udemy, equipping me to create user-friendly, responsive web applications
        that leave a lasting impression.
      </>
    ),
  };

  const arrowVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.5, duration: 1, ease: "easeOut" },
    },
  };

  const showHoldPopup = () => {
    setShowPopup(true);
    setPopupShown(true); // Set popup shown to true
    // Hide the popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  // Determine which content to display based on the current section
  const content = section === "about" ? aboutContent : experienceContent;

  const router = useRouter();
  const handleNavigate = () => {
    // Create a smooth page transition using GSAP
    gsap.to(".about_main, .about_body", {
      opacity: 0,
      y: -50, // Slide the content up a bit
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/projects"); // Navigate to the About page after animation
      },
    });
  };

  return (
    <div className="relative w-screen overflow-y-auto">
      <div className="text-9xl 2xl:text-[256px] urbanshock text-[#EEE9C7] about_main">
        <motion.div
          className="about_mask flex justify-start gap-10 items-center flex-col"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          {/* AnimatePresence to handle fade-in and fade-out */}
          <AnimatePresence mode="wait">
            {/* Heading with fade and slide-up animation */}
            <motion.h1
              key={content.title} // Unique key for AnimatePresence to detect change
              variants={fadeSlideVariant} // Apply fade and slide animation variants
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              exit="exit" // Exit animation when removed
              onMouseEnter={() => {
                setIsHovered(true);
                if (!popupShown) {
                  showHoldPopup();
                }
              }}
              onMouseLeave={() => setIsHovered(false)}
              className="text-center cursor-pointer"
              onClick={() =>
                setSection(section === "about" ? "experience" : "about")
              } // Toggle section on click
            >
              {content.title}
            </motion.h1>

            {/* Paragraph with fade and slide-up animation */}
            <motion.p
              key={content.description} // Unique key for AnimatePresence to detect change
              variants={fadeSlideVariant} // Apply fade and slide animation variants
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              exit="exit" // Exit animation when removed
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="font-light font-sans text-4xl leading-relaxed max-w-screen-xl text-black text-center px-5"
            >
              {content.description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* About Body with Fade Animation */}
        <motion.div
          className="about_body flex justify-start gap-10 items-center flex-col"
          variants={fadeSlideVariant} // Apply fade and slide animation variants
          initial="hidden" // Start hidden
          animate="visible" // Animate to visible
          exit="exit" // Exit animation when removed
        >
          <AnimatePresence mode="wait">
            {/* Additional heading with fade and slide-up animation */}
            <motion.h1
              key={content.title} // Unique key for AnimatePresence to detect change
              variants={fadeSlideVariant} // Apply fade and slide animation variants
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              exit="exit" // Exit animation when removed
              className="text-center"
              onClick={() =>
                setSection(section === "about" ? "experience" : "about")
              } // Toggle section on click
            >
              {content.title}
            </motion.h1>

            {/* Additional paragraph with fade and slide-up animation */}
            <motion.div
              key={content.description} // Unique key for AnimatePresence to detect change
              variants={fadeSlideVariant} // Apply fade and slide animation variants
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              exit="exit" // Exit animation when removed
            >
              <p className="font-extralight font-sans text-4xl leading-relaxed max-w-screen-xl px-5 text-center">
                {content.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
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
              Click
            </motion.div>
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
  );
};

export default About;
