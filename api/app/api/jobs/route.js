import { getJobs } from "@/lib/data"
import { NextResponse } from "next/server"


       

export async function GET(response)
{
    try {

        let APICall=await getJobs()
        
        return NextResponse.json({message:"OK",APICall},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error Yo Bro!", error},
        {status:500,})
    }
}

// export async function POST(request,response)
// {
//     try {
        
//     } catch (error) {
//         return NextResponse.json({message:"Error Yo Bro!", error},
//         {status:500,}) 
//     }
// }