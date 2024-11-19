import React from 'react'
import Image from 'next/image'
import Apple from '@/assets/apple.svg'
import Artel from '@/assets/artel.svg'
import Samsung from '@/assets/samsung.svg'
import Mi from '@/assets/XiaoMi.svg'
import Huawei from '@/assets/huawei.svg'
import Nokia from '@/assets/nokia.svg'
import Vivo from '@/assets/vivo.svg'


const Page = () => {
    return (
        <div className='grid grid-cols-2 mt-10 gap-2 px-4 md:grid-cols-3 lg:grid-cols-4 xl:px-20'>
            <div className='bg-[rgb(225,240,215)] h-[20vh] flex items-center rounded-md'>
                <Image src={Artel} width={500} alt='Artel' priority />
            </div>
            <div className='bg-[rgb(230,238,246)] h-[20vh] flex items-center rounded-md'>
                <Image src={Samsung} width={500} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(230,230,230)] h-[20vh] flex justify-center items-center rounded-md'>
                <Image src={Apple} width={80} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(204,226,241)] h-[20vh] flex items-center rounded-md px-10'>
                <Image src={Vivo} width={500} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(224,232,243)] h-[20vh] flex items-center rounded-md px-10'>
                <Image src={Nokia} width={500} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(255,225,204)] h-[20vh] flex justify-center items-center rounded-md px-10'>
                <Image src={Mi} width={200} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(255,209,210)] h-[20vh] flex justify-center items-center rounded-md px-10'>
                <Image src={Huawei} width={170} alt='Apple' priority />
            </div>
            <div className='bg-[rgb(230,238,246)] flex justify-center items-center rounded-md text-xl font-bold text-blue-600 hover:bg-blue-800 hover:text-white'>
                <h2>Ko`proq</h2>
            </div>
        </div>
    )
}

export default Page