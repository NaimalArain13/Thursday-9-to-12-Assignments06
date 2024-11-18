
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl pt-3  px-4 space-y-8 md:px-8">
        
        {/* First Section: Newsletter Subscription */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-xl text-center sm:text-left text-gray-700">Subscribe to our newsletter</h1>
            <p className="text-center sm:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
          </div>
          <div className="flex flex-col">
          <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 w-full   md:space-y-0 md:space-x-3">
            <input type="email" placeholder="Enter your email" className="p-2 px-7 rounded-md border  border-gray-500 tracking-widest text-center" />
            <button className="border border-1 border-text hover:text-primary hover:bg-text p-1 px-4 rounded-md text-lg">Subscribe</button>
          </div>
          <p className="text-[13px]   mt-3 text-center md:text-left">
            By subscribing, you agree with our{" "}
            <Link href="#" className="underline underline-offset-4">
              Privacy Policy
            </Link>
          </p>
          </div>
          
        </div>

        {/* Middle Section: Links and Logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:items-start md:justify-start">
            <Image src={"/images/footerLogo.svg"} alt="footerLogo" width={136} height={40}  className=""/>
            
            </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-text text-xl font-bold mb-2">Courses</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Business</Link>
              <Link href={"#"}>Development</Link>
              <Link href={"#"}>Technology</Link>
              <Link href={"#"}>Design</Link>
              <Link href={"#"}>Programming</Link>
            </div>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-text text-xl font-bold mb-2">Resources</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Career</Link>
              <Link href={"#"}>Resume</Link>
              <Link href={"#"}>Learning</Link>
              <Link href={"#"}>Interview Preparation</Link>
              <Link href={"#"}>Jobs</Link>
            </div>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-text text-xl font-bold mb-2">About Us</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Help/Support</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Terms and Conditions</Link>
              <Link href={"#"}>Partner</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-12 border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left">
            <p>© 2024 Tech Store. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/product" className="text-gray-800 hover:text-[#3f4f5f] underline underline-offset-3">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-[#3f4f5f] underline underline-offset-3">
                Terms of Services
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-[#3f4f5f] underline underline-offset-3">
                Cookies Settings
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
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
      </div>
    </footer>
  );
}
