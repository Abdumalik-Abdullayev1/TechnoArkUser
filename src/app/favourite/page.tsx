"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "@/types/page";
import Link from "next/link";

const Page = () => {
    const [likedProducts, setLikedProducts] = useState<ProductData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("You need to log in to view your favourite products.");
                return;
            }
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
                <p className="text-red-500 font-semibold text-xl my-10">{error}</p>
                <Link
                    href={"/"}
                    className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
                >
                    Go Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-[20px] lg:text-[30px] font-bold mb-5">Favourites Products</h1>
            <hr />
            <br />
            <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {likedProducts.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item?.images?.[0]} alt="liked" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
