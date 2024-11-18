import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
export interface TestimonialsProps {
    description:string,
    image:string,
    name:string,
    designation:string
}
export default function TestimonialCard(props:TestimonialsProps){
    return(
        <div className="flex justify-center">
            <div className="w-full max-w-md h-auto  border border-text broder-2 p-4 m-4">
            <div className="flex flex-col mb-4">
                <p className="flex flex-row mb-2">
                    <MdOutlineStar className="text-text"/>
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                </p>
                <p className="text-sm sm:text-md">{props.description}</p>
            </div>
            <div className="flex flex-row gap-4 ">
                <div className="flex items-center">
                    <Image src={props.image} alt={props.name} width={40} height={0} className="border-2  rounded-full"/>
                </div>
                <div className="flex flex-col ">
                    <h1>{props.name}</h1>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}