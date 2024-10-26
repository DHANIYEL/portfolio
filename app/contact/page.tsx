"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import "./style.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [hovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = hovered ? 300 : 40;

  const [message, setMessage] = useState(""); // Add this line
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpWith, setHelpWith] = useState("Not Selected");
  const [budget, setBudget] = useState("5-10k");

  const roles = [
    "Owner/Founder",
    "Partner",
    "Marketing Manager",
    "Social Media Coordinator",
    "Other",
  ];

  const sources = [
    "Google Search",
    "Social Media",
    "Event or Activation",
    "Client Referral",
    "Other",
  ];

  emailjs.init("Ueg7o-QUEuKvqMRqr"); // Your User ID

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare template parameters based on your form fields
    const templateParams = {
      to_name: "Recipient Name", // Replace with the actual recipient name
      from_name: name, // Your name from the form
      email_id: email, // Your email from the form
      message: message, // The message content from your form
      role: selectedRole, // Added selected role
      help_with: helpWith, // Added what help is needed
      source: selectedSource, // Added source of referral
      budget: budget, // Added budget
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_oocyn6d", // Your Service ID
        "template_7ywvwbh", // Your Template ID
        templateParams, // Your parameters with form data
        "Ueg7o-QUEuKvqMRqr" // Your User ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!"); // Notify user of success

        // Clear form fields
        setName("");
        setEmail("");
        setSelectedRole("");
        setHelpWith("Not Selected");
        setSelectedSource("");
        setBudget("5-10k");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again."); // Notify user of failure
      });

    console.log(templateParams); // Log the parameters for debugging
  };

  return (
    <section className="relative w-screen h-screen ">
      <div className="contact_main text-[256px] max-md:text-[200px] max-sm:text-8xl urbanshock text-[#EEE9C7]">
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
            className="font-sans text-2xl font-light p-10 flex flex-col gap-5"
          >
            <h3 className="text-4xl font-semibold">
              Start your project with ME.
            </h3>
            <p className="max-w-screen-md">
              Providing these details up front helps us manage requests better.
              Please provide information for each section.
            </p>
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

            <div className="text-[16px] z-10 mt-10 flex justify-center items-center absolute top-10 right-10 h-fit">
              <form
                onSubmit={handleSubmit}
                className="space-y-9 max-w-screen-lg mx-auto font-semibold bg-white bg-opacity-0 shadow-md backdrop-blur-lg  rounded-lg p-6"
              >
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="NAME"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                  />
                </div>

                <div className="space-y-5 ">
                  <label className="block font-bold">
                    <p className="mb-3">What is your role?*</p>
                    <div className="flex gap-5 justify-center items-center font-semibold">
                      {roles.map((role) => (
                        <p
                          key={role}
                          className={`border-[2px] border-txt px-3 py-2 rounded-xl cursor-pointer ${
                            selectedRole === role
                              ? "bg-txt text-black"
                              : "text-txt"
                          }`}
                          onClick={() => setSelectedRole(role)}
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                  </label>

                  <label className="block font-bold">
                    <p className="mb-3">What can we help you with?*</p>
                    <select
                      value={helpWith}
                      onChange={(e) => setHelpWith(e.target.value)}
                      className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent text-txt appearance-none"
                      style={{
                        backgroundImage: "url('/path/to/your/icon.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px center",
                        backgroundSize: "15px",
                      }}
                    >
                      <option value="Not Selected" disabled>
                        Select
                      </option>
                      <option>Strategy & Positioning</option>
                      <option>Branding</option>
                      <option>Graphic Environments</option>
                      <option>Web Design</option>
                      <option>Digital Communication</option>
                      <option>Content Production</option>
                      <option>General Inquiry</option>
                    </select>
                  </label>

                  <label className="block font-bold">
                    <p className="mb-3">How did you find us?*</p>
                    <div className="flex gap-5 justify-center items-center font-semibold">
                      {sources.map((source) => (
                        <p
                          key={source}
                          className={`border-[2px] border-txt px-3 py-2 rounded-xl cursor-pointer ${
                            selectedSource === source
                              ? "bg-txt text-black"
                              : "text-txt"
                          }`}
                          onClick={() => setSelectedSource(source)}
                        >
                          {source}
                        </p>
                      ))}
                    </div>
                  </label>

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
                  </label>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-txt rounded-md focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-txt border border-txt rounded-md"
                >
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

export default ContactPage;
