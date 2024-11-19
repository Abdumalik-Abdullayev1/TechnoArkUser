import React from 'react'
import Image from 'next/image'
import AirPods from '@/assets/airpods.svg'
import { PiScalesLight } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";


const Page = () => {
    const card = [
        { id: 1, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 2, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 3, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 4, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 5, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 6, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
    ]
    return (
        <>
            <h2 className='font-bold mt-10 text-[22px] px-5'>Most popular product</h2>
            <div className='grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
                {
                    card.map((item, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <span className=''>{item.img}</span>
                                <span className='absolute top-2 right-2 sm:text-[22px]'>{item.like}</span>
                            </div>
                            <p>{item.title}</p>
                            <div className='flex items-center justify-between py-3'>
                                <p className='text-[14px] font-bold sm:text-[18px]'>{item.price}</p>
                                <p className='text-[11px] bg-slate-300 px-1 sm:text-[14px] rounded-sm'>{item.sale}</p>
                            </div>
                            <div className='flex gap-1 sm:justify-between'>
                                <button className='border rounded-md p-2 sm:px-6'>{item.scales}</button>
                                <span>{item.cart}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center my-5 xl:hidden'>
                <button className='px-10 py-2 text-blue-700 bg-[rgb(230,238,246)] rounded-md'>Ko’proq</button>
            </div>
        </>
    )
}

export default Page
