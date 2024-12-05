This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- <div className="flex items-center gap-2">
                <button
                  className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                  onClick={() => handleQuantityChange(product.price, false)}
                >
                  -
                </button>
                <span>{quantities[product.price]}</span>
                <button
                  className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                  onClick={() => handleQuantityChange(product.brand_id, true)}
                >
                  +
                </button>
              </div> -->


<!-- {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-sans mb-4">Are you sure you want to delete this product?</h2>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                No
              </button>
              <button
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  if (productToDelete) {
                    deleteProduct(productToDelete.product_id.toString());
                  }
                  closeModal();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )} -->


      <!-- <button
                    className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                    onClick={() => openModal(product)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button> -->


                  <!-- const openModal = (product: Product) => {
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
  } -->

  <!-- const deleteProduct = async (cardId: string) => {
    const token = localStorage.getItem('access_token');
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
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }; -->


  <!-- <div className="mt-5 bg-gray-100 p-10 rounded-md shadow-md w-full max-w-sm ml-auto">
          <h2 className="font-bold text-xl mb-2">Order Summary</h2>
          <p className="text-gray-600">Delivery: <strong>Free</strong></p>
          <p className="text-lg font-bold">Total: {total.toLocaleString()} uzs</p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md mt-3">Buy Now</button>
        </div> -->


        <!-- const [total, setTotal] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null); -->

  <!-- const handleQuantityChange = (id: number, increment: boolean) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] ?? 1;
      const newQuantities = { ...prev };
      newQuantities[id] = increment ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
      return newQuantities;
    });
  }; -->
  <!-- const [quantities, setQuantities] = useState<Record<number, number>>({}); -->
<!-- 
   useEffect(() => {
    const newTotal = basketProducts.reduce((acc, product) => {
      const quantity = quantities[product.brand_id] ?? 1;
      return acc + Number(product.product_id?.price || 0) * quantity;
    }, 0);
    setTotal(newTotal);
  }, [quantities, basketProducts]); -->