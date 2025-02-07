// "use client";

// import { useState, useEffect } from "react";
// import React from "react";
// import Image from 'next/image'
// import Link from 'next/link'
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProducts } from "@/sanity/lib/query";
// import { singleProductQuery } from "@/sanity/lib/query";

// type ProductDataType = {
//   _id: string;
//   status: string;
//   productName: string;
//   category: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };
// // // import shoeImage from "../../../public/images/shoe_3.png"
// // // import shoppingIcon from "../../../public/images/shopping-icon.png"

// const ProductDetail = ({params}:{params :ProductDataType }) => {
//   const [products, setProducts] = useState<ProductDataType[]>([])
//   console.log(params._id);

// //  const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const fetchedProducts: ProductDataType[] = await sanityFetch({
//             query: singleProductQuery,
//             params: { id: params._id }
//           });
//           console.log(fetchedProducts);

//           setProducts(fetchedProducts); // Update state with fetched data

//         } catch (err) {
//           console.error("Error fetching products:", err);
//           // setError("Failed to fetch products."); // Handle error

//         }
//       };

//       fetchProducts(); // Call the async function
//     }, []); // Empty dependency array ensures this runs only once

// return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex gap-16 justify-center bg shadow-lg  overflow-hidden w-[1000px] h-[460px] mb-[80px]">
//         {/* Left Image Div */}
//         <div className="w-[600px]  p-4 bg-[#F5F5F5]">
//         <Image src={params.imageUrl} alt='shoe image'></Image>
//         </div>

//         {/* Right Content Div */}
//         <div className="w-[370px] p-6 flex flex-col justify-between bg-re-400">
//           <div>
//             {/* Heading */}
//             <h1 className="text-3xl font-medium text-[#111111] mb-4">
//             {params.productName}
//             </h1>

//             {/* Paragraph */}
//             <p className="text-[#111111] text-sm leading-relaxed mb-6">
//             {params.description}
//             </p>

//             {/* Another Heading */}
//             <h2 className="text-lg font-semibold text-[#111111] mb-4">
//             {params.price}
//             </h2>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="bg-[#111111] text-white flex items-cente justify-center gap-3 py-2  w-[160px]  rounded-full hover:bg-slate-400 transition">
//           <Image src="" width={25} height={25} alt='shopping icon'></Image>

//           <Link href="/product-cart" > Add to Cart </Link>

//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

// ///////////////////////////////////// clude.ai code fail ////////////////////////////////

// // app/product-store/[id]/page.tsx

// // import { useState, useEffect } from "react";
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { sanityFetch } from "@/sanity/lib/fetch";
// // import { allProducts } from "@/sanity/lib/query";
// // import { useParams } from 'next/navigation';

// // type ProductDataType = {
// //   _id: string;
// //   status: string;
// //   productName: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   imageUrl: string;
// // };

// // const ProductDetail = () => {
// //   const params = useParams();
// //   const [product, setProduct] = useState<ProductDataType | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const fetchedProducts: ProductDataType[] = await sanityFetch({
// //           query: allProducts,
// //         });

// //         // Find the specific product using the ID from URL params
// //         const foundProduct = fetchedProducts.find(p => p._id === params.id);

// //         if (foundProduct) {
// //           setProduct(foundProduct);
// //         } else {
// //           setError("Product not found");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching product:", err);
// //         setError("Failed to fetch product details");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [params.id]);

// //   if (isLoading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
// //   if (error) return <div className="flex justify-center items-center min-h-screen">Error: {error}</div>;
// //   if (!product) return <div className="flex justify-center items-center min-h-screen">Product not found</div>;

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="flex gap-16 justify-center shadow-lg overflow-hidden w-[1000px] h-[460px] mb-[80px]">
// //         {/* Left Image Div */}
// //         <div className="w-[600px] p-4 bg-[#F5F5F5]">
// //           <Image
// //             src={product.imageUrl}
// //             alt={product.productName}
// //             width={500}
// //             height={400}
// //             className="object-contain w-full h-full"
// //           />
// //         </div>

