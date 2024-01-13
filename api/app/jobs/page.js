"use client"

import { useState,useEffect } from "react"
import axios from "axios"
import JobComp from "@/components/Job Comp/JobComp"
import LoaderLogo from "@/components/Loader Comp/LoaderComp"
import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"

export default function JobPage()
{
    const pathName=usePathname()


    const [jobState,setJobState]=useState([])
    const [Query,setQuery]=useState("")

    console.log("pathname jobComp ",pathName)

    useEffect(()=>{
        axios.get(`/api/jobs`)
        .then(res=>{
          
            const {APICall}=res.data
            setJobState(APICall)
        })

    },[])
  
    const renderJobs=jobState.filter(item=>item?.title?.toLowerCase()?.startsWith(Query))?.map(item=>{
        console.log("item ID ",item.id)
        return (<JobComp key={item.id} param={pathName.id} data={item} location={pathName} />)
    })

    if(jobState.length<1)
    {
        return (<><LoaderLogo/></>)
    }

    return(<>
    <main className="m-3" >
    <div className="flex">
                {/* Job Search */}
         <input className="w-[16rem] mx-2 border p-1 border-slate-500 rounded-md" onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Job titles, keywords or Company"/>
        <div className="App">
        <div className="search">
            <div className="zips">
        </div>
            
         </div>
        </div>
            </div>
       <div className="flex  ">
       <div className="w-[40vw]">
       {renderJobs}
       </div>
       </div>
    </main>
    </>)
}