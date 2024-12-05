"use client"
import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import useFetch from '@/app/hooks/get-data';
import { useEffect, useState } from 'react';
import { ProductData } from '@/types/page';
import { useRouter } from 'next/navigation';

const Product = () => {
    const { data } = useFetch('https://texnoark.ilyosbekdev.uz/products/search');
    const [likedProducts, setLikedProducts] = useState<ProductData[]>([]);
    const [cartProducts, setCartProducts] = useState<ProductData[]>([]);
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const savedLikes = localStorage.getItem('likedProducts');
            if (savedLikes) {
                setLikedProducts(JSON.parse(savedLikes));
            }
        }
        const savedCart = sessionStorage.getItem('cartProducts');
        if (savedCart) {
            setCartProducts(JSON.parse(savedCart));
        }
    }, []);

    const toggleLike = async (item: ProductData) => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login')
            return;
        }
        let updatedLikes: ProductData[];
        const isLiked = likedProducts.some(product => product.id === item.id);
        if (isLiked) {
            updatedLikes = likedProducts.filter(product => product.id !== item.id);
        } else {
            updatedLikes = [...likedProducts, item];
        }
        setLikedProducts(updatedLikes);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
        try {
            const response = await fetch('https://texnoark.ilyosbekdev.uz/likes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    product_id: item.id,
                    liked: !isLiked,
                }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message || 'Failed to update like');
            }
            const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
            if (!likedProducts.includes(item.id)) {
                likedProducts.push(item.id);
                localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
            }
            console.log('Like status updated successfully');
        } catch (error) {
            console.error('Error updating like:', error);
        }
    };

    const handleCart = async (item: ProductData) => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login')
            return;
        }
        let updatedCart: ProductData[];
        const isInCart = cartProducts.some(product => product.id === item.id);

        if (isInCart) {
            updatedCart = cartProducts.filter(product => product.id !== item.id);
        } else {
            updatedCart = [...cartProducts, item];
        }
        setCartProducts(updatedCart);
        sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts))
        try {
            const res = await fetch('https://texnoark.ilyosbekdev.uz/carts/create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    product_id: item.id,
                }),
            })
            if (!res.ok) {
                const { message } = await res.json();
                throw new Error(message || 'Failed to update like');
            }
            const cartProducts = JSON.parse(sessionStorage.getItem('cartProducts') || '[]');
            if (!cartProducts.includes(item)) {
                cartProducts.push(item);
                sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
            }

        } catch (error) {
            console.error("error");

        }

    }

    return (
        <div>
            <h2 className="font-bold mt-10 text-[22px] px-5 mb-5 xl:px-20">Most popular product</h2>
            <div className="grid grid-cols-2 gap-2 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 xl:px-20">
                {data?.products?.slice(0, 4).map((item: ProductData) => (
                    <div key={item?.id} className="product-card relative">
                        <div>
                            <div className="relative h-[45vh] bg-slate-200 flex justify-center items-center object-contain rounded-lg">
                                <button
                                    onClick={() => toggleLike(item)}
                                    className="absolute top-5 right-5 text-2xl"
                                >
                                    {likedProducts.some(product => product.id === item.id) ? <FcLike /> : <FcLikePlaceholder />}
                                </button>
                                <Link href={`/products/${item?.id}`}><img src={item?.images?.[0]} alt="card" className="w-full" /></Link>
                                <span className="absolute top-2 right-2 sm:text-[22px]">{ }</span>
                            </div>
                            <p className="text-sm font-bold sm:text-xl mt-2">{item?.name}</p>
                            <div className="xl:flex xl:items-center xl:justify-between">
                                <div className="flex justify-between pr-5 items-center py-3 xl:flex-col xl:items-start xl:w-full">
                                    <p className="text-md font-bold sm:text-[18px]">${item?.price}</p>
                                </div>
                                <div className="flex items-center gap-1 h-full">
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
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center my-5 xl:hidden">
                <button className="px-10 py-2 text-blue-700 bg-[rgb(230,238,246)] rounded-md">Ko’proq</button>
            </div>
        </div >
    );
};

export default Product;
