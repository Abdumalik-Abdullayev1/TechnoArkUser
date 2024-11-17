"use client"

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { IoTvOutline } from "react-icons/io5";
import { TfiUser } from "react-icons/tfi";
import { CgShoppingBag, CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiVacuumCleaner } from "react-icons/gi";
import { PiScalesLight, PiWashingMachineThin } from "react-icons/pi";
import { AiOutlineMobile, AiOutlineDesktop} from "react-icons/ai";
import Logo from '@/assets/logo.svg';
import Link from "next/link";

const Page = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            {/* Header Section */}
            <div className="mt-10 sm:grid sm:grid-flow-col sm:items-center xl:px-32">
                <div className="sm:w-32 md:w-36 lg:w-64 px-5 grid grid-flow-col items-center">
                    <Link href="/" className="flex items-center">
                        <Image className="lg:w-[100%]" src={Logo} width={50} alt="logo" priority />
                        <h2 className="text-2xl font-black text-blue-800 sm:text-3xl md:text-4xl lg:text-6xl">Ashyo</h2>
                    </Link>
                    <p className="sm:hidden">+998 (71) 123-45-67</p>
                    <button className="text-[22px] sm:hidden" onClick={toggleSidebar}>
                        <RxHamburgerMenu />
                    </button>
                </div>
                
                {/* Category Button and Search Bar */}
                <div className="flex items-center gap-3 px-5">
                    <button onClick={toggleDropdown} className="flex items-center bg-blue-600 text-white px-2 py-2 rounded-md lg:px-8 lg:py-4">
                        Kategorya<IoIosArrowDown />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute left-32 top-20 w-10/12 bg-white shadow-lg p-4 z-50">
                            <div className="flex space-x-4">
                                {/* Sidebar Section in Dropdown */}
                                <div className="w-2/5 bg-gray-100 p-4 rounded-md">
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <AiOutlineMobile />
                                            <span>Smartfonlar va Aksessuarlar</span>
                                        </li>
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <IoTvOutline />
                                            <span>Televizorlar</span>
                                        </li>
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <PiWashingMachineThin />
                                            <span>Kiryuvish mashinalari</span>
                                        </li>
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <CgSmartHomeRefrigerator />
                                            <span>Muzlatgichlar</span>
                                        </li>
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <AiOutlineDesktop />
                                            <span>Kompyuter va jihozlari</span>
                                        </li>
                                        <li className="flex items-center space-x-2 p-2 hover:bg-slate-200 rounded-md">
                                            <GiVacuumCleaner/>
                                            <span>Chang utgichlar</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Categories Section in Dropdown */}
                                <div className="w-3/4 p-4 grid grid-cols-2 items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-700">Smartfonlar</h3>
                                        <ul className="text-gray-600">
                                            <li><button className="my-2 hover:text-blue-500">Oppo smartfonlar</button></li>
                                            <li><button className="hover:text-blue-500">Vivo smartfonlar</button></li>
                                            <li><button className="my-2 hover:text-blue-500">Realmi smartfonlar</button></li>
                                            <li><button className="hover:text-blue-500">Redmi smartfonlar</button></li>
                                            <li><button className="my-2 hover:text-blue-500">Xiaomi smartfonlar</button></li>
                                            <li><button className="hover:text-blue-500">Samsung smartfonlar</button></li>
                                            <li><button className="my-2 hover:text-blue-500">iPhone smartfonlar</button></li>
                                            <li><button className="hover:text-blue-500">Nokia smartfonlar</button></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-700">Telefon aksessuarlari</h3>
                                        <ul className="text-gray-600">
                                            <li><button className="my-2 hover:text-blue-500">Quvvatlagich</button></li>
                                            <li><button className="hover:text-blue-500">Telefon g'iloflar</button></li>
                                            <li><button className="my-2 hover:text-blue-500">Quloqchinlar</button></li>
                                            <li><button className="hover:text-blue-500">Xotira chiplari</button></li>
                                            <li><button className="my-2 hover:text-blue-500">Ekran himoya oynasi</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Search Bar */}
                    <div className="w-[80%] flex justify-between bg-slate-200 rounded-md xl:w-[35vw]">
                        <input className="bg-transparent p-2 outline-none lg:px-4 lg:py-4" type="text" placeholder="What are you looking for?" />
                        <button className="flex justify-center items-center bg-blue-600 text-white w-[20%] py-3 rounded-md lg:text-xl">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>

                {/* Icon Section */}
                <div className="hidden sm:flex justify-evenly gap-1">
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><PiScalesLight /></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md lg:py-4 lg:px-4"><IoMdHeartEmpty /></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><CgShoppingBag /></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md lg:py-4 lg:px-4"><TfiUser /></button>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>
                    <div className="relative w-64 h-full bg-white shadow-lg z-50 p-4">
                        <button className="text-xl mb-4" onClick={closeSidebar}>Close</button>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <AiOutlineMobile />
                                <span>Smartfonlar va Aksessuarlar</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <IoTvOutline />
                                <span>Televizorlar</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <PiWashingMachineThin />
                                <span>Kiryuvish mashinalari</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <CgSmartHomeRefrigerator />
                                <span>Muzlatgichlar</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <AiOutlineDesktop />
                                <span>Kompyuter va jihozlari</span>
                            </li>
                            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <GiVacuumCleaner />
                                <span>Chang utgichlar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
