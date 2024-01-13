"use client"

import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
// import JobDetail from "@/components/JobDetailComp/JobDetail"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";

import LoaderLogo from "@/components/Loader Comp/LoaderComp"

import JobCard from "@/components/JobDetailComp/JobDetailCard"

export default function JobPage()
{
  const [jobState,setJobState]=useState([])
    const params=useParams()
    
    
    
    useEffect(()=>{
        axios.get(`/api/jobs`)
        .then(res=>{
            // const APIData=res.data.job
            const {APICall}=res.data
            setJobState([APICall])
        })
    },[])

  const renderData=jobState[0]?.filter(item=>item.id===params.id).map(item=>{
    console.log("Job card error check item id ",item.id," and params are ",params.id)
    return( <JobCard key={item?.id} data={item}/> )})

  console.log("job State",jobState)
   if(jobState.length<1)
   {
    return(<>
    <LoaderLogo/>
    </>)
   }


   return(<>
    <main className="sticky top-0">

      <div className="my-5  rounded-lg p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="mx-2 flex flex-col justify-center">
       <div className="flex justify-center">
         {renderData}
       </div>
       
    </div>
    </div>
    </main>
    </>)
}