"use client";

import Image from "next/image";
import React, { useState } from "react";
import htmlIcon from "../../public/icon/html.svg";
import cssIcon from "../../public/icon/css.svg";
import jsIcon from "../../public/icon/js.svg";
import tailwindIcon from "../../public/icon/tailwind.svg";
import viteIcon from "../../public/icon/vite.svg";
import reactIcon from "../../public/icon/react.svg";
import tsIcon from "../../public/icon/ts.svg";
import nextIcon from "../../public/icon/next.svg";
import mongoIcon from "../../public/icon/mongo.svg";
import nodeIcon from "../../public/icon/node.svg";
import saasIcon from "../../public/icon/saas.svg";
import figmaIcon from "../../public/icon/figma.svg";
import wordpressIcon from "../../public/icon/wordpress.svg";
import aeIcon from "../../public/icon/after-effects.svg";
import framerIcon from "../../public/icon/framer-motion.svg";
import gsapIcon from "../../public/icon/gsap-greensock.svg";
import gitIcon from "../../public/icon/git.svg";
import githubIcon from "../../public/icon/github.svg";
import vscodeIcon from "../../public/icon/vscode.svg";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const Page = () => {
  const [isAnimating, setIsAnimating] = useState(false); // State for controlling animation

  const leftIconVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: index * 0.2 },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const rightIconVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: index * 0.2 },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };
  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 30 }, // Start off-screen slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Adjust duration for the fade effect
        ease: "easeInOut", // Smooth easing function
      },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }, // Exit animation for smooth fade-out
  };

  const arrowFadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  const router = useRouter();

  const handleNavigate = () => {
    setIsAnimating(true); // Stop Framer animations
    // GSAP animations for left and right elements
    gsap.to(".fade-element, .fade-element-right", {
      opacity: 0,
      x: (i, el) => (el.classList.contains("fade-element") ? -50 : 50),
      duration: 0.5,
      stagger: 0.2,
      onComplete: () => {
        gsap.set(".fade-element, .fade-element-right", { display: "none" });
        return; // Ensure no value is returned
      },
    });

    gsap.to(".calcio", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      onComplete: () => {
        gsap.set(".calcio", { display: "none" });
        return; // Ensure no value is returned
      },
    });

    gsap.to(".arrow-down", {
      opacity: 0,
      y: 50, // Slide the content up a bit
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(".arrow-down", { display: "none" });
        return; // Ensure no value is returned
      },
    });

    gsap.delayedCall(1, () => {
      router.push("/contact");
    });
  };

  return (
    <motion.div
      variants={fadeSlideVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=" h-screen  w-screen overflow-y-auto overflow-x-hidden"
    >
      <div className="flex justify-center py-10 px-4">
        <h1 className="calcio text-9xl py-10 cursor-pointer max-lg:text-8xl max-md:text-6xl max-sm:text-5xl text-txt">
          SKILLS
        </h1>
      </div>
      <div className=" flex flex-col justify-center p-10 mb-10 max-md:p-5 max-sm:p-2 items-center">
        {/* main div */}
        <div className=" flex gap-20 max-xl:gap-10 max-lg:gap-5 max-md:flex-col max-md:gap-5">
          <div className="first-icon flex flex-col gap-3 justify-center items-center fade-element">
            {/* grid layout 1st languages */}
            <div className="flex gap-5 max-sm:gap-3 w-full max-w-screen-lg">
              {/* grid section */}
              <motion.div className="grid grid-cols-2 gap-5 max-sm:gap-3 flex-1 w-full">
                <motion.div
                  variants={leftIconVariant}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120] rounded-md  flex  justify-center items-center max-sm:p-2 p-6 "
                >
                  <Image
                    src={viteIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full   h-full"
                  />
                </motion.div>
                <motion.div
                  variants={leftIconVariant}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#2965F1] rounded-md    flex justify-center items-center max-sm:p-2 p-6"
                >
                  <Image
                    src={cssIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
                <motion.div
                  variants={leftIconVariant}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#F16529] rounded-md  flex  justify-center items-center max-sm:p-2 p-6"
                >
                  <Image
                    src={htmlIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
                <motion.div
                  variants={leftIconVariant}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120] rounded-md  flex justify-center items-center max-sm:p-2 p-6"
                >
                  <Image
                    src={tailwindIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </motion.div>

              {/* JS big icon, slightly larger */}
              <motion.div
                variants={leftIconVariant}
                initial="hidden"
                custom={3}
                animate="visible"
                exit={isAnimating ? "exit" : undefined}
                className="bg-[#F7DF1E] rounded-md  flex justify-center items-end flex-1 px-5"
              >
                <div className="w-3/4 h-3/4 flex justify-center  items-center">
                  <Image
                    src={jsIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* second section  */}
            <div className="flex w-full">
              <div className="flex gap-3 max-sm:gap-2">
                <motion.div
                  variants={leftIconVariant}
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#23272F] rounded-md   flex justify-center items-center  max-sm:p-2 p-6"
                >
                  <Image
                    src={reactIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </motion.div>
                <div className="grid grid-cols-2 gap-3 max-sm:gap-2">
                  {/* Smaller TS and SAAS icons */}
                  <motion.div
                    variants={leftIconVariant}
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    exit={isAnimating ? "exit" : undefined}
                    className="bg-[#017ACB] rounded-md  flex justify-center items-center  max-sm:p-2 p-4"
                  >
                    <Image
                      src={tsIcon}
                      alt="img"
                      layout="responsive"
                      width={75} // Smaller size
                      height={75} // Smaller size
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.div
                    variants={leftIconVariant}
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    exit={isAnimating ? "exit" : undefined}
                    className="bg-[#1E2235] rounded-md  flex justify-center items-center  max-sm:p-2 p-4"
                  >
                    <Image
                      src={saasIcon}
                      alt="img"
                      layout="responsive"
                      width={75} // Smaller size
                      height={75} // Smaller size
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.div
                    variants={leftIconVariant}
                    custom={7}
                    initial="hidden"
                    animate="visible"
                    exit={isAnimating ? "exit" : undefined}
                    className="bg-[#000] rounded-md col-span-2   flex justify-center items-center  max-sm:p-2 p-6"
                  >
                    {/* Larger Next.js icon */}
                    <Image
                      src={nextIcon}
                      alt="img"
                      layout="responsive"
                      width={125} // Larger size
                      height={125} // Larger size
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="flex flex-col gap-3 max-sm:gap-2">
                    <motion.div
                      variants={leftIconVariant}
                      custom={8}
                      initial="hidden"
                      animate="visible"
                      exit={isAnimating ? "exit" : undefined}
                      className="bg-[#15161B] rounded-md  max-sm:p-2  flex justify-center items-center p-6"
                    >
                      <Image
                        src={nodeIcon}
                        alt="img"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                    <motion.div
                      variants={leftIconVariant}
                      custom={9}
                      initial="hidden"
                      animate="visible"
                      exit={isAnimating ? "exit" : undefined}
                      className="bg-[#1E2235] rounded-md  flex justify-center items-center  max-sm:p-2 p-6"
                    >
                      <Image
                        src={mongoIcon}
                        alt="img"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-icon flex gap-3 max-sm:gap-2 justify-center items-center h-full fade-element-right">
            <div className="flex flex-col gap-3 max-sm:gap-2 justify-start">
              <motion.div
                variants={rightIconVariant}
                custom={0}
                initial="hidden"
                animate="visible"
                exit={isAnimating ? "exit" : undefined}
                className="bg-[#38393F] rounded-md w-full px-6  py-10"
              >
                <Image
                  src={figmaIcon}
                  alt="img"
                  layout="responsive"
                  width={80} // Adjusted size for Figma icon
                  height={80} // Adjusted size for Figma icon
                  className="object-contain"
                />
              </motion.div>
              <div className="flex gap-3 max-sm:gap-2">
                <motion.div
                  variants={rightIconVariant}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120] rounded-md w-full h-full   p-6"
                >
                  <Image
                    src={framerIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for Framer icon
                    height={80} // Adjusted size for Framer icon
                    className="object-contain w-full h-full"
                  />
                </motion.div>
                <motion.div
                  variants={rightIconVariant}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120] rounded-md flex justify-center w-full   h-full p-6"
                >
                  <Image
                    src={gsapIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for GSAP icon
                    height={80} // Adjusted size for GSAP icon
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-3 max-sm:gap-2">
              <div className="flex gap-3 max-sm:gap-2">
                <motion.div
                  variants={rightIconVariant}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120] rounded-md flex justify-center w-full  max-sm:p-2 p-3.5"
                >
                  <Image
                    src={wordpressIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for WordPress icon
                    height={80} // Adjusted size for WordPress icon
                    className="object-contain w-full h-full"
                  />
                </motion.div>
                <motion.div
                  variants={rightIconVariant}
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#00005B] rounded-md flex justify-center w-full  max-sm:p-2 p-6"
                >
                  <Image
                    src={aeIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for AE icon
                    height={80} // Adjusted size for AE icon
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
              <motion.div
                variants={rightIconVariant}
                custom={5}
                initial="hidden"
                animate="visible"
                exit={isAnimating ? "exit" : undefined}
                className="bg-[#0D1117]  rounded-md flex justify-center w-full  max-sm:p-2 p-6"
              >
                <Image
                  src={vscodeIcon}
                  alt="img"
                  layout="responsive"
                  width={80} // Adjusted size for VS Code icon
                  height={80} // Adjusted size for VS Code icon
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <div className="flex gap-3 max-sm:gap-2">
                <motion.div
                  variants={rightIconVariant}
                  custom={6}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120]  rounded-md flex justify-center w-full  max-sm:p-2 p-5"
                >
                  <Image
                    src={gitIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for VS Code icon
                    height={80} // Adjusted size for VS Code icon
                    className="object-contain w-full h-full "
                  />
                </motion.div>
                <motion.div
                  variants={rightIconVariant}
                  custom={7}
                  initial="hidden"
                  animate="visible"
                  exit={isAnimating ? "exit" : undefined}
                  className="bg-[#0B1120]  rounded-md flex justify-center w-full  max-sm:p-2 p-5"
                >
                  <Image
                    src={githubIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for VS Code icon
                    height={80} // Adjusted size for VS Code icon
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className=" flex justify-center z-[999]"
        variants={arrowFadeUpVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="border-[#eee9c7] arrow-down absolute bottom-5  border-[2px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer arrow-icon"
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
    </motion.div>
  );
};

export default Page;
