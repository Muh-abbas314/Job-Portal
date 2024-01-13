import { NextResponse } from "next/server";


export const POST=async(req)=>{
   try {
    
    const resume=await req.json();
    console.log("<<<<<<<<<<<<<<<<<<<<REQUEST ",resume)
    return NextResponse.json({message:"OK",resume},{status:200})
   } catch (error) {
    return NextResponse.json({message:"Error Yo Bro!", error})
 
   }
    
}