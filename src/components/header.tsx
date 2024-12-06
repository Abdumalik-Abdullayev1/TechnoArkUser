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

interface CategoryType {
    name: string,
    id: number,
    parent_category_id?: number
}
interface SubCategoryType {
    id: number,
    name: string
}

const Page = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [subCategory, setSubCategory] = useState<SubCategoryType[]>([]);


    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    const toggleDropdown = async () => {
        try {
            const res = await fetch('https://texnoark.ilyosbekdev.uz/category/search', {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            });
            if (res.ok) {
                const data = await res.json();
                setCategories(data?.data?.categories);
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error("Error fetching categories", error);
        }
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSubCategory = async (parent_category_id: number) => {
        try {
            const res = await fetch(`https://texnoark.ilyosbekdev.uz/sub-category/search/${parent_category_id}`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            })

            if (res.ok) {
                const data = await res.json();
                setSubCategory(data?.data?.subcategories || [])
            } else {
                console.error('Failed to fetch SubCategories');
            }
        } catch (error) {
            console.error("Error fetching SubCategories", error);
        }
    }

    return (
        <div className="relative ">
            <div className="mt-10 sm:grid sm:grid-flow-col sm:pr-5 sm:items-center xl:px-16">
                <div className="sm:w-32 md:w-36 lg:w-64 px-5 grid grid-flow-col items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image className="lg:w-[100%]" src={Logo} width={50} alt="logo" priority />
                        <h2 className="text-2xl font-black text-blue-800 sm:text-3xl md:text-4xl lg:text-6xl">Ashyo</h2>
                    </Link>
                    <p className="sm:hidden">+998 (71) 123-45-67</p>
                    <button className="text-[22px] sm:hidden" onClick={toggleSidebar}>
                        <RxHamburgerMenu />
                    </button>
                </div>

                <div className="flex items-center gap-2 px-3">
                    <button onClick={toggleDropdown} className="flex items-center bg-blue-600 text-white px-2 py-2 rounded-md lg:px-6 lg:py-4">
                        Kategorya<IoIosArrowDown />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute w-[93%] flex gap-5 left-3 top-24 sm:top-14 md:w-[90%] md:left-10 md:top-16 lg:w-[95%] xl:left-28 xl:top-20 xl:w-[84%] bg-slate-50 rounded-md shadow-xl p-4 z-50">
                            <ul className="bg-slate-100 w-[40%] md:w-[20%] rounded-md">
                                {categories?.length > 0 ? (
                                    categories?.map((category, index) => (
                                        <button onClick={() => handleSubCategory(category.id)} key={index} className="p-2 hover:bg-gray-200 rounded-md flex flex-col w-full">
                                            <button>
                                                {category.name}
                                            </button>
                                        </button>
                                    ))
                                ) : (
                                    <li>No categories found</li>
                                )}
                            </ul>
                            <div>
                                <h3 className="font-bold text-2xl">Sub Categories</h3>
                                <ul className="my-2">
                                    {subCategory?.length > 0 ? (
                                        subCategory?.map((item, index) => (
                                            <li key={index}>
                                                <Link href="/">{item.name}</Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li>Sub-Categories not found</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="w-[70%] flex justify-between bg-slate-200 rounded-md lg:w-[350px] xl:w-[450px] 2xl:w-[600px]">
                        <input className="bg-transparent p-2 outline-none lg:px-3 lg:py-4" type="text" placeholder="What are you looking for?" />
                        <button className="flex justify-center items-center bg-blue-600 text-white w-[20%] py-3 rounded-md lg:text-xl">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>

                <div className="hidden sm:flex justify-center gap-2 md:justify-start xl:justify-normal ">
                    <button className="bg-slate-200 text-[20px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><PiScalesLight /></button>
                    <Link href="/favourite" className="bg-slate-200 text-[20px] p-2 rounded-md lg:py-4 lg:px-4"><IoMdHeartEmpty /></Link>
                    <Link href="/cart" className="bg-slate-200 text-[20px] p-2 rounded-md hidden md:block lg:py-4 lg:px-4"><CgShoppingBag /></Link>
                    <Link href="/auth/login" className="bg-slate-200 text-[20px] p-2 rounded-md lg:py-4 lg:px-4"><TfiUser /></Link>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>
                    <div className="relative w-64 h-full bg-white shadow-lg z-50 p-4">
                        <button className="text-xl mb-4 font-extrabold text-blue-800" onClick={closeSidebar}>Ashyo</button>
                        <ul className="space-y-4">
                            <Link href="/auth/login" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <button><TfiUser /></button>
                                <span>Profile</span>
                            </Link>
                            <Link href="/favourite" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <button><IoMdHeartEmpty /></button>
                                <span>Liked Products</span>
                            </Link>
                            <Link href="/cart" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                                <button><CgShoppingBag /></button>
                                <span>Cart</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
            <div className="hidden lg:block xl:px-24">
                <ul className="flex justify-evenly mt-5 ">
                    <button className="hover:text-blue-800">Aksiyalar</button>
                    <button className="hover:text-blue-800">Smartfonlar</button>
                    <button className="hover:text-blue-800">Noutbooklar</button>
                    <button className="hover:text-blue-800">Kondetsionerlar</button>
                    <button className="hover:text-blue-800">Telivizorlar</button>
                    <button className="hover:text-blue-800">Muzlatgichlar</button>
                    <button className="hover:text-blue-800">Kiryuvish mashinalari</button>
                    <button className="hover:text-blue-800">Telivizorlar</button>
                    <button className="hover:text-blue-800">Kiryuvish mashinalari</button>
                </ul>
            </div>
        </div>
    );
};

export default Page;
