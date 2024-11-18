import Image from "next/image";
import React from "react";
import Link from "next/link";

function TopSection() {
  return (
    <div className="hidden md:flex  w-full max-w-[428px] md:max-w-[1280px] bg-secondary h-[54px]">
      <div className="py-3 w-full flex justify-between items-center gap-8 px-10">
        <div className="w-full max-w-[386px] h-[30px] flex gap-4 items-center">
          <span className=" h-[21px] text-sm font-[Roboto]">
            Phone Number: 956 742 455 678
          </span>
          <div className="h-[30px] border-1 border border-[#676767]"></div>
          <span className="h-[21px] text-sm font-[Roboto]">
            Email:info@ddsgnr.com
          </span>
        </div>
        <div className="w-full max-w-[736px] h-6 flex justify-end gap-4">
         <Link href={"#"} className="h-6 w-6">
         <Image src={"/images/Vector.png"} alt="facebook" width={10} height={18}/>
         </Link>
         <Link href={"#"} className="h-6 w-6">
         <Image src={"/images/Instagram.png"} alt="instagram" width={24} height={18} />
         </Link>
         <Link href={"#"} className="h-6 w-6">
         <Image src={"/images/Linkedin.png"} alt="linkedin" width={18} height={18}/>
         </Link>
         <Link href={"#"} className="h-6 w-6">
         <Image src={"/images/Chirya.png"} alt="chirya" width={18} height={20}/>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
