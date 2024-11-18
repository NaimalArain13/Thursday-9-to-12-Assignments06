import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export interface TeamProp {
    image:string,
    teamMem:string,
    memTitle:string,

}
export default function TeamCard(props:TeamProp){
    return(
        <div className="flex flex-col items-center gap-y-2">
            
                <Image src={props.image} alt={props.teamMem} width={70} height={0} className="h-auto rounded-sm mb-3"/>
            
            <div className="text-center">
                <h1 className="text-md font-medium ">{props.teamMem}</h1>
                <p>{props.memTitle}</p>
            </div>
            <p className="flex flex-row space-x-4 ">
                <FaLinkedin /> <FaXTwitter /> <FaGithub />
            </p>
        </div>
    )
}