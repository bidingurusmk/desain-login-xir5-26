"use client"
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState,  } from "react";
import {useRouter} from "next/navigation"
type Props = {
    children: ReactNode
}
const Header = ({children}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className="container mx-auto">
        {/* menu */}
        <div className="flex flex-row gap-4 justify-between items-center">
          <Image src="/images/jh.png" alt="" width={100} height={100}
            className="w-50" />
          <div className="w-full md:flex flex-row gap-4 justify-center 
        items-center hidden">
            <ul className="flex flex-row gap-4">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/hosting" className="hover:text-orange-500">Hosting</Link></li>
              <li><Link href="/domain" className="hover:text-orange-500">Domain</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-orange-500">VPS Hosting</Link></li>
              <li><Link href="/vps-kvm" className="hover:text-orange-500">VPS KVM</Link></li>
              <li><Link href="/email" className="hover:text-orange-500">Email</Link></li>
            </ul>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
          className="size-10 md:hidden block mr-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <button className="p-2 bg-green-300
            hover:bg-green-500 text-center md:block hidden">Login</button>
        </div>
        <div className={`w-full ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
            <ul className="flex flex-col gap-4 items-center justify-center w-full">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/hosting" className="hover:text-orange-500">Hosting</Link></li>
              <li><Link href="/domain" className="hover:text-orange-500">Domain</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-orange-500">VPS Hosting</Link></li>
              <li><Link href="/vps-kvm" className="hover:text-orange-500">VPS KVM</Link></li>
              <li><Link href="/email" className="hover:text-orange-500">Email</Link></li>
            </ul>
          </div>
        {/* header */}
        {children}
      </div>
    );
}
export default Header;