// //         {/* Right Content Div */}
// //         <div className="w-[370px] p-6 flex flex-col justify-between">
// //           <div>
// //             <h1 className="text-3xl font-medium text-[#111111] mb-4">
// //               {product.productName}
// //             </h1>

// //             <p className="text-[#111111] text-sm leading-relaxed mb-6">
// //               {product.description}
// //             </p>

// //             <h2 className="text-lg font-semibold text-[#111111] mb-4">
// //               ${product.price}
// //             </h2>

// //             <p className="text-sm text-red-800 mb-4">
// //               {product.status}
// //             </p>

// //             <p className="text-sm text-[#757575] mb-4">
// //               {product.category}
// //             </p>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <button className="bg-[#111111] text-white flex items-center justify-center gap-3 py-2 w-[160px] rounded-full hover:bg-slate-400 transition">
// //             <Link href="/product-cart">Add to Cart</Link>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;

// // ///////////////////////////////////testing 01 fail ////////////////////

// // import { sanityFetch } from "@/sanity/lib/fetch";
// // import { singleProductQuery } from "@/sanity/lib/query";
// // import Image from "next/image";
// // import Link from "next/link";

// // Server function to fetch product data
// // async function getProductData(_id: string) {
// //   try {
// //     const product = await sanityFetch({
// //       query: singleProductQuery,
// //       params: { _id },
// //     });
// //     return product || null;
// //   } catch (err) {
// //     console.error("Error fetching product:", err);
// //     throw new Error("Failed to fetch product details");
// //   }
// // }

// // export default async function ProductDetailPage({
// //   params,
// // }: {
// //   params: { id: string };
// // }) {
// //   const product = await getProductData(params.id);

// //   if (!product) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <p>Product not found</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="flex gap-16 justify-center shadow-lg overflow-hidden w-[1000px] h-[460px] mb-[80px]">
// //         {/* Left Image Div */}
// //         <div className="w-[600px] p-4 bg-[#F5F5F5]">
// //           <Image
// //             src={product.imageUrl}
// //             alt={product.productName}
// //             width={500}
// //             height={400}
// //             className="object-contain w-full h-full"
// //           />
// //         </div>

// //         {/* Right Content Div */}
// //         <div className="w-[370px] p-6 flex flex-col justify-between">
// //           <div>
// //             <h1 className="text-3xl font-medium text-[#111111] mb-4">
// //               {product.productName}
// //             </h1>
// //             <p className="text-[#111111] text-sm leading-relaxed mb-6">
// //               {product.description}
// //             </p>
// //             <h2 className="text-lg font-semibold text-[#111111] mb-4">
// //               ₹ {product.price}
// //             </h2>
// //             <p className="text-sm text-red-800 mb-4">{product.status}</p>
// //             <p className="text-sm text-[#757575] mb-4">{product.category}</p>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <button className="bg-[#111111] text-white flex items-center justify-center gap-3 py-2 w-[160px] rounded-full hover:bg-slate-400 transition">
// //             <Link href="/product-cart">Add to Cart</Link>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Generates static paths for all products
// // export async function generateStaticParams() {
// //   const products = await sanityFetch({
// //     query: `*[_type == "product"]{_id}`,
// //   });

// //   return products.map((product: { _id: string }) => ({
// //     id: product._id,
// //   }));
// // }

// // /////////////////////////////// tesinf /////////////////

// // app/product-store/[id]/page.tsx
// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { sanityFetch } from "@/sanity/lib/fetch";
// // import { allProducts } from "@/sanity/lib/query";
// // import { useParams } from 'next/navigation';

// // type ProductDataType = {
// //   _id: string;
// //   status: string;
// //   productName: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   imageUrl: string;
// // };

// // const ProductDetail = () => {
// //   const params = useParams();
// //   const [product, setProduct] = useState<ProductDataType | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const fetchedProducts: ProductDataType[] = await sanityFetch({
// //           query: allProducts,
// //         });

// //         // Find the specific product using the ID from URL params
// //         const foundProduct = fetchedProducts.find(p => p._id === params.id);
// //         if (foundProduct) {
// //           setProduct(foundProduct);
// //         }
// //       } catch (err) {
// //         console.error("Error fetching product:", err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [params.id]);

