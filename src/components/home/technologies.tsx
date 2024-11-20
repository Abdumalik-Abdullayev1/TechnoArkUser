import Image from 'next/image'
import React from 'react'
import laptop from '@/assets/laptop.svg'
import freez from '@/assets/freez.svg'
import freezer from '@/assets/freezer.svg'
import Tv from '@/assets/Tv.svg'
import WashingMachine from '@/assets/washingMachine.svg'
import Phones from '@/assets/phones.svg'

const Page = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-1 p-4 xl:px-20 xl:gap-4">
                <div className="bg-[rgb(92,79,140)] grid col-span-2 row-span-4 relative rounded-md">
                    <Image className='absolute bottom-0 right-0 w-[150px] sm:w-[220px] lg:w-[400px]' src={laptop} width={300} alt="Noutbooklar" />
                    <div className="absolute text-white font-bold top-2 left-2">Noutbooklar</div>
                </div>
                <div className="bg-gray-400 grid col-span-1 row-span-4 relative min-h-[22vh] sm:h-[30vh] lg:h-[50vh] rounded-md">
                    <Image className='absolute bottom-4 right-0 w-[180px] lg:w-[410px]' src={freezer} width={400} alt="Havo sovutgichlar" />
                    <div className="absolute text-white font-bold top-2 left-2">Havo sovutgichlar</div>
                </div>

                <div className="bg-[rgb(182,158,113)] grid col-span-1 row-span-4 relative min-h-[22vh] sm:h-[30vh] lg:h-[50vh] rounded-md">
                    <Image className='absolute bottom-0 right-0 w-[100px] sm:w-[150px] lg:w-[280px]' src={WashingMachine} width={300} alt="Kiryuvish mashina" />
                    <div className="absolute text-white font-bold top-2 left-2">Kiryuvish mashina</div>
                </div>
                <div className="bg-[rgb(215,185,126)] grid col-span-2 row-span-4 relative rounded-md">
                    <Image className='absolute bottom-0 right-0 w-[180px] sm:w-[270px] lg:w-[450px] xl:w-[500px]' src={Tv} width={300} alt="Televizorlar" />
                    <div className="absolute text-white font-bold top-2 left-2">Televizorlar</div>
                </div>

                <div className="bg-[rgb(92,79,140)] grid col-span-2 row-span-4 relative rounded-md">
                    <Image className='absolute bottom-0 right-0 w-[400px] lg:w-[500px] xl:w-[600px]' src={Phones} width={300} alt="Telefonlar" />
                    <div className="absolute text-white font-bold top-2 left-2">Telefonlar</div>
                </div>
                <div className="bg-gray-600 grid col-span-1 row-span-4 relative min-h-[22vh] sm:h-[30vh] lg:h-[50vh] rounded-md">
                    <Image className='absolute bottom-0 right-0 w-[80px] sm:w-[120px] lg:w-[200px]' src={freez} width={300} alt="Muzlatgichlar" />
                    <div className="absolute text-white font-bold top-2 left-2">Muzlatgichlar</div>
                </div>

            </div>
            <div className="flex justify-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold">Ko`proq</button>
            </div>
        </>
    )
}

export default Page
