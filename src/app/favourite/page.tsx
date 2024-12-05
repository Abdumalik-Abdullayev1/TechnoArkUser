"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "@/types/page";
import { CgShoppingBag } from 'react-icons/cg';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import Link from "next/link";

const Page = () => {
    const [likedProducts, setLikedProducts] = useState<ProductData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const likedProductsData = localStorage.getItem("likedProducts");
            if (!likedProductsData) {
                setError("Your favorite product has not been identified yet.");
                return;
            }
            const parsedLikedProducts: ProductData[] = JSON.parse(likedProductsData);
            if (Array.isArray(parsedLikedProducts) && parsedLikedProducts.length > 0) {
                setLikedProducts(parsedLikedProducts);
            } else {
                setError("Your favorite product has not been identified yet.");
            }
        } catch (error) {
            setError("Failed to load liked products!");
            console.error("Error parsing liked products from localStorage:", error);
        }
    }, []);

    if (error) {
        return (
            <div className="flex flex-col items-center gap-3 lg:gap-4">
                <p className="text-red-500 font-semibold text-xl my-10 text-center">{error}</p>
                <Link
                    href={"/"}
                    className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
                >
                    Go Home
                </Link>
            </div>
        );
    }

    const toggleLike = async (item: ProductData) => {
        let updatedLikes: ProductData[];
        const isLiked = likedProducts.some(product => product.id === item.id);
        if (isLiked) {
            updatedLikes = likedProducts.filter(product => product.id !== item.id);
        } else {
            updatedLikes = [...likedProducts, item];
        }
        setLikedProducts(updatedLikes);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
    };

    return (
        <div className="container mt-5 xl:px-20">
            <h1 className="px-10 text-[20px] lg:text-[30px] font-bold mb-5 xl:px-3 xl:text-4xl">Precious Products</h1>
            <div className="grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-5 xl:px-3">
                {likedProducts.map((item) => (
                    <div key={item?.id} className="product-card relative">
                        <div>
                            <div className="relative h-[50vh] bg-slate-200 flex justify-center items-center object-contain rounded-lg">
                                <button
                                    onClick={() => toggleLike(item)}
                                    className="absolute top-5 right-5 text-2xl"
                                >
                                    {likedProducts.some(product => product.id === item.id) ? <FcLike /> : <FcLikePlaceholder />}
                                </button>
                                <Link href={`/products/${item?.id}`}><img src={item?.images?.[0]} alt="card" className="w-full" /></Link>
                            </div>
                            <p className="text-sm font-bold sm:text-xl mt-2">{item?.name}</p>
                            <div className="xl:flex xl:items-center xl:justify-between">
                                <div className="flex justify-between pr-5 items-center py-3 xl:flex-col xl:items-start xl:w-full">
                                    <p className="text-md font-bold sm:text-[18px]">${item?.price}</p>
                                </div>
                                <div className="flex gap-1 h-full">
                                    <button className="flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md">
                                        Savatcha
                                        <CgShoppingBag />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Link
                    href={"/"}
                    className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Page;
