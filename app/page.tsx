export default function Home() {
  return (
    <div className="container mx-auto bg-red-500">
    yello
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