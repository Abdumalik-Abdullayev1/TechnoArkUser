'use client'
import { card } from '@/components/home/products'
import Products from '@/components/home/products'
import { useParams } from 'next/navigation'
import { LiaStoreAltSolid } from "react-icons/lia";
import { PiTruckDuotone, PiClock } from "react-icons/pi";


const Page = () => {
  const { id } = useParams()
  const findProduct = card.find((card) => card.id.toString() == id)
  return (
    <>
      <div className='px-5 xl:px-24'>
        <h1 className='text-black py-5 text-md font-bold xl:text-4xl'>{findProduct?.title}</h1>
        <div className='flex gap-10'>
          <div className='flex gap-2 w-[50%]'>
            <div className='hidden w-[20%] xl:flex xl:flex-col gap-1'>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
            </div>
            <span>{findProduct?.img}</span>
            <div className='w-[38%] flex flex-col gap-1 xl:hidden'>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
              <span>{findProduct?.img}</span>
            </div>
          </div>
          <div className='mt-20'>
            <div className='flex gap-2 items-end'>
              <span className='text-xl flex'>Narxi</span>
              <span className='text-3xl font-bold'>2 470 000</span>
              <span className='text-xl'>UZS</span>
            </div >
            <div className='bg-slate-200 px-44 py-5 rounded-lg mt-10'>
              <button>Oyiga 456 999 uszdan muddatli to’lov</button>
            </div>
            <div className='flex gap-2'>
              <button className='border border-blue-700 px-24 py-5 rounded-lg mt-10'>Savatga qo‘shish</button>
              <button className='bg-blue-700 px-28 text-white py-5 rounded-lg mt-10'>Xarid qilish</button>
            </div>
            <div className='mt-10 text-xl'>
              <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
              <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
              <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  )
}

export default Page
