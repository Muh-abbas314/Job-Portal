import Link from "next/link"
import { useParams } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

export default function Apply_JobCardComp(props)
{
    const {id}=useParams()
    return(<>
     <div className="flex my-2 ">
       {/* ,query:{data:JSON.stringify(state[0])} */}
        <Link href={{pathname:`/apply`,query:{data:JSON.stringify(props.data)} }}  class=" mx-4 flex justify-center align-item bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         <p className="self-center">Apply now</p>
        </Link>
        <button className=" bg-slate-400 hover:bg-slate-700 text-white border font-bold py-2 px-4 rounded">
        <span className="flex items-center"><CiBookmarkCheck size={30} className="mx-1" /> </span>
        </button>
        </div>
    </>)
}