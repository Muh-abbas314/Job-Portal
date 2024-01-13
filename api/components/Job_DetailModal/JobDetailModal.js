"use client"

import { useState } from "react"

export default function Modal(props)
{
    const [showModal, setShowModal]=useState(props.state)
    
    return(<>
     <main className="bg-white">
        <h1 className="font-bold">Job Description</h1>
        <h1>{props?.data?.description}</h1>
        <hr/>
        <h1 className="my-2"><span className="font-bold">Required Skills:</span> {props?.data?.tech_stack_req}</h1>
        <h1 className="my-2"><span className="font-bold">Required Experience: </span> {props?.data?.required_Exp}</h1>
        <h1 className="my-2"><span className="font-bold">Location:</span> {props?.data?.location}</h1>
        <h1 className="my-2"><span className="font-bold">Job Type:</span> {props?.data?.job_type}</h1>
        <h1 className="my-2"><span className="font-bold">Package</span> {props?.data?.expectedPackage}</h1>

    </main>
    </>)
}