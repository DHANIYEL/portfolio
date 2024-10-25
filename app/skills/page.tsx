import Image from "next/image";
import React from "react";
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
import ppIcon from "../../public/icon/premiere-pro.svg";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="calcio text-9xl py-10 text-txt">SKILLS</h1>
      </div>
      {/* main div */}
      <div className="flex flex-col gap-3 justify-center items-center">
        {/* grid layout 1st languages */}
        <div className="flex gap-5 w-full max-w-screen-lg">
          {/* grid section */}
          <div className="grid grid-cols-2 gap-5 flex-1 w-full">
            <div className="bg-[#0B1120] rounded-md overflow-hidden flex justify-center items-center p-6">
              <Image
                src={viteIcon}
                alt="img"
                layout="responsive"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="bg-[#2965F1] rounded-md overflow-hidden flex justify-center items-center p-6">
              <Image
                src={cssIcon}
                alt="img"
                layout="responsive"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="bg-[#F16529] rounded-md overflow-hidden flex justify-center items-center p-6">
              <Image
                src={htmlIcon}
                alt="img"
                layout="responsive"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="bg-[#0B1120] rounded-md overflow-hidden flex justify-center items-center p-6">
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
          <div className="bg-[#F7DF1E] rounded-md overflow-hidden flex justify-center items-end flex-1 px-5">
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
            <div className="bg-[#23272F] rounded-md overflow-hidden flex justify-center items-center p-6">
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
              <div className="bg-[#017ACB] rounded-md overflow-hidden flex justify-center items-center p-4">
                <Image
                  src={tsIcon}
                  alt="img"
                  layout="responsive"
                  width={75} // Smaller size
                  height={75} // Smaller size
                  className="object-contain"
                />
              </div>
              <div className="bg-[#1E2235] rounded-md overflow-hidden flex justify-center items-center p-4">
                <Image
                  src={saasIcon}
                  alt="img"
                  layout="responsive"
                  width={75} // Smaller size
                  height={75} // Smaller size
                  className="object-contain"
                />
              </div>
              <div className="bg-[#000] rounded-md col-span-2  overflow-hidden flex justify-center items-center p-6">
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
                <div className="bg-[#15161B] rounded-md overflow-hidden flex justify-center items-center p-6">
                  <Image
                    src={nodeIcon}
                    alt="img"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-[#1E2235] rounded-md overflow-hidden flex justify-center items-center p-6">
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
    </div>
  );
};

export default page;
