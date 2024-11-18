import {
    SiAntdesign,
    SiGooglemarketingplatform,
    SiGamedeveloper,
  } from "react-icons/si";
  import { FaCreativeCommons } from "react-icons/fa";
  import { GiDigitalTrace, GiInnerSelf } from "react-icons/gi";
  import { MdBusinessCenter, MdSettingsSuggest } from "react-icons/md";
  import { FaMoneyCheckDollar } from "react-icons/fa6";
  import Link from "next/link";
  import CourseCategory, { CategoryProp } from "./courseCat";
  export default function CategorySection() {
    const courseCategory: CategoryProp[] = [
      {
        icon: (<SiAntdesign />) as unknown as string,
        title: "Design & Dev",
        availability: "30+ Courses Available",
      },
      {
        icon: (<SiGooglemarketingplatform />) as unknown as string,
        title: "Marketing",
        availability: "50+ Courses Available",
      },
      {
        icon: (<SiGamedeveloper />) as unknown as string,
        title: "Developement",
        availability: "30+ Courses Available",
      },
      {
        icon: (<FaCreativeCommons />) as unknown as string,
        title: "Communication",
        availability: "30+ Courses Available",
      },
      {
        icon: (<GiDigitalTrace />) as unknown as string,
        title: "Digital Marketing",
        availability: "30+ Courses Available",
      },
      {
        icon: (<GiInnerSelf />) as unknown as string,
        title: "Self Developement",
        availability: "30+ Courses Available",
      },
      {
        icon: (<MdBusinessCenter />) as unknown as string,
        title: "Business",
        availability: "50+ Courses Available",
      },
      {
        icon: (<FaMoneyCheckDollar />) as unknown as string,
        title: "Finance",
        availability: "40+ Courses Available",
      },
      {
        icon: (<MdSettingsSuggest />) as unknown as string,
        title: "Consulting",
        availability: "50+ Courses Available",
      },
    ];
    return (
      <div className="flex flex-col items-center text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Explore Courses By Category</h1>
        <p className="text-gray-600 mb-10 max-w-xl">
          Discover a wide range of courses covering a variety of subjects taught
          by expert instructor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 w-full max-w-6xl">
          {courseCategory.map((cat, index) => (
            <div key={index} className={`${index > 2 ? "hidden sm:block" : "block"} `}>
            
            <CourseCategory  {...cat} />
            </div>
          ))}
        </div>
        <Link href={"/courses"}>
          <div className="text-center mt-4 py-8">
            <button
             
              className="border border-gray-700 rounded-md hover:scale-95 transition-transform py-2 px-6 text-sm sm:text-md font-bold"
            >
              View All Courses
            </button>
          </div>
        </Link>
        
      </div>

    );
  }
  