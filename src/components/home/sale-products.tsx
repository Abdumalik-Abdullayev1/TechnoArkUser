import React from 'react'
import Image from 'next/image'
import AirPods from '@/assets/airpods.svg'
import { PiScalesLight } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";


const Page = () => {
    const card = [
        { id: 1, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, sales:<p className='bg-white px-2 text-red-700 rounded-md font-semibold'>Aksiyada</p>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 2, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, sales:<p className='bg-white px-2 text-red-700 rounded-md font-semibold'>Aksiyada</p>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 3, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, sales:<p className='bg-white px-2 text-red-700 rounded-md font-semibold'>Aksiyada</p>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
        { id: 4, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, sales:<p className='bg-white px-2 text-red-700 rounded-md font-semibold'>Aksiyada</p>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight />, cart: <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button> },
    ]
    return (
        <>
            <h2 className='font-bold mt-10 text-[22px] px-5 mb-5 xl:px-20'>Aksiyadagi tovarlar</h2>
            <div className='grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 xl:px-20'>
                {
                    card.map((item, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <span>{item.img}</span>
                                <span className='absolute top-5 right-5 sm:text-[22px]'>{item.like}</span>
                                <span className='absolute top-5 left-6'>{item.sales}</span>
                            </div>
                            <p>{item.title}</p>
                            <div className='xl:flex xl:items-end xl:justify-between'>
                                <div className='flex justify-between pr-5 items-center py-3 xl:flex-col xl:items-start xl:w-full '>
                                    <p className='text-[14px] font-bold sm:text-[18px]'>{item.price}</p>
                                    <p className='text-[11px] sm:text-[14px] rounded-sm xl:mt-2'>{item.sale}</p>
                                </div>
                                <div className='flex gap-1 h-full'>
                                    <button className='px-1'>{item.scales}</button>
                                    <span>{item.cart}</span>
                                </div>
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
