"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Map from '@/assets/map.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



const Page = () => {
    const [register, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: ''
    })
    const router = useRouter()

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const res = await fetch("https://texnoark.ilyosbekdev.uz/auth/user/sign-up", {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(register)
            });
            if (!res.ok) {
                const { message } = await res.json();
                throw new Error(message || 'Register failed');
            }
            const data = await res.json();
            console.log("Registration successful:", data);
            // router.push('auth/login')

        } catch (error: any) {
            console.error("Error during registration:", error.message || error);
        }
    }

    return (
        <div className='px-4'>
            <h2 className='font-bold mt-4 text-2xl md:px-10 lg:px-20 sm:text-3xl'>Ro’yhatdan o’tish</h2>
            <div className='w-full mt-3 md:px-10 lg:px-20'>
                <Link href="login"><button className='w-[50%] py-2 rounded-md shadow-md'>Kirish</button></Link>
                <button className='bg-slate-200 w-[50%] rounded-md py-2 shadow-xl'>Ro’yhatdan o’tish</button>
            </div>
            <div className='mt-3'>
                <form onSubmit={handleRegister} className=' sm:grid grid-cols-2 gap-4 md:px-10 lg:px-20 xl:grid-cols-3'>
                    <div>
                        <h3 className='text-slate-400 mt-1'>First name</h3>
                        <input type="text" placeholder='Enter your name' value={register.first_name} onChange={(event) => setRegister({ ...register, first_name: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
                    </div>
                    <div>
                        <h3 className='text-slate-400 mt-1'>Last name</h3>
                        <input type="text" placeholder='Enter your surname' value={register.last_name} onChange={(event) => setRegister({ ...register, last_name: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
                    </div>
                    <div>
                        <h3 className='text-slate-400 mt-1'>Email</h3>
                        <input type="email" placeholder='Enter your Email' value={register.email} onChange={(event) => setRegister({ ...register, email: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
                    </div>
                    <div>
                        <h3 className='text-slate-400 mt-1'>Phone number</h3>
                        <input type="number" placeholder='Enter your phone' value={register.phone_number} onChange={(event) => setRegister({ ...register, phone_number: event.target.value })} className='w-full spin-hidden p-2 border-b-2 outline-none border-black' />
                    </div>
                    <div>
                        <h3 className='text-slate-400 mt-1'>Password</h3>
                        <input type="password" placeholder='Enter new password' value={register.password} onChange={(event) => setRegister({ ...register, password: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
                    </div>
                    <div className='hidden sm:block'>
                        <h3 className='text-slate-400 mt-1'>Password</h3>
                        <input type="password" placeholder='Confirm password' className='w-full p-2 border-b-2 outline-none border-black' />
                    </div>
                    <button
                        type="submit"
                        className="w-[100%] mt-3 h-[45px] text-[18px] bg-blue-800 transition-colors hover:bg-blue-700 text-white rounded-md"
                    >
                        Register Now
                    </button>
                </form>
            </div>
            <div className='mt-8 flex justify-center gap-3'>
                <button className='bg-blue-800 text-white rounded-md px-8 py-2'>Telfon orqali</button>
                <button className='bg-slate-200 text-blue-700 rounded-md px-8 py-2'>Login orqali</button>
            </div>
            <div className='w-full mt-5 relative'>
                <div className='w-[40%] h-[85%] bg-white absolute top-0 left-5 my-3 p-1'>
                    <div>
                        <h2 className='font-extrabold text-[8px]'>OOO “Ashyo”</h2>
                        <div className='text-[8px]'>
                            <span>Telfon raqam;</span>
                            <span>+998 71 123 45 56</span>
                        </div>
                        <div className='text-[8px]'>
                            <span>Elektron pochta;</span>
                            <span className='text-blue-800 font-semibold pl-1'>ashyo@gmail.com</span>
                        </div>
                        <div className='text-[8px]'>
                            <p>Manzilimiz;</p>
                            <span className='font-bold text-[8px]'>100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
                            </span>
                        </div>
                    </div>
                </div>
                <Image src={Map} alt='MapImage' width={1500} />
            </div>
        </div>
    )
}

export default Page
