"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LiaStoreAltSolid } from "react-icons/lia";
import { PiTruckDuotone, PiClock } from "react-icons/pi";
import Products from '@/components/home/products'

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/products/${id}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className='px-5 xl:px-24'>
        <h1 className='text-black py-5 text-xl font-bold xl:text-4xl'>{data?.data?.product?.name}</h1>
        <div className='flex'>
          <div className='flex gap-2 w-full xl:w-[80%]'>
            <div className='hidden w-[20%] xl:flex xl:flex-col justify-around gap-1'>
              {data?.data?.product?.images?.length > 1 ? (
                <img src={data?.data?.product?.images[1]} alt="product-main" className="w-full" />
              ) : (
                <img src={data?.data?.product?.images[0]} alt="product-main" className="w-full" />
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <img src={data?.data?.product?.images[3]} alt="product-main" className="w-full" />
              ) : (
                <img src={data?.data?.product?.images[0]} alt="product-main" className="w-full" />
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <img src={data?.data?.product?.images[2]} alt="product-main" className="w-full" />
              ) : (
                <img src={data?.data?.product?.images[0]} alt="product-main" className="w-full" />
              )}
              <img src={data?.data?.product?.images?.[0]} alt="product-main" className="w-full" />
            </div>
            <span className='w-[100%] flex flex-col justify-center items-center xl:w-[80%]'><img src={data?.data?.product?.images?.[0]} alt="product-main" className="xl:w-full md:w-[60%]" /></span>
            <div className='w-[30%] sm:w-[25%] md:w-[18%] flex flex-col gap-1 xl:hidden'>
              <img src={data?.data?.product?.images?.[0]} alt="product-main" className="w-full" />
              <img src={data?.data?.product?.images?.[0]} alt="product-main" className="w-full" />
              <img src={data?.data?.product?.images?.[0]} alt="product-main" className="w-full" />
              <img src={data?.data?.product?.images?.[0]} alt="product-main" className="w-full" />
            </div>
          </div>
          <div className='hidden xl:block xl:mt-20'>
            <div className='flex gap-2 items-end'>
              <span className='text-xl flex'>Narxi</span>
              <span className='text-3xl font-bold'>{data?.data?.product?.price}</span>
              <span className='text-xl'>UZS</span>
            </div>
            <div className='bg-slate-200 flex justify-center py-5 rounded-lg mt-10'>
              <button>Oyiga 456 999 uszdan muddatli to’lov</button>
            </div>
            <div className='flex gap-2'>
              <button className='w-[50%] border border-blue-700 py-5 rounded-lg mt-10'>Savatga qo‘shish</button>
              <button className='bg-blue-700 w-[50%] text-white py-5 rounded-lg mt-10'>Xarid qilish</button>
            </div>
            <div className='mt-10 text-xl flex flex-col gap-5'>
              <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
              <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
              <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
        <div className='xl:hidden'>
          <div className='sm:flex justify-evenly'>
            <div>
              <p>Rangini tanlash</p>
              <div className='flex gap-2 mt-5'>
                <div className='w-[34px] h-[34px] bg-red-800 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-black rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-emerald-400 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-slate-400 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-sky-300 rounded-md'></div>
              </div>
            </div>
            <div>
              <div className='flex gap-2 items-end mt-5 sm:mt-0'>
                <span className='text-xl flex'>Narxi</span>
                <span className='text-3xl font-bold'>{data?.data?.product?.price}</span>
                <span className='text-xl'>UZS</span>
              </div>
              <div className='mt-5'>
                <span>Bo‘lib to‘lash 6 oy <span className='font-bold text-xl'>419 000</span> USZdan</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-2'>
              <button className='bg-blue-700 text-white rounded-lg mt-10 py-2'>Hoziroq sotib olish</button>
              <div className='flex gap-2'>
                <button className='bg-slate-200 rounded-lg w-[50%] py-2'>Savatga qo‘shish</button>
                <button className='border border-blue-700 rounded-lg w-[50%]'>Bo‘lib to‘lang</button>
              </div>
            </div>
            <div className='mt-10 md:text-xl'>
              <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
              <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
              <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Page;