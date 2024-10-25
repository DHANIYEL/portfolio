import Image from "next/image";
import React from "react";
import htmlIcon from "../../public/icon/html.svg";

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
          <div className="flex gap-10">
            <div className="grid grid-cols-2 gap-3 w-full">
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
            </div>

            <div className="flex items-center justify-center bg-yellow-300 rounded-md p-5 overflow-hidden w-full h-full">
              {/* js big icon */}
              <Image src={htmlIcon} alt="img" width={200} height={200} />
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
