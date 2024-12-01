'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const [login, setLogin] = useState({
    phone_number: '',
    password: '',
  })
  const router = useRouter()

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const res = await fetch('https://texnoark.ilyosbekdev.uz/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(login)
      });
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || "Failerd Login")
      }
      const data = await res.json();
      const { access_token } = data?.data?.tokens
      const userId = data.data?.data?.id;
      router.push('/')

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_id', userId);

    } catch (error: any) {
      console.error("Error during registration", error.message || error)
    }
  }

  return (
    <div className='px-4'>
      <h2 className='font-bold mt-6 text-2xl'>Akkauntga kirish</h2>
      <div className='w-full mt-5 sm:px-20'>
        <button className='bg-slate-200 w-[50%] py-2 rounded-md shadow-xl'>Kirish</button>
        <Link href="register"><button className='w-[50%] rounded-md py-2 shadow-md'>Ro’yhatdan o’tish</button></Link>
      </div>
      <div className='mt-5'>
        <form onSubmit={handleLogin} className='sm:grid grid-cols-2 gap-4 sm:px-20'>
          <div>
            <h3 className='text-slate-400 sm:mt-5'>Telfon raqam</h3>
            <input type="number" placeholder='+998' value={login.phone_number} onChange={(event) => setLogin({ ...login, phone_number: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
          </div>
          <div>
            <h3 className='text-slate-400 mt-5'>Password</h3>
            <input type="password" placeholder='Enter your password' value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })} className='w-full p-2 border-b-2 outline-none border-black' />
          </div>
          <button
            type="submit"
            className="w-[100%] mt-3 h-[45px] text-[18px] bg-blue-800 transition-colors hover:bg-blue-700 text-white rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
      <div className='mt-8 flex justify-center gap-3'>
        <button className='bg-blue-800 text-white rounded-md px-8 py-2'>Telfon orqali</button>
        <button className='bg-slate-200 text-blue-700 rounded-md px-8 py-2'>Login orqali</button>
      </div>
    </div>
  )
}

export default Page
