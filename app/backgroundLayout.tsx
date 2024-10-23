import React from "react";
import Image from "next/image"; // Import Next.js Image component

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-start overflow-hidden">
      {/* Positioned image half off the screen */}
      <div className="absolute -top-1/2 left-1/2 w-full transform -translate-x-1/2">
        <Image
          src="/assets/Vector-2.png" // Adjusted the path
          alt="mesh img 1"
          width={1500} // Adjusted width for visibility
          height={3000} // Increased height so half is above the screen
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
