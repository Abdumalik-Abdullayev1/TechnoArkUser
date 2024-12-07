import React from 'react';
import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import useFetch from '@/app/hooks/get-data';
import { useEffect, useState } from 'react';
import { ProductData } from '@/types/page';
import { useRouter } from 'next/navigation';

const Product = () => {
    const { data, loading } = useFetch('https://texnoark.ilyosbekdev.uz/products/search');
    const [likedProducts, setLikedProducts] = useState<ProductData[]>([]);
    const [cartProducts, setCartProducts] = useState<ProductData[]>([]);
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const savedLikes = sessionStorage.getItem('likedProducts');
            if (savedLikes) {
                try {
                    const parsedLikes = JSON.parse(savedLikes);
                    setLikedProducts(Array.isArray(parsedLikes) ? parsedLikes : []);
                } catch (error) {
                    console.error('Error parsing liked products:', error);
                    setLikedProducts([]);
                }
            }
        }
        const savedCart = sessionStorage.getItem('cartProducts');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                setCartProducts(Array.isArray(parsedCart) ? parsedCart : []);
            } catch (error) {
                console.error('Error parsing cart products:', error);
                setCartProducts([]);
            }
        }
    }, []);

    const toggleLike = async (item: ProductData) => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
            return;
        }
        const isLiked = likedProducts.some(product => product.id === item.id);
        const updatedLikes = isLiked
            ? likedProducts.filter(product => product.id !== item.id)
            : [...likedProducts, item];
        setLikedProducts(updatedLikes);
        sessionStorage.setItem('likedProducts', JSON.stringify(updatedLikes));

        try {
            const response = await fetch('https://texnoark.ilyosbekdev.uz/likes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                body: JSON.stringify({ product_id: item.id, liked: !isLiked }),
            });

            if (!response.ok) throw new Error('Failed to update like');
        } catch (error) {
            console.error('Error updating like:', error);
        }
    };

    const handleCart = async (item: ProductData) => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
            return;
        }
        const isInCart = cartProducts.some(product => product.id === item.id);
        const updatedCart = isInCart
            ? cartProducts.filter(product => product.id !== item.id)
            : [...cartProducts, item];
        setCartProducts(updatedCart);
        sessionStorage.setItem('cartProducts', JSON.stringify(updatedCart));

        try {
            const res = await fetch('https://texnoark.ilyosbekdev.uz/carts/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                body: JSON.stringify({ product_id: item.id }),
            });

            if (!res.ok) throw new Error('Failed to update cart');
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    return (
        <div>
            <h2 className="font-bold mt-10 text-[22px] px-5 mb-5 xl:px-20">Most popular product</h2>
            <div className="grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 xl:px-20">
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="product-card relative">
                            <div className="h-[45vh] bg-gray-300 animate-pulse rounded-lg"></div>
                            <p className="text-sm bg-gray-300 h-4 mt-2 animate-pulse rounded"></p>
                            <div className="flex justify-between mt-2">
                                <div className="bg-gray-300 h-4 w-20 animate-pulse rounded"></div>
                                <div className="bg-gray-300 h-8 w-12 animate-pulse rounded"></div>
                            </div>
                        </div>
                    ))
                    : data?.products?.map((item: ProductData) => (
                        <div key={item.id} className="product-card relative">
                            <div>
                                <div className="relative h-[45vh] bg-slate-200 flex justify-center items-center object-contain rounded-lg">
                                    <button
                                        onClick={() => toggleLike(item)}
                                        className="absolute top-5 right-5 text-2xl"
                                    >
                                        {likedProducts?.some(product => product.id === item.id)
                                            ? <FcLike />
                                            : <FcLikePlaceholder />}
                                    </button>
                                    <Link href={`/products/${item.id}`}>
                                        <img src={item.images?.[0]} alt="card" className="w-full" />
                                    </Link>
                                </div>
                                <p className="text-sm font-bold sm:text-xl mt-2">{item.name}</p>
                                <div className="xl:flex xl:items-center xl:justify-between">
                                    <p className="text-md font-bold sm:text-[18px]">${item.price}</p>
                                    {cartProducts.some(product => product.id === item.id) ?
                                        <button
                                            onClick={() => handleCart}
                                            className="flex items-center gap-1 bg-white px-5 py-1 text-black border border-black lg:px-5 rounded-md">
                                            <Link href='/cart'>
                                                <span>Added</span>
                                            </Link>
                                        </button> :
                                        <button
                                            onClick={() => handleCart(item)}
                                            className="flex items-center gap-1 bg-blue-800 px-5 py-2 text-white lg:px-10 rounded-md">
                                            <CgShoppingBag />
                                        </button>}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
