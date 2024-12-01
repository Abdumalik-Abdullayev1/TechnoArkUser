"use client"
import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import useFetch from '@/app/hooks/get-data';
import { useEffect, useState } from 'react';

const Product: any = () => {
    const { data } = useFetch('https://texnoark.ilyosbekdev.uz/products/search');
    const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});


    useEffect(() => {
        const savedLikes = localStorage.getItem('likedProducts');
        if (savedLikes) {
            setLikedProducts(JSON.parse(savedLikes));
        }
    }, []);
    const toggleLike = (id: string) => {
        let updatedLikes: { [key: string]: boolean } = {};
        if (likedProducts[id]) {
            updatedLikes = { ...likedProducts };
            delete updatedLikes[id];
        } else {
            updatedLikes = { ...likedProducts, [id]: true };
        }
        setLikedProducts(updatedLikes);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
    };

    return (
        <div>
            <h2 className="font-bold mt-10 text-[22px] px-5 mb-5 xl:px-20">Most popular product</h2>
            <div className="grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 xl:px-20">
                {data?.products?.slice(4, 8).map((item: any) => (
                    <div key={item?.id} className="product-card relative">
                        <div>
                            <div className="relative h-[50vh] bg-slate-200 flex justify-center items-center object-contain rounded-lg">
                                <button
                                    onClick={() => toggleLike(item?.id)}
                                    className="absolute top-5 right-5 text-2xl"
                                >
                                    {likedProducts[item?.id] ? <FcLike /> : <FcLikePlaceholder />}
                                </button>
                                <Link href={`products/${item?.id}`}><img src={item?.images?.[0]}  alt="card" className="w-full" /></Link>
                                <span className="absolute top-2 right-2 sm:text-[22px]">{ }</span>
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
            <div className="w-full flex justify-center my-5 xl:hidden">
                <button className="px-10 py-2 text-blue-700 bg-[rgb(230,238,246)] rounded-md">Ko’proq</button>
            </div>
        </div>
    );
};

export default Product;