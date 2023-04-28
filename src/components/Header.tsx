import React from "react"
import Image from "next/image"
import { SocialIcon } from "react-social-icons"
type Props = {}
import Link from "next/link"
const Header = (props: Props) => {
  return (
    <div className="header bg-[#17376e] h-24 w-screen">
      <div>
        <Image src={"/ritlogo.png"} height={150} width={150} alt="logo" />
      </div>
      <div>
        <ul className="flex justify-center">
          <li className="m-2 p-2 text-white hover:text-red-400">
            <Link href={"/about"}>Home</Link>
          </li>
          <li className="m-2 p-2 text-white hover:text-red-400">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="m-2 p-2 text-white hover:text-red-400">
            <Link href={"/about"}>Department</Link>
          </li>
          <li className="m-2 p-2 text-white hover:text-red-400">
            <Link href={"/about"}>Student Corner</Link>
          </li>
          <li className="m-2 p-2 text-white hover:text-red-400">
            <Link href={"/about"}>Press Release</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-end mr-5">
          <li className="p-1 m-1 cursor-pointer hover:animate-pulse">
            <SocialIcon
              fgColor="blue"
              network="facebook"
              bgColor="#f7f4f4"
              style={{ height: 30, width: 30 }}
            />
          </li>
          <li className="p-1 m-1 cursor-pointer hover:animate-pulse">
            <SocialIcon
              bgColor="#00bfff "
              network="linkedin"
              fgColor="#f7f4f4"
              style={{ height: 30, width: 30 }}
            />
          </li>
          <li className="p-1 m-1 cursor-pointer hover:animate-pulse">
            <SocialIcon
              fgColor="red"
              network="instagram"
              bgColor="#f7f4f4"
              style={{ height: 30, width: 30 }}
            />
          </li>
          <li className="p-1 m-1 cursor-pointer hover:animate-pulse">
            <SocialIcon
              fgColor="#00bfff "
              network="twitter"
              bgColor="#f7f4f4"
              style={{ height: 30, width: 30 }}
            />
          </li>

          <li className="p-1 m-1 cursor-pointer hover:animate-pulse">
            <SocialIcon
              fgColor="red "
              network="youtube"
              bgColor="#f7f4f4"
              style={{ height: 30, width: 30 }}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