// //   if (isLoading) {
// //     return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
// //   }

// //   if (!product) {
// //     return <div className="flex justify-center items-center min-h-screen">Product not found</div>;
// //   }

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="flex gap-16 justify-center shadow-lg overflow-hidden w-[1000px] h-[460px] mb-[80px]">
// //         {/* Left Image Div */}
// //         <div className="w-[600px] p-4 bg-[#F5F5F5]">
// //           <Image
// //             src={product.imageUrl}
// //             alt={product.productName}
// //             width={500}
// //             height={400}
// //             className="object-contain w-full h-full"
// //           />
// //         </div>

// //         {/* Right Content Div */}
// //         <div className="w-[370px] p-6 flex flex-col justify-between">
// //           <div>
// //             {/* Heading */}
// //             <h1 className="text-3xl font-medium text-[#111111] mb-4">
// //               {product.productName}
// //             </h1>

// //             {/* Paragraph */}
// //             <p className="text-[#111111] text-sm leading-relaxed mb-6">
// //               {product.description}
// //             </p>

// //             {/* Another Heading */}
// //             <h2 className="text-lg font-semibold text-[#111111] mb-4">
// //               ${product.price}
// //             </h2>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <button className="bg-[#111111] text-white flex items-center justify-center gap-3 py-2 w-[160px] rounded-full hover:bg-slate-400 transition">
// //             <Link href="/product-cart">Add to Cart</Link>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;

// //////////////////////////////// code past and testing fail ///////////////////

// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";

// // // Define the type for a product
// // type Product = {
// //   productName: string;
// //   price: number;
// //   status: string;
// //   category: string;
// //   colors: string[];
// //   imageUrl: string;
// //   description: string;
// // };

// // // Fetch product data by slug
// // const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
// //   const query = `
// //     *[_type == "product" && slug.current == $slug][0]{
// //       productName,
// //       price,
// //       status,
// //       category,
// //       colors,
// //       "imageUrl": image.asset->url,
// //       description
// //     }
// //   `;

// //   const product = await client.fetch(query, { slug });
// //   return product || null;
// // };

// // // Generate dynamic params for the product pages (optional, for static generation)
// // export async function generateStaticParams() {
// //   const query = `*[_type == "product"]{ "slug": slug.current }`;
// //   const slugs = await client.fetch(query);
// //   return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
// // }

// // const ProductPage = async ({ params }: { params: { slug: string } }) => {
// //   const { slug } = params;

// //   const product = await fetchProductBySlug(slug);

// //   if (!product) {
// //     return <div>Product not found.</div>;
// //   }

// //   return (
// //     <div className="flex flex-col md:flex-row gap-6 p-4">
// //       {/* Left side: Image */}
// //       <div className="w-full md:w-1/2">
// //         <Image
// //           src={product.imageUrl}
// //           alt={product.productName}
// //           width={400}
// //           height={400}
// //           className="w-full h-80 object-cover"
// //         />
// //       </div>

// //       {/* Right side: Product details */}
// //       <div className="w-full md:w-1/2">
// //         <h2 className="text-3xl font-bold">{product.productName}</h2>
// //         <p className="text-lg text-gray-600">{product.category}</p>
// //         <p className="text-lg text-gray-800">{product.description}</p>
// //         <p className="text-xl font-semibold text-green-600">₹ {product.price}</p>
// //         <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;

// /////////////////////// testing again fail ///////////////////////////////
// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";

// // // Define the type for a product
// // type Product = {
// //   productName: string;
// //   price: number;
// //   status: string;
// //   category: string;
// //   colors: string[];
// //   imageUrl: string;
// //   description: string;
// // };

// // // Fetch product data by slug
// // const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
// //   const query = `
// //     *[_type == "product" && slug.current == $slug][0]{
// //       productName,
// //       price,
// //       status,
// //       category,
// //       colors,
// //       "imageUrl": image.asset->url,
// //       description
// //     }
// //   `;

// //   const product = await client.fetch(query, { slug });
// //   return product || null;
// // };

