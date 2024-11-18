import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="w-full max-w-[1280px] flex md:flex-row flex-col">
      <div className="w-full flex flex-col justify-center md:px-4 gap-y-9 pt-7 items-center md:items-start md:mx-12">
       
          <div className="  md:text-left md:gap-y-7 w-full max-w-[500px] flex flex-col gap-8 py-6 px-5">
            <h1 className="font-bold font-sans text-3xl md:text-6xl">
              Learn new skills online with ease
            </h1>
            <p className="text-lg md:text-xl md:h-[54px] font-sans">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            <div className="flex gap-2 ">
            <button className="rounded-[5px] border-[1px] border-black py-3 px-6">
              Start Learning Now
            </button>
            <button className="rounded-[5px] border-[1px] border-black px-6 bg-black text-white">
              Explore Courses
            </button>
          </div>
          </div>
          
       
      </div>
      <div className="w-full ">
        <Image
          src={"/images/Image.png"}
          alt="banner-image"
          width={720}
          height={900}
        />
      </div>
    </div>
  );
}

export default Banner;
