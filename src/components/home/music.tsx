import React from 'react'
import Image from 'next/image'
import Headphones from '@/assets/pngwing.svg'


const Page = () => {
    return (
        <div className='px-5 xl:px-20'>
            <div className='bg-[rgb(40,40,40)] rounded-lg flex items-center sm:gap-10 lg:gap-20'>
                <div className='md:pl-20'>
                    <Image src={Headphones} width={300} alt='Headphones' />
                </div>
                <div className='w-1/2 lg:w-1/3'>
                    <h2 className='text-white sm:text-xl lg:text-3xl xl:text-4xl'>Musiqa zavqini his qilish uchun ko`p mablag` sarflash shart emas!</h2>
                    <button className='bg-white rounded-md px-5 xl:px-14 py-2 mt-5'>Batafsil</button>
                </div>
            </div>
        </div>
    )
}

export default Page