// // // Generate dynamic params for the product pages (optional, for static generation)
// // export async function generateStaticParams() {
// //   const query = `*[_type == "product"]{ "slug": slug.current }`;
// //   const slugs = await client.fetch(query);
// //   return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
// // }

// // const ProductPage = async ({ params }: { params: { slug: string } }) => {
// //   const { slug } = params;

// //   const product = await fetchProductBySlug(slug);

// //   if (!product) {
// //     return <div>Product not found.</div>;
// //   }

// //   return (
// //     <div className="flex flex-col md:flex-row gap-6 p-4">
// //       {/* Left side: Image */}
// //       <div className="w-full md:w-1/2">
// //         <Image
// //           src={product.imageUrl}
// //           alt={product.productName}
// //           width={400}
// //           height={400}
// //           className="w-full h-80 object-cover"
// //         />
// //       </div>

// //       {/* Right side: Product details */}
// //       <div className="w-full md:w-1/2">
// //         <h2 className="text-3xl font-bold">{product.productName}</h2>
// //         <p className="text-lg text-gray-600">{product.category}</p>
// //         <p className="text-lg text-gray-800">{product.description}</p>
// //         <p className="text-xl font-semibold text-green-600">₹ {product.price}</p>
// //         <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;

"use client";

// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProducts } from "@/sanity/lib/query";
// import { singleProductQuery } from "@/sanity/lib/query";

// type ProductDataType = {
//   _id: string;
//   status: string;
//   productName: string;
//   category: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default function ExampleClientComponent() {
//   const params = useParams<{ slug: string }>();
//   const [products, setProducts] = useState<ProductDataType | null>(null);

//   //  const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: ProductDataType | null = await sanityFetch({
//           query: singleProductQuery,
//           params: { id: params.slug },
//         });

//         setProducts(fetchedProducts); // Update state with fetched data
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         // setError("Failed to fetch products."); // Handle error
//       }
//     };

//     fetchProducts(); // Call the async function
//   }, []); // Empty dependency array ensures this runs only once

//   // Route -> /shop/[tag]/[item]
//   // URL -> /shop/shoes/nike-air-max-97
//   // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
//   console.log(params.slug);

//   return (

//     <>
//     <div className="flex flex-col md:flex-row gap-6 p-4">
//      {/* Left side: Image */}
//        <div className="w-full md:w-1/2">
//         <Image
//           src={products.imageUrl}
//           alt={products.productName}
//           width={400}
//            height={400}
//            className="w-full h-80 object-cover"
//          />
//        </div>

//        {/* Right side: Product details */}
//        <div className="w-full md:w-1/2">
//          <h2 className="text-3xl font-bold">{products.productName}</h2>
//          <p className="text-lg text-gray-600">{products.category}</p>
//          <p className="text-lg text-gray-800">{products.description}</p>
//          <p className="text-xl font-semibold text-green-600">₹ {products.price}</p>
//          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
//           Add to Cart
//          </button>
//        </div>
//      </div>







//     </>






























    // <div>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <pre>{JSON.stringify(products)}</pre>
    //   {products && <div>{products.category}</div>}
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    // </div>



  // );
// }


//////////////////////////////////////////////////// this is the final code and runs perfectly //////////////////////

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { singleProductQuery } from "@/sanity/lib/query";

type ProductDataType = {
  _id: string;
  status: string;
  productName: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ExampleClientComponent() {
  const params = useParams<{ slug: string }>();
  const [products, setProducts] = useState<ProductDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: ProductDataType | null = await sanityFetch({
          query: singleProductQuery,
          params: { id: params.slug },
        });

        setProducts(fetchedProducts); // Update state with fetched data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.slug]); // Include params.slug in the dependency array

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Fallback if products is null
  if (!products) {
    return <p>No product found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={products.imageUrl}
          alt={products.productName}
          width={400}
          height={400}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Right side: Product details */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold">{products.productName}</h2>
        <p className="text-lg text-gray-600">{products.category}</p>
        <p className="text-lg text-gray-800">{products.description}</p>
        <p className="text-xl font-semibold text-green-600">₹ {products.price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

