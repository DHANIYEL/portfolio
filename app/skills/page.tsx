import Image from "next/image";
import React from "react";
import htmlIcon from "../../public/icon/html.svg";
import cssIcon from "../../public/icon/css.svg";
import jsIcon from "../../public/icon/js.svg";
import tailwindlIcon from "../../public/icon/tailwind.svg";
import viteIcon from "../../public/icon/vite.svg";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="calcio text-9xl py-10 text-txt">SKILLS</h1>
      </div>
      {/* main div */}
      <div className="flex justify-center items-center">
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
                src={tailwindlIcon}
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
      </div>
    </div>
  );
};

export default page;
