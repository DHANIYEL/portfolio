"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(backgroundRef.current, {
      duration: 5, // Duration of the animation
      backgroundColor: "hsla(240, 64%, 65%, 0.1)",
      backgroundImage: `
        radial-gradient(at 93% 0%, hsla(240, 64%, 65%, 0.1) 0px, transparent 50%)
      `,
      ease: "power1.inOut", // Easing function for smoothness
    }).to(backgroundRef.current, {
      duration: 5,
      backgroundColor: "hsla(290, 0%, 0%, 1)", // solid black
      backgroundImage: `
        radial-gradient(at 93% 0%, hsla(0, 0%, 0%, 0.1) 0px, transparent 50%)
      `,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-start overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute inset-0"
        style={{
          backgroundColor: "hsla(290, 0%, 0%, 1)", // Initial background color
          backgroundImage: `
            radial-gradient(at 93% 0%, hsla(240, 64%, 65%, 0.1) 0px, transparent 50%)
          `,
        }}
      >
        {/* Your content here */}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
