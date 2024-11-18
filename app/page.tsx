import Banner from "@/components/banner";
import TopSection from "@/components/top";
import Image from "next/image";
import Courses from "./(routes)/courses/page";
import Team from "./(routes)/team/page";
import Testimonials from "./(routes)/testimonials/page";

export default function Home() {
  return (
    <div>
      <TopSection />
   
      <Banner />
      <div className="bg-grey flex flex-col md:flex-row gap-3 py-4 w-full max-w-[1280px] h-[150px] justify-between  items-center ">
        <h1 className="text-lg px-8 md:text-2xl font-semibold md:font-bold">
        Trusted by the world&#39;s best companies [social proof to build credibility]
        </h1>
        <div className="flex flex-row gap-3 ">
          <div
            className={`font-serif font-bold  flex items-center justify-center rounded-md`}
          >
            <Image
              src={"/images/AirbnbLogo.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center  ">
            <Image
              src={"/images/logo2.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-monospace font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-full">
            <Image
              src={"/images/logo3.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-serif font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md ">
            <Image
              src={"/images/logo4.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md">
            <Image
              src={"/images/logo5.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md">
            <Image
              src={"/images/logo6.svg"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
        </div>
      </div>
      <Courses />
      <Team />
      <Testimonials />
   
    </div>
  );
}
