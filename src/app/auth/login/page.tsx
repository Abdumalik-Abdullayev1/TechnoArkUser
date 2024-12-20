'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Map from '@/assets/map.svg'
import LoginImg from '@/assets/validation.jpg'
import { authReques } from '@/service/page'
import Image from 'next/image'
import {
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

type LoginType = {
  phone_number: string,
  password: string
}


const Page = () => {
  const [values, setValues] = useState<LoginType>({
    phone_number: '',
    password: ''
  });
  const router = useRouter()

  const handleLogin: any = async (event: any) => {
    event.preventDefault()
    try {

      const res = await authReques.sign_in(values)
      if (res.status === 201) {
        const token = res?.data?.data?.tokens?.access_token;
        const userId = res?.data?.data?.data?.id;
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("userId", userId);
        router.push('/')
      }
    } catch (err) {
      console.log("Error");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='px-4'>
      <h2 className='font-bold mt-10 text-2xl sm:px-10 lg:px-20 xl:text-3xl'>Akkauntga kirish</h2>
      <div className='w-full mt-5 sm:px-20'>
        <button className='bg-slate-200 w-[50%] py-2 rounded-md shadow-xl'>Kirish</button>
        <Link href="register"><button className='w-[50%] rounded-md py-2 shadow-md'>Ro’yhatdan o’tish</button></Link>
      </div>
      <div className='sm:flex gap-10 mt-5 px-10 items-center lg:px-20'>
        <div className='hidden sm:block xl:w-[50%]'>
          <Image className='w-full' src={LoginImg} alt='LoginImg' width={500} />
        </div>
        <form onSubmit={handleLogin} className='sm:w-[50%] lg:px-16'>
          <div>
            <h3 className='text-slate-400 sm:mt-5'>Phone number</h3>
            <input type="tel"
              placeholder='+998'
              name="phone_number"
              value={values.phone_number}
              onChange={handleInputChange}
              className='w-full p-2 border-b-2 spin-hidden outline-none border-black' />
          </div>
          <div>
            <h3 className='text-slate-400 mt-5'>Password</h3>
            <input type="password"
              placeholder='Enter your password'
              name='password'
              value={values.password}
              onChange={handleInputChange}
              className='w-full p-2 border-b-2 outline-none border-black' />
          </div>
          <div className='sm:grid grid-flow-col'>
            <button
              type="submit"
              className="w-full mt-3 py-2 text-xl bg-blue-800 text-white rounded-md"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className='mt-8 flex justify-center gap-3'>
        <button className='bg-blue-800 text-white rounded-md px-8 py-2'>Telfon orqali</button>
        <button className='bg-slate-200 text-blue-700 rounded-md px-8 py-2'>Login orqali</button>
      </div>
      <div className='w-full mt-5 relative'>
        <div className='w-[40%] h-[75%] bg-white absolute top-20 left-5 my-1 p-1 sm:p-5 xl:my-5'>
          <div className='lg:flex flex-col gap-1 lg:gap-4'>
            <h2 className='font-extrabold text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[22px]'>OOO “Ashyo”</h2>
            <div className='text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[22px]'>
              <span>Telfon raqam;</span>
              <span>+998 71 123 45 56</span>
            </div>
            <div className='text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[22px]'>
              <span>Elektron pochta;</span>
              <span className='text-blue-800 font-semibold pl-1'>ashyo@gmail.com</span>
            </div>
            <div className='text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[22px]'>
              <p>Manzilimiz;</p>
              <span className='font-bold text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[22px]'>100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
              </span>
            </div>
            <div className='hidden md:block'>
              <p>Ijtimoiy tarmoqlarimiz</p>
              <div className='flex flex-wrap gap-2 text-[12px] lg:text-[17px] xl:text-[22px] xl:mt-2'>
                <button className='bg-slate-200 text-2xl py-2 px-2 xl:px-5 rounded-md'><FaFacebook /></button>
                <button className='bg-slate-200 text-2xl py-2 px-2 xl:px-5 rounded-md'><FaYoutube /></button>
                <button className='bg-slate-200 text-2xl py-2 px-2 xl:px-5 rounded-md'><FaTelegram /></button>
                <button className='bg-slate-200 text-2xl py-2 px-2 xl:px-5 rounded-md'><FaTwitter /></button>
                <button className='bg-slate-200 text-2xl py-2 px-2 xl:px-5 rounded-md'><FaInstagram /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Link
            href={"/"}
            className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-800 transition-all hover:bg-blue-500 rounded-md text-white"
          >
            back to home
          </Link>
        </div>
        <iframe
          width={1500}
          height={450}
          src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5992.270615549258!2d69.2930533!3d41.327671!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x38aef4b6039cc475%3A0x6fd3bf1c5533b300!3m2!1d41.3276707!2d69.29305269999999!4m5!1s0x38aef4b6039cc475%3A0x6fd3bf1c5533b300!2sBodomzor%20yo&#39;li%201-tor%20ko&#39;chasi%2072%20%D0%A2%D0%BEshkent%20Toshkent!3m2!1d41.327670999999995!2d69.2930533!5e0!3m2!1sen!2s!4v1733569286954!5m2!1sen!2s">
        </iframe>
      </div>
    </div>
  )
}

export default Page
