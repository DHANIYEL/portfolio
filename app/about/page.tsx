"use client";

import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const About = () => {
  const [section, setSection] = useState("about"); // Track the current section
  const [span, setSpan] = useState(false); // Track the current section
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

  // Determine which content to display based on the current section
  const content = section === "about" ? aboutContent : experienceContent;

  return (
    <div className="relative w-screen">
      <div className="text-9xl urbanshock text-[#EEE9C7] about_main">
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
              onMouseEnter={() => setIsHovered(true)}
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
      </div>
    </div>
  );
};

export default About;
