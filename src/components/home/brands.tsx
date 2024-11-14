import React from 'react'
import Image from 'next/image'
import Apple from '@/assets/apple.svg'
import Nokia from '@/assets/nokia.svg'
import Samsung from '@/assets/samsung.svg'
import Vivo from '@/assets/vivo.svg'
import Huawei from '@/assets/huawei.svg'
import Artel from '@/assets/artel.svg'
import Mi from '@/assets/XiaoMi.svg'


const Page = () => {
    const models = [
        { id: 1, img: <div className='h-[10vh] bg-[rgb(225,240,215)]'><Image className='w-full' src={Artel} width={100} alt='Artel' priority /></div> },
        { id: 2, img: <Image className='w-full h-[20vh] bg-[rgb(230,238,246)]' src={Samsung} width={100} alt='Samsung' priority /> },
        { id: 3, img: <div className='h-[30vh] flex justify-center bg-[rgb(230,230,230)]'><Image className='w-[1/2]' src={Apple} width={100} alt='Apple' priority /></div>},
        { id: 4, img: <Image className='w-full bg-[rgb(204,226,241)]' src={Vivo} width={100} alt='Vivo' priority /> },
        { id: 5, img: <Image className='w-full bg-[rgb(224,232,243)]' src={Nokia} width={100} alt='Nokia' priority /> },
        { id: 6, img: <Image className='w-full bg-[rgb(255,225,204)]' src={Mi} width={100} alt='Mi' priority /> },
        { id: 7, img: <Image className='w-full bg-[rgb(255,209,210)]' src={Huawei} width={100} alt='Huawei' priority /> },
    ]
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                models.map((item, index) => (
                    <div key={index} className=' odd:bg-black'>
                        <span>{item.img}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Page