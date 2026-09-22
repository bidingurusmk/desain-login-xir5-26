'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('Ogah')
  return (
    <div>
      <h1>Hello!</h1>
      <p>my name is {name}</p>
    </div>
  );
}
