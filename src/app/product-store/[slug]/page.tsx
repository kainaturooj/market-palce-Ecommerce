"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { singleProductQuery } from "@/sanity/lib/query";
import Link from "next/link";
import shoppingIcon from "../../../../public/images/shopping-icon.png";
import { addToCart, setCartCount, getCartCount } from "@/app/actions/actions";

type ProductDataType = {
  _id: string;
  status: string;
  productName: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  inventory: number;
};

export default function ExampleClientComponent() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartCount, setCartCountState] = useState<number>(getCartCount());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: ProductDataType | null = await sanityFetch({
          query: singleProductQuery,
          params: { id: params.slug },
        });
        setProduct(fetchedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  const handleAddToCart = (e: React.MouseEvent, product: ProductDataType) => {
    e.preventDefault();
    addToCart(product);
    const newCount = cartCount + 1;
    setCartCount(newCount);
    setCartCountState(newCount);
  };

  return (
    <div className="flex justify-center items-center fle-co md:flex-row ga-6 p4 bg-[#ffffff] min-h-screen">
      <div className="flex gap-16 justify-center bg shadow-lg overflow-hidden w-[1000px] h-[460px] mb-[80px]">
        <div className="w-[600px] p-4 bg-[#F5F5F5] md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.productName}
            width={400}
            height={400}
            className="w-ful h80 object-cove"
          />
        </div>
        <div className="w-[370px] p-6 flex flex-col justify-between bg-re-400 md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-4">
              {product.productName}
            </h1>
            <p className="text-lg text-gray-700 font-medium">
              {product.category}
            </p>
            <p className="text-[#111111] text-lg leading-relaxed mb-6 mt-5">
              {product.description}
            </p>
            <h2 className="text-lg font-bold text-[#111111] mb-4">
              ₹ {product.price}
            </h2>
            <button
              className="bg-[#111111] text-white flex items-cente justify-center gap-3 py-2 w-[160px] rounded-full hover:bg-slate-400 transition"
              onClick={(e) => handleAddToCart(e, product)}
            >
              <Image
                src={shoppingIcon}
                width={25}
                height={25}
                alt="shopping icon"
              />
              <Link href="/cart">Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
