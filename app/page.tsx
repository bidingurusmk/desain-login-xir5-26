"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="container mx-auto">
        {/* menu */}
        <div className="flex flex-row gap-4 justify-between">
          <Image src="/images/jh.png" alt="" width={100} height={100}
            className="w-50" />
          <div className="w-full md:flex flex-row gap-4 justify-center 
        items-center hidden">
            <ul className="flex flex-row gap-4">
              <li><Link href="/hosting" className="hover:text-orange-500">Hosting</Link></li>
              <li><Link href="/domain" className="hover:text-orange-500">Domain</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-orange-500">VPS Hosting</Link></li>
              <li><Link href="/vps-kvm" className="hover:text-orange-500">VPS KVM</Link></li>
              <li><Link href="/email" className="hover:text-orange-500">Email</Link></li>
            </ul>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:hidden block" 
          onClick={() => setIsOpen(!isOpen)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <button className="p-2 bg-green-300
            hover:bg-green-500 text-center md:block hidden">Login</button>
        </div>
        <div className={`w-full ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
            <ul className="flex flex-col gap-4 items-center justify-center w-full">
              <li><Link href="/hosting" className="hover:text-orange-500">Hosting</Link></li>
              <li><Link href="/domain" className="hover:text-orange-500">Domain</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-orange-500">VPS Hosting</Link></li>
              <li><Link href="/vps-kvm" className="hover:text-orange-500">VPS KVM</Link></li>
              <li><Link href="/email" className="hover:text-orange-500">Email</Link></li>
            </ul>
          </div>
        {/* header */}
        <div className="bg-black text-white p-4 flex md:flex-row flex-col gap-4 
      justify-between items-center rounded-b-3xl">
          <div className="w-full">
            <h1 className="text-[60px] font-bold">Butuh Domain Murah?</h1>
            <h1 className="text-[60px] font-bold">Chat WhatsApp Saja</h1>
            <p>Dapatkan domain, hosting, dan server terbaik dengan harga
              terjangkau dan pelayanan 24/7 melalui WhatsApp</p>
            <div className="mt-10">Dapatkan Konsultasi Gratis :</div>
            <div className="flex flex-row gap-4 mt-4">
              <button className="rounded-full bg-green-500 hover:bg-green-600
               text-white p-2 hover:-translate-y-2 transition-all cursor-pointer">
                Chat whatsapp sekarang</button>
              <button className="p-2 border-2 border-black">Pilih paket sendiri</button>
            </div>
          </div>
          <div className="md:w-300 w-full">
            <Image src="/images/header.webp" alt="" width={300}
              height={300} className="w-full" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="md:pl-30 px-2 md:pr-20 mt-10 py-8 bg-[#282828] flex 
      md:flex-row flex-col gap-4 justify-between items-start text-white">
        <div className="w-1/6">
          <h1 className="text-xl font-bold">Products</h1>
          <ul className="mt-4">
            <li className="hover:text-orange-500"><Link href="/hosting">Hosting</Link></li>
            <li className="hover:text-orange-500"><Link href="/domain">Domain</Link></li>
            <li className="hover:text-orange-500"><Link href="/vps-hosting">VPS Hosting</Link></li>
            <li className="hover:text-orange-500"><Link href="/vps-kvm">VPS KVM</Link></li>
            <li className="hover:text-orange-500"><Link href="/email">Email</Link></li>
          </ul>
        </div>
        <div className="w-1/6">
          <h1 className="text-xl font-bold">Services</h1>
          <ul className="mt-4">
            <li className="hover:text-orange-500"><Link href="/support">Support</Link></li>
            <li className="hover:text-orange-500"><Link href="/consultation">Consultation</Link></li>
          </ul>
        </div>
        <div className="w-1/6">
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="mt-4">
            <li className="hover:text-orange-500"><Link href="/about">About Us</Link></li>
            <li className="hover:text-orange-500"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="w-1/6">
          <h1 className="text-xl font-bold">Legal</h1>
          <ul className="mt-4">
            <li className="hover:text-orange-500"><Link href="/privacy">Privacy Policy</Link></li>
            <li className="hover:text-orange-500"><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="w-2/6">
          <h1 className="text-xl font-bold">Newsletter</h1>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="mt-4">
            <input type="email" placeholder="Enter your email" className="bg-[#333] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

  );
}





// 'use client'
// import Image from "next/image";
// import { useState } from "react";
// import Modal from '@/components/modal'

// export default function Home() {
//   const [name, setName] = useState('Ogah')
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div>
//       <h1>Hello!</h1>
//       <p>my name is {name}</p>
//       <button onClick={()=>setIsOpen(true)}>Tampilkan Modal</button>
//       <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title="Tambah Modal">
//         Hello skr saya ada di Modal. sampai jumpah!!!!
//       </Modal>
//     </div>
//   );
// }