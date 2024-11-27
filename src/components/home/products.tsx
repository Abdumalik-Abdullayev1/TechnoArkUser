"use client"
import Image from 'next/image'
import AirPods from '@/assets/airpods.svg'
import Phone from '@/assets/MI12Lite.svg'
import { PiScalesLight } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from 'next/link';



export const card = [
    { id: 1, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={500} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight /> },
    { id: 2, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={Phone} width={500} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight /> },
    { id: 3, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={AirPods} width={500} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight /> },
    { id: 4, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md'><Image src={Phone} width={500} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty />, title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора", price: "6 999 999usz", sale: "6 X/568 999", scales: <PiScalesLight /> },
    // { id: 5, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md xl:hidden'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty className='xl:hidden' />, title: <p className='xl:hidden'>Смартфон Xiaomi 12 Lite 8/128Gb Қора</p>, price: <p className='xl:hidden'>6 999 999usz</p>, sale: <p className='xl:hidden'>6 X/568 999</p>, scales: <PiScalesLight className='xl:hidden' />},
    // { id: 6, img: <div className='bg-[rgb(230,238,246)] p-5 rounded-md xl:hidden'><Image src={AirPods} width={300} alt='AirPods' priority /></div>, like: <IoMdHeartEmpty className='xl:hidden' />, title: <p className='xl:hidden'>Смартфон Xiaomi 12 Lite 8/128Gb Қора</p>, price: <p className='xl:hidden'>6 999 999usz</p>, sale: <p className='xl:hidden'>6 X/568 999</p>, scales: <PiScalesLight className='xl:hidden' />},
]


const Product = () => {



    return (
        <div>
            <h2 className='font-bold mt-10 text-[22px] px-5 mb-5 xl:px-20'>Most popular product</h2>;
            <div className='grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 xl:px-20'>
                {
                    card.map((item, index) => (
                        <div key={index}>
                            <Link href={`products/${item.id}`}>
                                <div className='relative'>
                                    <span>{item.img}</span>
                                    <span className='absolute top-2 right-2 sm:text-[22px]'>{item.like}</span>
                                </div>
                                <p>{item.title}</p>
                                <div className='xl:flex xl:items-end xl:justify-between'>
                                    <div className='flex justify-between pr-5 items-center py-3 xl:flex-col xl:items-start xl:w-full '>
                                        <p className='text-[14px] font-bold sm:text-[18px]'>{item.price}</p>
                                        <p className='text-[11px] sm:text-[14px] rounded-sm xl:mt-2'>{item.sale}</p>
                                    </div>
                                    <div className='flex gap-1 h-full'>
                                        <button className='px-1'>{item.scales}</button>
                                        <button className='flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md'>Savatcha<CgShoppingBag /></button>
                                    </div>
                                </div></Link>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center my-5 xl:hidden'>
                <button className='px-10 py-2 text-blue-700 bg-[rgb(230,238,246)] rounded-md'>Ko’proq</button>
            </div>
        </div >
    )
}

export default Product
