import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
export interface CourseCardProp {
  image:string,
  category:string,
  rating:string,
  courseTitle:string,
  courseDes:string,
  price:number
}
export default function CourseCard(props:CourseCardProp) {
  return (
    <div className="flex justify-center bg-secondary rounded-lg">
      <div className="w-full max-w-md h-auto bg-primary shadow-xl  hover:scale-105 transition-transform rounded-lg p-4 m-4">
      {/* Image Section */}
      <div className="w-full h-[200px] relative mb-3">
        <Image src={props.image} alt={props.courseTitle} layout="fill" objectFit="cover" className="rounded-t-lg" 
        />
      </div>

      {/* Course Info */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-semibold">{props.category}</h1>
        <p className="text-gray-500 gap-3 flex"><FaRegStar size={20}/> {props.rating}</p>
      </div>

      {/* Description */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold">{props.courseTitle}</h2>
        <p className="text-gray-600">{props.courseDes}</p>
      </div>

      {/* Button and Price */}
      <div className="flex  gap-4 items-center">
        <button>Enroll Now</button>
        <p className="text-lg font-semibold text-blue-500">${props.price}</p>
      </div>
    </div>
    </div>
    
  );
}
