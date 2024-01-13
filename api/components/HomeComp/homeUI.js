"use client"
import bgLogo from "../../public/Background.png"
import charLogo from "../../public/Character-1.png"
import Image from "next/image"
import "./homeUi.css"
import Link from "next/link"

export default function HomeUi()
{
    
    return(<>
    <div style={{
        backgroundImage: `url(${bgLogo.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center" 
      }} className="flex justify-center items-center bg-target  h-[90vh] ">
        
        
    <div className="flex justify-center  ">
       <div className="h-[30vh]  ">
       <div className="my-5">
       <h1 className="text-3xl font-bold">Find the Job you love</h1>
       <p className="font-semibold">Search among active jobs on the Emerging Tech Fields</p>
       </div>
       <Link href={"/jobs"} className=" m-4 hover:bg-[#2140da] bg-[#4461F2] text-white font-semibold px-5 py-3 rounded-md">Find Jobs</Link>
       </div>
        <div className=" ">
            <Image src={charLogo} width={300} height={300}/>
        </div>
        </div>
    </div>
    </>)
}