import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto">
      {/* menu */}
      <div className="flex flex-row gap-4 justify-between">
        <Image src="/images/jh.png" alt="" width={100} height={100} 
        className="w-50" />
        <div className="w-full flex flex-row gap-4 justify-center 
        items-center">
          <ul className="flex flex-row gap-4">
            <li><Link href="/hosting" className="hover:text-orange-500">Hosting</Link></li>
            <li><Link href="/domain" className="hover:text-orange-500">Domain</Link></li>
            <li><Link href="/vps-hosting" className="hover:text-orange-500">VPS Hosting</Link></li>
            <li><Link href="/vps-kvm" className="hover:text-orange-500">VPS KVM</Link></li>
            <li><Link href="/email" className="hover:text-orange-500">Email</Link></li>
          </ul>
        </div>
        <button className="p-2 bg-green-300
            hover:bg-green-500 text-center">Login</button>
      </div>
      {/* header */}
      <div className="bg-black text-white p-4 flex flex-row gap-4 
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
        <div className="w-300">
          <Image src="/images/header.webp" alt="" width={300} 
          height={300} className="w-full"/>
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