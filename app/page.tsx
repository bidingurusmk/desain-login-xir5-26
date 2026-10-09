import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto">
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