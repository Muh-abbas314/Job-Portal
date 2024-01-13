"use client"

import footerImg from "../../public/colabspk_cover.jpeg"
import Image from "next/image"
export default function Footer()
{
    return(
        <>
        <footer className="fixed mt-5 left-0 right-0 bottom-0 flex items-center bg-black">
            <div className="">
                <Image src={footerImg} objectFit="contain" height={80}/>
            </div>
        </footer>
        </>
    )
}