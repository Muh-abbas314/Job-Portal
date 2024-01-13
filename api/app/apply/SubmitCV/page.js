"use client"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"

// Firebase Import
import { storage } from "@/firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"


import { AddResume } from "@/lib/data"
import axios from "axios"



export default function SubmitCV() {
    const query = useSearchParams()
    const context = JSON.parse(query.get("data"))
    console.log(context)
    const [imageUpload, setImageUpload] = useState(null)
    const [ImageList, setList] = useState([])
    const PreviewDoc = ImageList[ImageList.length - 1]

    console.log(PreviewDoc)

    useEffect(() => {

        listAll(ref(storage, "images/")).then(res => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setList((prev) => [...prev, url])
                })
            })
        })

    }, [])

    function Upload() {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert("resume successfuly uploaded to cloud")
            })

    }

    function SubmitData()
    {
        
        const data={
            // id:v4(),
            context,
            PreviewDoc,
        }
        AddResume(data)
        axios.post(`/api/apply`,data)
        alert("Application Sent")
    }

    return (<>
        <div className="flex justify-center items-center">
            <main >
                <div>  
                    <h1 className="text-2xl font-bold m-2">Resume submission</h1>
                    <input id="files" className=" m-3 bg-gray-400" type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                    <button className=" my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-lg" onClick={Upload}>Upload Resume</button></div>
                {/* <label className="text-white py-2 my-2 px-2 rounded-md bg-orange-500" for="files">Select Resume</label> */}

                <div className="flex justify-center">

                    {PreviewDoc ? (<iframe src={`${PreviewDoc}`} width={400} height={400}></iframe>) : <div className="w-[400px] h-[400px] bg-slate-500"></div>}

                </div>

               <div className="my-3 flex justify-center">
              {/* <button onClick={SubmitData}  className="my-3 text-white font-semibold bg-green-500 p-2 rounded-md">
                Submit Application
              </button> */}
               <Link href={`/success`} onClick={SubmitData} className="my-3 text-white font-semibold bg-green-500 p-2 rounded-md" >
                    Submit Your Application
                </Link>
               </div>
            </main>
        </div>
    </>)
}