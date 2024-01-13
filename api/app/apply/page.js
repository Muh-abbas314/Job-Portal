"use client"
// Client-Side React imports
import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useState,useEffect } from "react"

// Next package
import Link from "next/link"
import { v4 } from "uuid"



// Modal Component
import Modal from "@/components/Job_DetailModal/JobDetailModal"


export default function ApplyPage() {

    const [logic, setLogic] = useState(false)
    const [userData,setuserdata]=useState({
        lastJobTitle:"",
        lastOrg:""
    })
   
   

    

    const pathname = usePathname()
    const params = useSearchParams()
    const context = JSON.parse(params.get("data"))



    


    function DispModel() {
        setLogic(prev => !prev)
    }



    function HandleChangeEvent(event)
    {
        const {name,value}=event.target
        setuserdata((prev)=>({...prev, [name]:value}))
    }


    return (<>
        <div className="flex justify-center my-3 items-center">
            <main className="w-[60vw] h-full rounded-lg p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">

                <div>
                    <div>
                        <h1 className="text-xl font-semibold">{context?.data?.title}</h1>
                        <h1 className="text-sm text-slate-500 font-semibold">{context?.data?.company}</h1>
                        <button className="underline text-blue-600" onClick={DispModel}>{logic ? "Hide Details" : "See More Details"}</button>
                    </div>

                    <section className="relative  border rounded-lg">
                        {logic ? (
                            <div className="relative bg-white ">
                                <div className="flex flex-col">


                                    <Modal data={context.data} state={logic} />
                                </div>
                            </div>) : null}
                    </section>

                    <section className="my-3 flex justify-center items-center flex-col ">

                        <section className="flex flex-col">
                            <h1 className="my-4 text-2xl font-bold self-start mx-2">Enter a past Job that shows relevant experience</h1>
                            <h1 className="my-4 font-bold self-start mx-2">Relevant Experience</h1>
                            <div className=" p-3">
                                <form>
                                    <label className="font-bold" for="job_title">Job Title</label> <br />
                                    <input className="border w-[20rem] p-1 border-2 rounded-md" id="job_title" type="text"
                                        onChange={HandleChangeEvent}
                                        name="lastJobTitle"></input><br />
                                    <label className="font-bold">Company</label><br />
                                    <input className="border w-[20rem] p-1  border-2 rounded-md" id="company_title" type="text"
                                        onChange={HandleChangeEvent}
                                        name="lastOrg"></input><br />
                                </form>
                            </div>
                        </section>

                        <Link href={{pathname:`/apply/SubmitCV`,query:{data:JSON.stringify(userData)}}} className="my-4 w-[20vw] text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-lg">Next</Link>

                        
                    </section>

                </div>
            </main>
        </div>
    </>)
}