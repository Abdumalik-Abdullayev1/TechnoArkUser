'use client'
import { ProductData } from "@/types/page"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc"
import { FaTrashCan } from "react-icons/fa6";

interface Product extends ProductData {
  product_id: ProductData
}

const Page = () => {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [total, setTotal] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [liked, setLiked] = useState(false)

  const getCart = async () => {
    const user_id = sessionStorage.getItem('userId');
    const res = await fetch(`https://texnoark.ilyosbekdev.uz/carts/user/${user_id}`);
    let data = await res.json();
    console.log(data.data?.carts[0], "cart page")
    setBasketProducts(data.data?.carts || []);
  }
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient) {
      getCart();
    }
  }, [isClient]);
  useEffect(() => {
    const newTotal = basketProducts.reduce((acc, product) => {
      const quantity = quantities[product.id] ?? 1;
      return acc + Number(product.product_id?.price || 1) * quantity;
    }, 0);
    setTotal(newTotal);
  }, [quantities, basketProducts]);

  const handleQuantityChange = (id: number, increment: boolean) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] ?? 1;
      const newQuantities = { ...prev };
      newQuantities[id] = increment ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
      return newQuantities;
    });
  };

  const deleteProduct = async (cardId: string) => {
    const token = sessionStorage.getItem('access_token');
    try {
      const response = await fetch(`https://texnoark.ilyosbekdev.uz/carts/delete/${cardId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log('Product deleted successfully:', data);
      getCart();
      const cartProducts = JSON.parse(sessionStorage.getItem('cartProducts') || '[]');
      const updatedCart = cartProducts.filter((product: Product) => JSON.stringify(product.id) == cardId);
      sessionStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const toggleLike = () => {
    setLiked(prevLiked => !prevLiked)
  }

  const openModal = (product: Product) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  if (!basketProducts.length) {
    return (
      <div>
        <div className="flex flex-col items-center gap-3 lg:gap-4">
          <h1 className="text-[20px] font-bold md:text-[25px]">Buy products now</h1>
          <p className="md:text-[15px]">Go to the main page and buy products</p>
          <Link href={'/'} className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 xl:px-20">
      <h1 className="text-[20px] lg:text-[30px] font-bold my-5">Your Basket:</h1>
      <div className="mt-5 sm:flex justify-between items-start">
        <div>
          {basketProducts.map((product) => (
            <div key={product.id} className="flex gap-4 my-4">
              <div>
                <Image
                  src={product?.product_id?.images?.[0]}
                  alt={product.name || 'Product Image'}
                  width={150}
                  height={100}
                  className="rounded-md bg-slate-200"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className='md:flex items-center gap-16'>
                  <h2 className="font-bold text-xl lg:text-3xl">{product.product_id?.name}</h2>
                  <p className="text-gray-600 lg:text-2xl">{Number(product.product_id?.price).toLocaleString()} uzs</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={toggleLike} className="text-3xl">
                    {liked ? <FcLike /> : <FcLikePlaceholder />}
                  </button>
                  <button
                    className="text-2xl"
                    onClick={() => openModal(product)}>
                    <FaTrashCan />
                  </button>
                  <button
                    className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(product.id, false)}> - </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(product.id, true)}> + </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-gray-200 p-3 rounded-md shadow-md max-w-lg sm:w-[40%] sm:mt-0 md:max-w-sm">
          <h2 className="font-bold text-xl">Order Summary</h2>
          <p className="text-gray-600">Delivery: <strong>Free</strong></p>
          <p className="text-lg font-bold">Total: {total.toLocaleString()} uzs</p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md mt-3">Buy Now</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-sans mb-4">Are you sure to delete this product?</h2>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black px-10 py-2 rounded-md"
                onClick={closeModal}> No </button>
              <button
                className="bg-red-600 hover:bg-red-500 text-white px-10 py-2 rounded-md"
                onClick={() => {
                  if (productToDelete) {
                    deleteProduct(JSON.stringify(productToDelete.id));
                  }
                  closeModal();
                }}> Yes </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center gap-3 lg:gap-4">
        <Link
          href={"/"}
          className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
        >
          back to home
        </Link>
      </div>
    </div>
  );
};


export default Page
