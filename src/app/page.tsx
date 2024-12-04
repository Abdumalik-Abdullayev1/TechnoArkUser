"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Phones from "@/assets/phones.svg"
import Phones2 from "@/assets/phones2.svg"
const Brands = dynamic(()=> import('@/components/home/brands'), {
  loading: () => <p>Loading...</p>})
const Popular = dynamic(()=> import('@/components/home/products'), {
  loading: () => <p>Loading...</p>})
const Sale = dynamic(()=> import('@/components/home/sale-products'), {
  loading: () => <p>Loading...</p>})
const Products = dynamic(()=> import('@/components/home/products-second'), {
  loading: () => <p>Loading...</p>})
const AllProducts = dynamic(()=> import('@/components/home/products-third'), {
  loading: () => <p>Loading...</p>})
const Techno = dynamic(()=> import('@/components/home/technologies'), {
  loading: () => <p>Loading...</p>})
const Music = dynamic(()=> import('@/components/home/music'), {
  loading: () => <p>Loading...</p>
})
export default function Home() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        <div className="bg-slate-200 w-screen h-[50vh] mt-5 relative">
          <h1 className="text-blue-800 text-2xl font-extrabold absolute top-9 left-4 sm:text-4xl lg:text-5xl lg:left-10 xl:left-28 xl:top-1/3 xl:text-black">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="absolute text-[12px] text-left text-gray-500 top-20 left-4 max-w-[390px] sm:text-[16px] lg:text-[20px] lg:max-w-[600px] lg:left-10 lg:top-24 xl:left-28 xl:top-44">Orginallik va qulay narxni o`zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
          <button className="absolute bg-blue-800 text-white px-5 py-2 rounded-md top-32 left-4 sm:top-36 lg:top-44 lg:left-10 lg:px-20 lg:py-4 xl:left-28 xl:top-64">Batafsil</button>
          <div className="absolute bottom-0 right-0 h-full xl:hidden">
            <Image className="h-full" src={Phones} width={100} alt="Phones" priority />
          </div>
          <div className="absolute w-1/2 h-full bottom-0 hidden xl:flex xl:right-0"><Image className="absolute right-0 bottom-0" src={Phones2} width={700} alt="Phones" priority /></div>
        </div>
        <div className="bg-slate-200 w-screen h-[50vh] mt-5 relative">
          <h1 className="text-blue-800 text-2xl font-extrabold absolute top-9 left-4 sm:text-4xl lg:text-5xl lg:left-10 xl:left-28 xl:top-1/3 xl:text-black">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="absolute text-[12px] text-left text-gray-500 top-20 left-4 max-w-[390px] sm:text-[16px] lg:text-[20px] lg:max-w-[600px] lg:left-10 lg:top-24 xl:left-28 xl:top-44">Orginallik va qulay narxni o`zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
          <button className="absolute bg-blue-800 text-white px-5 py-2 rounded-md top-32 left-4 sm:top-36 lg:top-44 lg:left-10 lg:px-20 lg:py-4 xl:left-28 xl:top-64">Batafsil</button>
          <div className="absolute bottom-0 right-0 h-full xl:hidden">
            <Image className="h-full" src={Phones} width={100} alt="Phones" priority />
          </div>
          <div className="absolute w-1/2 h-full bottom-0 hidden xl:flex xl:right-0"><Image className="absolute right-0 bottom-0" src={Phones2} width={700} alt="Phones" priority /></div>
        </div>
        <div className="bg-slate-200 w-screen h-[50vh] mt-5 relative">
          <h1 className="text-blue-800 text-2xl font-extrabold absolute top-9 left-4 sm:text-4xl lg:text-5xl lg:left-10 xl:left-28 xl:top-1/3 xl:text-black">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="absolute text-[12px] text-left text-gray-500 top-20 left-4 max-w-[390px] sm:text-[16px] lg:text-[20px] lg:max-w-[600px] lg:left-10 lg:top-24 xl:left-28 xl:top-44">Orginallik va qulay narxni o`zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
          <button className="absolute bg-blue-800 text-white px-5 py-2 rounded-md top-32 left-4 sm:top-36 lg:top-44 lg:left-10 lg:px-20 lg:py-4 xl:left-28 xl:top-64">Batafsil</button>
          <div className="absolute bottom-0 right-0 h-full xl:hidden">
            <Image className="h-full" src={Phones} width={100} alt="Phones" priority />
          </div>
          <div className="absolute w-1/2 h-full bottom-0 hidden xl:flex xl:right-0"><Image className="absolute right-0 bottom-0" src={Phones2} width={700} alt="Phones" priority /></div>
        </div>
        <div className="bg-slate-200 w-screen h-[50vh] mt-5 relative">
          <h1 className="text-blue-800 text-2xl font-extrabold absolute top-9 left-4 sm:text-4xl lg:text-5xl lg:left-10 xl:left-28 xl:top-1/3 xl:text-black">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="absolute text-[12px] text-left text-gray-500 top-20 left-4 max-w-[390px] sm:text-[16px] lg:text-[20px] lg:max-w-[600px] lg:left-10 lg:top-24 xl:left-28 xl:top-44">Orginallik va qulay narxni o`zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
          <button className="absolute bg-blue-800 text-white px-5 py-2 rounded-md top-32 left-4 sm:top-36 lg:top-44 lg:left-10 lg:px-20 lg:py-4 xl:left-28 xl:top-64">Batafsil</button>
          <div className="absolute bottom-0 right-0 h-full xl:hidden">
            <Image className="h-full" src={Phones} width={100} alt="Phones" priority />
          </div>
          <div className="absolute w-1/2 h-full bottom-0 hidden xl:flex xl:right-0"><Image className="absolute right-0 bottom-0" src={Phones2} width={700} alt="Phones" priority /></div>
        </div>
      </Carousel>

      <Brands />
      <Popular />
      <Products/>
      <Techno/>
      <Sale/>
      <Music/>
      <AllProducts />
    </div>
  );
}
