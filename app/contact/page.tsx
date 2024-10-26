"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import "./style.css";
import { section } from "framer-motion/client";

const page = () => {
  const [hovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = hovered ? 300 : 40;
  return (
    <section className="relative w-screen h-screen overflow-y-auto">
      <div className="contact_main text-[256px] max-md:text-[200px] max-sm:text-8xl urbanshock text-[#EEE9C7]">
        <motion.div
          className="contact_mask "
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Center the mask at mouse position
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=""
          >
            CONTACT
          </h1>
          <div className="font-sans text-2xl  font-light p-10 flex flex-col gap-5 ">
            <h3
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-4xl font-semibold"
            >
              Start your project with ME.
            </h3>
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="max-w-screen-md"
            >
              Providing these details up front helps us manage requests better.
              Please provide information for each section.
            </p>
          </div>
        </motion.div>
        <div className="contact_body">
          <h1 className="text-center ">CONTACT</h1>
          <div className="font-sans text-2xl  font-light p-10 flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">
              Start your project with ME.
            </h2>
            <p className="max-w-screen-md">
              Providing these details up front helps us manage requests better.
              Please provide information for each section.
            </p>
            <div className="text-[16px] z-10 mt-10 h-full flex justify-center items-center ">
              <form className="space-y-9 max-w-screen-lg mx-auto font-semibold bg-transparent">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="SUBJECT"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder="PHONE"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder="PHONE"
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                </div>
                <button className="w-full py-3 text-txt border border-txt rounded-md">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
