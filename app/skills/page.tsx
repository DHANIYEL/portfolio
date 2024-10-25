import Image from "next/image";
import React from "react";
import htmlIcon from "../../public/icon/html.svg";
import cssIcon from "../../public/icon/css.svg";
import jsIcon from "../../public/icon/js.svg";
import tailwindlIcon from "../../public/icon/tailwind.svg";
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
import ppIcon from "../../public/icon/premiere-pro.svg";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="calcio text-9xl py-10 text-txt">SKILLS</h1>
      </div>
      {/* main div */}
      <div className="flex justify-center items-center">
        {/* grid layout 1st languages */}
        <div className="">
          {/*  js html */}
          <div className="flex gap-5">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#0B1120] rounded-md overflow-hidden flex justify-center p-5">
                <Image
                  src={viteIcon}
                  alt="img"
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="bg-[#2965F1] rounded-md overflow-hidden flex justify-center p-5">
                <Image
                  src={cssIcon}
                  alt="img"
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="bg-[#F16529] rounded-md overflow-hidden flex justify-center p-5">
                <Image
                  src={htmlIcon}
                  alt="img"
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="bg-[#0B1120] rounded-md overflow-hidden flex justify-center p-5">
                <Image
                  src={tailwindlIcon}
                  alt="img"
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#F7DF1E]  rounded-md p-5 overflow-hidden w-full h-full">
              {/* js big icon */}
              <Image src={jsIcon} alt="img" className="w-full h-full" />
            </div>
          </div>

          {/* react ts next etc */}
          <div></div>
        </div>
        {/* grid layout 2nd tools */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
