import { getById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request)
{
   
    try {
        const id=request.url.split('jobs/')[1];
        
        const job=await getById(id)
        return NextResponse.json({message:"OK->",job},
        {
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:"Not working bruh",error},
            {
                status:500
            })
    }
   
}

export async function POST(request,response)
{
    console.log("DYNAMIC ROUTE POST REQUEST")
}