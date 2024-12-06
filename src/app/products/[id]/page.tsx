"use client"
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LiaStoreAltSolid } from "react-icons/lia";
import { ProductData } from '@/types/page';
import { PiTruckDuotone, PiClock } from "react-icons/pi";
import Products from '@/components/home/products'
import Ellipse from '@/assets/Ellipse.png'
import Frame from '@/assets/Frame.png'

interface CommentType {
  comment: string,
  product_id: number
}

const Page = () => {
  const { id } = useParams();
  const router = useRouter()
  const [data, setData] = useState<any>(null);
  const [cartProducts, setCartProducts] = useState<ProductData[]>([]);
  const [comment, setComment] = useState<string>('');
  const [user, setUser] = useState<CommentType[]>([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [isCart, setIsCart] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/products/${id}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/comment/product/${id}`);
        const data = await response.json();
        setUser(data?.data?.comment || []);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [id]);
  const handleSeeMore = () => {
    setShowAllComments(!showAllComments);
  };
  const handleComment = async () => {
    if (!comment.trim()) {
      console.error("Comment cannot be empty");
      return;
    }

    try {
      const res = await fetch('https://texnoark.ilyosbekdev.uz/comment/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          product_id: data?.data?.product?.id,
          comment: comment,
        }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Failed to post comment');
      }
      console.log("Comment successfully submitted");
      setComment('');
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handleAddToCart = async (item: ProductData) => {
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
      setIsCart(true)
    } catch (error) {
      console.error("error");

    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className='px-5 xl:px-24'>
        <h1 className='py-5 text-xl font-bold xl:text-4xl'>{data?.data?.product?.name}</h1>
        <div className='flex'>
          <div className='flex gap-2 w-full xl:w-[80%]'>
            <div className='hidden w-[20%] xl:flex xl:flex-col justify-around gap-1'>
              {data?.data?.product?.images?.length > 1 ? (
                <Image src={data?.data?.product?.images[1]} width={300} height={300} alt="product-main"/>
              ) : (
                <Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" />
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <Image src={data?.data?.product?.images[3]} width={300} height={300} alt="product-main" />
              ) : (
                <Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" />
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <Image src={data?.data?.product?.images[2]} width={100} height={100} alt="product-main" />
              ) : (
                <Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" />
              )}
              <Image src={data?.data?.product?.images?.[0]} width={300} height={300} alt="product-main" />
            </div>
            <span className='w-[80%] flex flex-col justify-center items-center md:w-full md:h-full xl:w-full bg-slate-300 xl:bg-white'><Image src={data?.data?.product?.images?.[0]} width={300} height={300} alt="product-main" className="xl:w-full w-full h-full" /></span>
            <div className='w-[20%] sm:w-[20%] md:w-[50%] lg:w-[50%] flex flex-col gap-1 xl:hidden'>
              {data?.data?.product?.images?.length > 1 ? (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[1]} width={300} height={300} alt="product-main" className='md:w-[50%]' /></span>
              ) : (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" className='md:w-[50%]' /></span>
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[3]} width={300} height={300} alt="product-main" className='md:w-[50%] h-full' /></span>
              ) : (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" className='md:w-[50%]' /></span>
              )}
              {data?.data?.product?.images?.length > 1 ? (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[2]} width={300} height={300} alt="product-main" className='md:w-[50%] h-full' /></span>
              ) : (
                <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" className='md:w-[50%]' /></span>
              )}
              <span className='bg-slate-300 flex flex-col justify-center items-center'><Image src={data?.data?.product?.images[0]} width={300} height={300} alt="product-main" className='md:w-[50%]' /></span>
            </div>
            <div className='hidden lg:block xl:hidden w-full'>
              <div>
                <div>
                  <p className='text-xl font-semibold'>Rangini tanlash</p>
                  <div className='flex gap-2 mt-5'>
                    <div className='w-[34px] h-[34px] bg-red-800 rounded-md'></div>
                    <div className='w-[34px] h-[34px] bg-black rounded-md'></div>
                    <div className='w-[34px] h-[34px] bg-emerald-400 rounded-md'></div>
                    <div className='w-[34px] h-[34px] bg-slate-400 rounded-md'></div>
                    <div className='w-[34px] h-[34px] bg-sky-300 rounded-md'></div>
                  </div>
                </div>
                <div>
                  <div className='flex gap-2 items-end mt-5 sm:mt-0'>
                    <span className='text-xl flex'>Narxi</span>
                    <span className='text-3xl font-bold'>{data?.data?.product?.price}</span>
                    <span className='text-xl'>UZS</span>
                  </div>
                  <button className='my-2 bg-slate-200 py-2 px-4 rounded-md'> Bo'lib to'lash 6 oy uchun {Math.floor(Number(data?.data?.product?.price) / 6)}$ dan</button>
                </div>
              </div>
              <div >
                <div className='flex flex-col gap-2'>
                  <button className='bg-blue-700 text-white rounded-lg  py-2'>Hoziroq sotib olish</button>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleAddToCart(data?.data?.product)}
                      className='bg-blue-700 text-white rounded-lg w-[50%] py-2'>
                      {isCart ? "Mahsulot qo'shildi" : "Savatga qo'shish"}
                    </button>
                    <button className='border border-blue-700 rounded-lg w-[50%]'>Bo‘lib to‘lang</button>
                  </div>
                </div>
                <div className='md:text-xl'>
                  <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
                  <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
                  <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden xl:block xl:mt-20'>
            <div className='flex gap-2 items-end'>
              <span className='text-xl flex'>Narxi</span>
              <span className='text-3xl font-bold'>{data?.data?.product?.price}</span>
              <span className='text-xl'>UZS</span>
            </div>
            <div className='bg-slate-200 flex justify-center py-5 rounded-lg mt-10'>
              <button> {Math.floor(Number(data?.data?.product?.price) / 12)}$ dan 12 oyga muddatli to`lov</button>
            </div>
            <div className='flex items-center gap-2 mt-10'>
              <button
                onClick={() => handleAddToCart(data?.data?.product)}
                className='w-[50%] bg-blue-700 text-white py-5 px-4 rounded-md'>
                {isCart ? "Mahsulot qo'shildi" : "Savatga qo'shish"}
              </button>
              <button className='w-[50%] border border-black py-5 rounded-lg'>Xarid qilish</button>
            </div>
            <div className='mt-10 text-xl flex flex-col gap-5'>
              <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
              <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
              <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
        <div className='mt-10 lg:hidden'>
          <div className='sm:flex justify-evenly'>
            <div>
              <p className='text-xl font-semibold'>Rangini tanlash</p>
              <div className='flex gap-2 mt-5'>
                <div className='w-[34px] h-[34px] bg-red-800 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-black rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-emerald-400 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-slate-400 rounded-md'></div>
                <div className='w-[34px] h-[34px] bg-sky-300 rounded-md'></div>
              </div>
            </div>
            <div>
              <div className='flex gap-2 items-end mt-5 sm:mt-0'>
                <span className='text-xl flex'>Narxi</span>
                <span className='text-3xl font-bold'>{data?.data?.product?.price}</span>
                <span className='text-xl'>UZS</span>
              </div>
              <button className='my-2 bg-slate-200 py-2 px-4 rounded-md'> Bo'lib to'lash 6 oy uchun {Math.floor(Number(data?.data?.product?.price) / 6)}$ dan</button>
            </div>
          </div>
          <div className='md:flex items-center gap-5'>
            <div className='flex flex-col gap-2 w-[50%]'>
              <button className='bg-blue-700 text-white rounded-lg  py-2'>Hoziroq sotib olish</button>
              <div className='flex gap-2'>
                <button
                  onClick={() => handleAddToCart(data?.data?.product)}
                  className='bg-blue-700 text-white rounded-lg w-[50%] py-2'>
                  {isCart ? "Mahsulot qo'shildi" : "Savatga qo'shish"}
                </button>
                <button className='border border-blue-700 rounded-lg w-[50%]'>Bo‘lib to‘lang</button>
              </div>
            </div>
            <div className='md:text-xl'>
              <p className='flex items-center gap-2'><PiTruckDuotone />Yetkazib berish O’zbekiston bo’ylab</p>
              <p className='flex items-center gap-2'><LiaStoreAltSolid />Do’kondi o’zidan olib ketishingiz mumkin</p>
              <p className='flex items-center gap-2'><PiClock />Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
        <div>
          <div className='sm:grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 items-end sm:mt-10 mt-5'>
            {user.length > 0 ? (
              (showAllComments ? user : user.slice(0, 4)).map((comment, index) => (
                <div key={index} className="sm:my-0 p-2 border border-gray-300 rounded-lg my-2">
                  <div className='flex gap-1'>
                    <Image src={Ellipse} width={100} height={100} alt='Ellipse' />
                    <div className='flex flex-col gap-2 mt-2'>
                      <span>Evgeniy Viktorovich</span>
                      <Image src={Frame} width={80} height={50} alt='Frame' />
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
          <div className='flex justify-center mt-3'>
            <button
              className='bg-blue-800 text-white px-5 py-2 rounded-md'
              onClick={handleSeeMore}
            >
              {showAllComments ? 'See less' : 'See more'}
            </button>
          </div>
          <div className='flex flex-col gap-4 my-5 sm:my-3 lg:items-center'>
            <textarea
              value={comment}
              onChange={handleChange}
              placeholder='Mahsulot haqida fikringiz'
              className='w-full sm:w-[50%] h-[100px] resize-none border border-black rounded-lg p-3 outline-none'>
            </textarea>
            <button
              onClick={handleComment}
              className='w-full sm:w-[50%] bg-blue-800 hover:bg-blue-500 text-white py-2 rounded-md'>Yuborish</button>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Page;