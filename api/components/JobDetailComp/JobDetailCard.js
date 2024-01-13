import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaBriefcase } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import Apply_JobCardComp from "../Apply Comp/Apply_JobDetail";

export default function JobCard(props)
{
    return(<>
    <div  className=" w-[50vw] rounded-lg  my-5 "> 
    <main  className="">
    <h1 className="text-2xl font-bold">{props?.data?.title}</h1>
    <p>{props?.data?.company}</p>
    <p>{props?.data?.expectedPackage}</p>
    <div>
        <Apply_JobCardComp data={props}/>
    </div>
  <hr className="my-2"/>
    <section>
         <h1 className="text-2xl font-bold">Job Details</h1>
        <div>
        <span>
        <div>
       <div className="my-2 flex items-center">
       <LiaMoneyBillSolid className="mx-2"/>
        <h2 className="font-bold">Pay</h2>
       </div>
        </div>
        <span className="text-slate-600 font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
        {props?.data?.expectedPackage}
        </span>
        </span>
        <span>
       <div className=" my-2 flex items-center my-2">
       <FaBriefcase  className="mx-2"/>
        <h2 className="font-bold">Job Type</h2>
       </div>

            <span className="text-slate-600 font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
                {props?.data?.location}
            </span>
            
        </span>
        </div> 
    </section>
    <hr className="my-4"/>
    
    <span>
   <div className="my-2 flex  items-center">
   <IoMdPin className="mx-2"/>
    <h2 className="font-bold">Location</h2>
   </div>
   <span className="text-slate-600 font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2"> {props?.data?.location}</span>
    </span>

    <hr className="my-4"/>
  
  <ul className="list-disc text-left">
    <li>Candidate must have {props?.data?.required_Exp} of Experience</li>
    <li>{props?.data?.description}</li>
    <li>{props?.data?.tech_stack_req}</li>
  </ul>
  
</main>
   
    </div>
    </>)
}