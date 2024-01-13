"use client"
import Image from "next/image"
import logo from "../../public/colab-2.png"
import { FaRegBell } from "react-icons/fa";
import { BsChatRightText } from "react-icons/bs"
import Link from "next/link";
import { IconContext } from "react-icons";


export default function Nav() {
  return (
    <nav className="bg-black py-5 flex  justify-around">   
      <Link href={'/'}>
      <section className="w-[60vw] ">
      <Image src={logo}
      width={100}
      height={100}
      alt="colabs"/>
      </section>
      </Link>

      <section className=" flex justify-between items-center ">
        
       
        <div className="mx-2">
        <FaRegBell color="white" size="20px" />
       </div>
        
        <div>
        <BsChatRightText color="white" size="20px" />
        </div>
      </section>

    </nav>
  )
}
