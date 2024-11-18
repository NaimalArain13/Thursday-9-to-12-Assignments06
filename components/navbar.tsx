"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const routes = [
  { href: "/", name: "Home" },
  { href: "/courses", name: "Courses" },
  { href: "#", name: "Services" },
  { href: "team", name: "Achievement" },
  { href: "#", name: "About Us" },
  { href: "/testimonials", name: "Testimonials" },
];
function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-secondary border-y-[1px] px-3 md:px-10 flex items-center border-[#676767] h-[72px]">
      {/* logo section */}
      <div className="w-full max-w-[1280px] flex items-center justify-between h-11">
        <div className="h-[41px]">
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={139.6}
            height={30.38}
          />
        </div>
      </div>

      {/* nav links */}
      <div className="hidden md:w-full  h-11 md:gap-8 md:flex md:bg-primary">
        <div className="flex space-x-8 w-[687px] items-center p-[10px] gap-[10px]">
          {routes.map((route, index) => (
            <Link href={route.href} key={index}>
              <span
                className={`flex items-center  
                ${
                  pathname === route.name
                    ? "underline underline-offset-[16px]"
                    : ""
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex w-full max-w-[191px] h-10 gap-3">
          <button className=" font-[Roboto] text-[16px]  py-2 rounded-[5px]  px-5 border-[1px] border-black">
            Login
          </button>
          <button className="font-[Roboto] bg-black  text-white rounded-[5px] py-2 px-5 border-[1px] border-black ">
            Sign Up
          </button>
        </div>
      </div>
       
       {/* Toggle button */}
       <div className="md:hidden">
        <button 
          onClick={()=>{setIsOpen(!isOpen)}}
          aria-label="toggle menu"
          className="text-text">
            {isOpen ? <FiX  size={28}/>:<FiMenu size={28}/>}
          </button>
       </div>

       {/* mobile nav links */}
       {isOpen && (
         <div className="gap-4 flex flex-col justify-center items-center bg-primary">
         <div className="flex flex-col pt-4  space-y-8">
           {routes.map((route, index) => (
             <Link href={route.href} key={index}>
               <span
                 className={`flex items-center  
                 ${
                   pathname === route.name
                     ? "underline underline-offset-[16px]"
                     : ""
                 }`}
               >
                 {route.name}
               </span>
             </Link>
           ))}
         </div>
         <div className="flex w-full  h-10 gap-3">
           <button className=" font-[Roboto] text-[16px]  py-2 rounded-[5px]  px-5 border-[1px] border-text">
             Login
           </button>
           <button className="font-[Roboto] bg-text  text-primary rounded-[5px] py-2 px-5 border-[1px] border-text ">
             Sign Up
           </button>
         </div>
       </div>
       )}
      
    </header>
  );
}

export default Navbar;
