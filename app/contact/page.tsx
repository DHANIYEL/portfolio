"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import "./style.css";
import emailjs from "emailjs-com";
import {
  FaAngleDoubleDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import ModalBox from "../components/ModalBox";

const ContactPage: React.FC = () => {
  const [hovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = hovered ? 300 : 40;

  const [message, setMessage] = useState(""); // Add this line
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpWith, setHelpWith] = useState("Not Selected");

  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const roles = [
    "Owner/Founder",
    "Partner",
    "Marketing Manager",
    "Social Media Coordinator",
    "Other",
  ];

  const sources = [
    "Google",
    "Social Media",
    "LinkedIn",
    "Client Referral",
    "Other",
  ];
  const arrowVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.5, duration: 1, ease: "easeOut" },
    },
  };

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

  emailjs.init("Ueg7o-QUEuKvqMRqr"); // Your User ID

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for input errors and set error states
    const hasNameError = !name;
    const hasEmailError = !email;
    const hasMessageError = !message;

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    // Prevent modal from showing if any required fields are missing
    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    const templateParams = {
      to_name: "Recipient Name",
      from_name: name,
      email_id: email,
      message: message,
      role: selectedRole,
      help_with: helpWith,
      source: selectedSource,
    };

    emailjs
      .send(
        "service_oocyn6d",
        "template_7ywvwbh",
        templateParams,
        "Ueg7o-QUEuKvqMRqr"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSuccess(true); // Set success state
        setShowModal(true); // Show success modal

        // Reset the form fields after success
        setName("");
        setEmail("");
        setSelectedRole("");
        setHelpWith("Not Selected");
        setSelectedSource("");
        setMessage("");
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setIsSuccess(false); // Set error state
        setShowModal(true); // Show error modal
      });

    console.log("Form Data:", templateParams); // Log form data for debugging
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setNameError(!name);
  //   setEmailError(!email);
  //   setMessageError(!message);

  //   if (!name || !email || !message) {
  //     // Prevent modal from showing if there are errors
  //     return;
  //   }

  //   const templateParams = {
  //     to_name: "Recipient Name",
  //     from_name: name,
  //     email_id: email,
  //     message: message,
  //     role: selectedRole,
  //     help_with: helpWith,
  //     source: selectedSource,
  //     budget: budget,
  //   };

  //   console.log("Form Data:", templateParams);
  //   setIsSuccess(true);
  //   setShowModal(true);

  //   // Reset the form fields
  //   setName("");
  //   setEmail("");
  //   setSelectedRole("");
  //   setHelpWith("Not Selected");
  //   setSelectedSource("");
  //   setBudget("5-10k");
  //   setMessage("");
  // };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 5000);
      return () => clearTimeout(timer); // Cleanup if the component is unmounted
    }
  }, [showModal]);

  const router = useRouter();
  const handleNavigate = () => {
    // Create a smooth page transition using GSAP
    gsap.to(".contact_main, .contact_body", {
      opacity: 0,
      y: -50, // Slide the content up a bit
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/"); // Navigate to the About page after animation
      },
    });
  };
  const iconNavigate = () => {
    // Animate elements to slide up and fade out
    gsap.to(".contact_main, .contact_body", {
      opacity: 0,
      y: -50, // Slide the content up
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        // After 5 seconds, reset position and opacity
        gsap.to(".contact_main, .contact_body", {
          opacity: 1,
          y: 0, // Reset to original position
          duration: 0.4,
          delay: 1, // Wait 5 seconds before resetting
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <section className="relative w-screen h-screen overflow-y-auto">
      <motion.div
        variants={fadeSlideVariant}
        initial="hidden"
        animate="visible"
        className="contact_main text-[256px] max-md:text-[200px] max-sm:text-8xl urbanshock text-[#EEE9C7]"
      >
        <motion.div
          className="contact_mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            CONTACT
          </h1>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-sans text-2xl font-light p-10 flex flex-col gap-5 w-fit"
          >
            <h3 className="text-4xl font-semibold">
              Start your project with ME.
            </h3>
            <p className="max-w-screen-md">
              Providing these details up front helps us manage requests better.
              Please provide information for each section.
            </p>
            <div className="text-5xl text-black">
              <div className=" flex gap-5 ">
                <a href="https://www.linkedin.com/in/dhaniyel-darvesh-256987280/">
                  <FaLinkedin
                    className="cursor-pointer hover:text-txt hover:scale-110 transition-all ease-in duration-300"
                    onClick={iconNavigate}
                  />
                </a>
                <a href="https://github.com/DHANIYEL">
                  <FaGithub
                    className="cursor-pointer hover:text-txt hover:scale-110 transition-all ease-in duration-300"
                    onClick={iconNavigate}
                  />
                </a>
                <a href="https://www.instagram.com/dhaniiiyll/?hl=en">
                  <FaInstagram
                    className="cursor-pointer hover:text-txt hover:scale-110   transition-all ease-in duration-300 "
                    onClick={iconNavigate}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="contact_body">
          <h1 className="text-center">CONTACT</h1>
          <div className="font-sans text-2xl font-light p-10 flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">
              Start your project with ME.
            </h2>
            <p className="max-w-screen-md">
              Providing these details up front helps us manage requests better.
              Please provide information for each section.{" "}
            </p>

            <div className="text-[16px] z-10 mt-10 flex justify-center items-center max-md:overflow-y-auto min-w-min max-xl:-bottom-96 max-sm:-bottom-40 max-md:inline h-[calc(100vh-20rem)] xl:top-48 xl:right-10 absolute ">
              {" "}
              {/* Adjust height as needed */}
              <form
                onSubmit={handleSubmit}
                className="space-y-9 max-w-screen-lg mx-auto font-semibold bg-white bg-opacity-0 shadow-md backdrop-blur-lg rounded-lg p-6"
              >
                <div className="flex gap-4 max-sm:flex-col">
                  <input
                    type="text"
                    placeholder="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none bg-transparent ${
                      nameError ? "border-red-500" : "border-txt"
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none bg-transparent ${
                      emailError ? "border-red-500" : "border-txt"
                    }`}
                  />
                </div>

                <div className="space-y-5">
                  {/* Role Selection */}
                  <label className="block font-bold">
                    <p className="mb-3">What is your role?*</p>
                    <div className="flex gap-5 justify-center items-center font-semibold">
                      {roles.map((role) => (
                        <p
                          key={role}
                          className={`border-[2px] border-txt px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            selectedRole === role
                              ? "bg-txt text-black"
                              : "bg-transparent text-txt"
                          }`}
                          onClick={() => setSelectedRole(role)}
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                  </label>
                  {/* Help With Selection */}
                  <label className="block font-bold">
                    <p className="mb-3">What can we help you with?*</p>
                    <select
                      value={helpWith}
                      onChange={(e) => setHelpWith(e.target.value)}
                      className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent text-txt appearance-none"
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px center",
                        backgroundSize: "15px",
                      }}
                    >
                      <option value="Not Selected" disabled>
                        Select
                      </option>
                      <option>Branding</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>General Inquiry</option>
                    </select>
                  </label>
                  {/* Source Selection */}
                  <label className="block font-bold">
                    <p className="mb-3">How did you find us?*</p>
                    <div className="flex gap-5 justify-center items-center font-semibold">
                      {sources.map((source) => (
                        <p
                          key={source}
                          className={`border-[2px] border-txt px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            selectedSource === source
                              ? "bg-txt text-black"
                              : "bg-transparent text-txt"
                          }`}
                          onClick={() => setSelectedSource(source)}
                        >
                          {source}
                        </p>
                      ))}
                    </div>
                  </label>
                  {/* Budget Selection
                  <label className="block font-bold">
                    <p className="mb-3">Project Budget*</p>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent text-txt appearance-none"
                      style={{
                        backgroundImage: "url('/path/to/your/icon.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px center",
                        backgroundSize: "15px",
                      }}
                    >
                      <option value="Nill" disabled>
                        Select your budget
                      </option>
                      <option>5-10k</option>
                      <option>10-25k</option>
                      <option>25-50k</option>
                      <option>50k+</option>
                    </select>
                  </label> */}
                  {/* Message Area */}
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-2 border ${
                        messageError ? "border-red-500" : "border-txt"
                      } rounded-md focus:outline-none bg-transparent`}
                    />
                  </div>
                </div>

                {/* Send Button */}
                <motion.button
                  type="submit"
                  className="relative w-full py-3 text-txt border border-txt rounded-md overflow-hidden"
                  initial={{ backgroundPosition: "100% 0%" }}
                  whileHover={{
                    backgroundPosition: "0% 100%",
                    transition: { duration: 0.8 },
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, transparent 0%, #EEE9C7 50%, transparent 100%)",
                    backgroundSize: "200% 200%",
                  }}
                >
                  Send
                </motion.button>
                <ModalBox show={showModal} isSuccess={isSuccess} />
              </form>
            </div>
          </div>
        </div>
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
      </motion.div>
    </section>
  );
};

export default ContactPage;