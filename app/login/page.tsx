'use client'
import { useState } from "react";
import Image from 'next/image'
const LoginPage = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleSubmit = () => {
        alert(`username: ${username}
password: ${password}`);
    }
    return (
        <div className="min-h-screen w-full flex flex-col justify-center">
            <div className="md:w-100 w-full mx-auto bg-white
        border border-gray-500 rounded-lg shadow-lg flex flex-col gap-4
        justify-center p-4 mt-30 items-center relative pt-27">
                <div className="rounded-full overflow-hidden w-50 h-50 absolute -top-27">
                    <Image src="https://patchcollection.com/cdn/shop/products/spiderman_extra_large_logo.jpg?v=1762462462" alt="" width={100} height={100}
                        className="w-full" />
                </div>
                <h1 className="text-3xl text-center">Login Aplikasi</h1>
                <input type="text" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 shadow-md
            p-2 w-full"/>
                <input type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 shadow-md
            p-2 w-full"/>
                <button onClick={handleSubmit}
                    className="p-2 bg-green-300 
            hover:bg-green-500 text-center w-full">Login</button>
            </div>
        </div>

    )
}
export default LoginPage