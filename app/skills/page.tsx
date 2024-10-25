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
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

const page = () => {
  const { x, y } = useMousePosition();

  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // popup

  const showHoldPopup = () => {
    setShowPopup(true);
    setPopupShown(true); // Set popup shown to true
    // Hide the popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  return (
    <motion.div
      variants={fadeSlideVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=" h-screen  w-screen overflow-y-auto"
    >
      <div className="flex justify-center py-10 ">
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
            if (!popupShown) {
              showHoldPopup();
            }
          }}
          onMouseLeave={() => setIsHovered(false)}
          className="calcio text-9xl py-10 cursor-pointer max-md:text-7xl text-txt"
        >
          SKILLS
        </h1>
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
              Tap 3 Times
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col justify-center p-10 mb-10 max-sm:p-2 items-center">
        {/* main div */}
        <div className="flex gap-20 max-md:flex-col ">
          <div className="flex flex-col gap-3 justify-center items-center">
            {/* grid layout 1st languages */}
            <div className="flex gap-5 w-full max-w-screen-lg">
              {/* grid section */}
              <div className="grid grid-cols-2 gap-5 flex-1 w-full">
                <div className="bg-[#0B1120] rounded-md  flex justify-center items-center max-sm:p-2 p-6">
                  <Image
                    src={viteIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#2965F1] rounded-md  flex justify-center items-center max-sm:p-2 p-6">
                  <Image
                    src={cssIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#F16529] rounded-md  flex justify-center items-center max-sm:p-2 p-6">
                  <Image
                    src={htmlIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#0B1120] rounded-md  flex justify-center items-center max-sm:p-2 p-6">
                  <Image
                    src={tailwindIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* JS big icon, slightly larger */}
              <div className="bg-[#F7DF1E] rounded-md  flex justify-center items-end flex-1 px-5">
                <div className="w-3/4 h-3/4 flex justify-center items-center">
                  <Image
                    src={jsIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* second section  */}
            <div className="flex w-full">
              <div className="flex gap-3">
                <div className="bg-[#23272F] rounded-md  flex justify-center items-center  max-sm:p-2 p-6">
                  <Image
                    src={reactIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Smaller TS and SAAS icons */}
                  <div className="bg-[#017ACB] rounded-md  flex justify-center items-center  max-sm:p-2 p-4">
                    <Image
                      src={tsIcon}
                      alt="img"
                      layout="responsive"
                      width={75} // Smaller size
                      height={75} // Smaller size
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-[#1E2235] rounded-md  flex justify-center items-center  max-sm:p-2 p-4">
                    <Image
                      src={saasIcon}
                      alt="img"
                      layout="responsive"
                      width={75} // Smaller size
                      height={75} // Smaller size
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-[#000] rounded-md col-span-2   flex justify-center items-center  max-sm:p-2 p-6">
                    {/* Larger Next.js icon */}
                    <Image
                      src={nextIcon}
                      alt="img"
                      layout="responsive"
                      width={125} // Larger size
                      height={125} // Larger size
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#15161B] rounded-md  max-sm:p-2  flex justify-center items-center p-6">
                      <Image
                        src={nodeIcon}
                        alt="img"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="bg-[#1E2235] rounded-md  flex justify-center items-center  max-sm:p-2 p-6">
                      <Image
                        src={mongoIcon}
                        alt="img"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center h-full">
            <div className="flex flex-col gap-3 justify-start">
              <div className="bg-[#38393F] rounded-md w-full px-6  py-10">
                <Image
                  src={figmaIcon}
                  alt="img"
                  layout="responsive"
                  width={80} // Adjusted size for Figma icon
                  height={80} // Adjusted size for Figma icon
                  className="object-contain"
                />
              </div>
              <div className="flex gap-3">
                <div className="bg-[#0B1120] rounded-md w-full h-full   p-6">
                  <Image
                    src={framerIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for Framer icon
                    height={80} // Adjusted size for Framer icon
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#0B1120] rounded-md flex justify-center w-full   h-full p-6">
                  <Image
                    src={gsapIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for GSAP icon
                    height={80} // Adjusted size for GSAP icon
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="bg-[#0B1120] rounded-md flex justify-center w-full  max-sm:p-2 p-3.5">
                  <Image
                    src={wordpressIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for WordPress icon
                    height={80} // Adjusted size for WordPress icon
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#00005B] rounded-md flex justify-center w-full  max-sm:p-2 p-6">
                  <Image
                    src={aeIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for AE icon
                    height={80} // Adjusted size for AE icon
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="bg-[#0D1117] rounded-md flex justify-center w-full  max-sm:p-2 p-6">
                <Image
                  src={vscodeIcon}
                  alt="img"
                  layout="responsive"
                  width={80} // Adjusted size for VS Code icon
                  height={80} // Adjusted size for VS Code icon
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex gap-3">
                <div className="bg-[#0B1120] rounded-md flex justify-center w-full  max-sm:p-2 p-5">
                  <Image
                    src={gitIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for VS Code icon
                    height={80} // Adjusted size for VS Code icon
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#0B1120] rounded-md flex justify-center w-full  max-sm:p-2 p-5">
                  <Image
                    src={githubIcon}
                    alt="img"
                    layout="responsive"
                    width={80} // Adjusted size for VS Code icon
                    height={80} // Adjusted size for VS Code icon
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
