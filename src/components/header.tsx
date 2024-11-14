"use client"

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { TfiUser } from "react-icons/tfi";
import { CgShoppingBag } from "react-icons/cg";
import { PiScalesLight } from "react-icons/pi";
import Logo from '@/assets/logo.svg';
import Link from "next/link";

const Page = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
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
                <div className="flex items-center gap-3 px-5">
                    <div>
                        <button className="flex items-center bg-blue-600 text-white px-2 py-2 rounded-md lg:px-8 lg:py-4">
                            Kategorya<IoIosArrowDown />
                        </button>
                    </div>
                    <div className="w-[80%] flex justify-between bg-slate-200 rounded-md xl:w-[35vw] ">
                        <input className="bg-transparent p-2 outline-none lg:px-4 lg:py-4" type="text" placeholder="What are you looking for?" />
                        <button className="flex justify-center items-center bg-blue-600 text-white w-[20%] py-3 rounded-md lg:text-xl">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex justify-evenly gap-1">
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><PiScalesLight/></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md lg:py-4 lg:px-4"><IoMdHeartEmpty/></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><CgShoppingBag/></button>
                    <button className="bg-slate-200 text-[25px] p-2 rounded-md lg:py-4 lg:px-4"><TfiUser/></button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
                    <button
                        className="text-xl p-4"
                        onClick={toggleSidebar}
                    >
                        Close
                    </button>
                    <ul className="mt-4">
                        <li className="p-4 border-b">Menu Item 1</li>
                        <li className="p-4 border-b">Menu Item 2</li>
                        <li className="p-4 border-b">Menu Item 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Page;
