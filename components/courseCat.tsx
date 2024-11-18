export interface CategoryProp {
    icon:unknown,
    title:string,
    availability:string
}
export default function CourseCategory(prop:CategoryProp){
    return(
        <div className="bg-gray-200 flex flex-row gap-3 p-4 rounded-md">
        <div className="border bg-white rounded-md p-4 text-2xl sm:text-xl flex justify-center items-center">
          {prop.icon as string}
        </div>
      
        <div className="flex flex-col justify-center space-y-1  text-left">
          <h1 className="text-xl sm:text-2xl font-bold">{prop.title}</h1>
          <p className="text-sm ">{prop.availability}</p>
        </div>
      </div>
    )
}