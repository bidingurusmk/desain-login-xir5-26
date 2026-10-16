import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";
export const metadata:Metadata = {
    title: "Dashboard Page",
    description: "Dashboard Page"
}
export default function Home() {
  
  return (
    <div>
      <Header>
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
      </Header>
      {/* footer */}
      <Footer />
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