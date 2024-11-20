import React from 'react'
import {
    FaGooglePlay,
    FaAppStoreIos,
    FaFacebook,
    FaYoutube,
    FaTelegram,
    FaTwitter,
    FaInstagram,
    FaRegMessage
} from "react-icons/fa6";

const Page = () => {
    return (
        <>
            <div className='px-5 lg:hidden  '>
                <h2 className='font-semibold text-[18px] my-10'>Mobil ilovani yuklab oling</h2>
                <div className='flex items-center gap-5 '>
                    <button className='flex items-center gap-1 bg-slate-200 px-5 py-2 text-xl rounded-md'><FaAppStoreIos /> App Store</button>
                    <button className='flex items-center gap-1 bg-slate-200 px-5 py-2 text-xl rounded-md'><FaGooglePlay /> Google Play</button>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                        <ul>
                            <li>
                                <button>Ashyo haqida</button>
                            </li>
                            <li>
                                <button>Foydalanish shartlari</button>
                            </li>
                            <li>
                                <button className='text-left'>Maxfiylik va hafsizlik siyosati</button>
                            </li>
                            <li>
                                <button className='text-left'>Mahsulotlarni va tovarlarni qaytarish siyosati</button>
                            </li>
                            <li>
                                <button>Biz bilan aloqa</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Aloqa</h2>
                        <p>+998 (71) 123-45-67</p>
                        <div className='flex flex-wrap gap-2 text-2xl mt-5'>
                            <button className='bg-slate-200 px-4 py-2 rounded-md'><FaFacebook /></button>
                            <button className='bg-slate-200 px-4 py-2 rounded-md'><FaYoutube /></button>
                            <button className='bg-slate-200 px-4 py-2 rounded-md'><FaTelegram /></button>
                            <button className='bg-slate-200 px-4 py-2 rounded-md'><FaTwitter /></button>
                            <button className='bg-slate-200 px-4 py-2 rounded-md'><FaInstagram /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-20 lg:grid grid-cols-3 gap-32 my-16'>
                <div className='w-[500px]'>
                    <h2 className='text-xl font-bold'>Bizning ijtimoiy tarmoqlarda</h2>
                    <div className='flex flex-wrap gap-2 text-xl mt-5'>
                        <button className='bg-slate-200 text-2xl px-4 py-2 rounded-md'><FaFacebook /></button>
                        <button className='bg-slate-200 text-2xl px-4 py-2 rounded-md'><FaYoutube /></button>
                        <button className='bg-slate-200 text-2xl px-4 py-2 rounded-md'><FaTelegram /></button>
                        <button className='bg-slate-200 text-2xl px-4 py-2 rounded-md'><FaTwitter /></button>
                        <button className='bg-slate-200 text-2xl px-4 py-2 rounded-md'><FaInstagram /></button>
                    </div>
                    <h2 className='font-semibold text-[18px] mt-8 mb-3'>Mobil ilovani yuklab oling</h2>
                    <div className='flex items-center gap-5 '>
                        <button className='flex items-center gap-1 bg-slate-200 xl:px-9 xl:py-3 xl:text-xl font-bold rounded-md lg:px-5'><FaAppStoreIos /> App Store</button>
                        <button className='flex items-center gap-1 bg-slate-200 xl:px-9 xl:py-3 xl:text-xl font-bold rounded-md lg:px-5'><FaGooglePlay /> Google Play</button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-start font-bold'>
                    <button>Ashyo haqida</button>
                    <button>Foydalanish shartlari</button>
                    <button className='text-left'>Maxfiylik va hafsizlik siyosati</button>
                    <button className='text-left'>Mahsulotlarni va tovarlarni qaytarish siyosati</button>
                    <button>Biz bilan aloqa</button>
                </div>
                <div className='flex flex-col gap-3 font-bold'>
                    <h2>Aloqa</h2>
                    <p>+998 (71) 123-45-67</p>
                    <h2>Savolingiz bormi?</h2>
                    <div className='font-thin bg-slate-200 flex items-center max-w-80 p-2 rounded-md'>
                        <input className='bg-transparent w-full' type="text" placeholder='O`zingiz qiziqtirgan savollarni bering' />
                        <FaRegMessage className='text-[22px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
