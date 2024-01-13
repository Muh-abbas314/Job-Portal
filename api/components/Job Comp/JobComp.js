"use client"
import { IoPaperPlaneSharp } from "react-icons/io5";
import { HiBolt } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function JobComp(props)
{
    const location=props?.location


    return(
       <Link  href={`/jobs/${props.data.id}`}>
        <div >
        <main className="my-2 rounded-lg border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
       <div style={{border:location===`/jobs/${props?.data?.id}`?"1px solid blue":"none"}}>
       <div className="flex flex-col ">
           <h3 className="font-bold mx-2">  {props.data.title}</h3>
           <p className="mx-2"> {props.data.company}</p>
           <p className="mx-2">{props.data.location}</p>
           <div className="my-2">
            <span className="font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
                {props.data.expectedPackage}
            </span>
            <span className="font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
                {props.data.job_type}
            </span>

           </div>
           <div>
          <div className="flex mx-2"> 
            <span className="flex items-center">
                <IoPaperPlaneSharp className="rotate-45 mx-2 " /> Easily Apply
            </span> 
           
                {props.data.responsive_emp=="true"?<span className="flex items-center"><HiBolt className="mx-2" /> Responsive Employee</span>:""}

         </div>
           </div>
            </div>
       </div>
       
       
        </main>
        </div>
      
       </Link>
    )
}