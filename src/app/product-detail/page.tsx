import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import shoeImage from "../../../public/images/shoe_3.png"
import shoppingIcon from "../../../public/images/shopping-icon.png"

const ProductDetail = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-16 justify-center bg shadow-lg  overflow-hidden w-[1000px] h-[460px] mb-[80px]">
        {/* Left Image Div */}
        <div className="w-[600px]  p-4 bg-[#F5F5F5]">
        <Image src={shoeImage} alt='shoe image'></Image>
        </div>

        {/* Right Content Div */}
        <div className="w-[370px] p-6 flex flex-col justify-between bg-re-400">
          <div>
            {/* Heading */}
            <h1 className="text-3xl font-medium text-[#111111] mb-4">
            Nike Air Force 1 
            PLT.AF.ORM
            </h1>

            {/* Paragraph */}
            <p className="text-[#111111] text-sm leading-relaxed mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its 
            "inside out"-inspired construction, including unique layering and exposed 
            foam accents, ups the ante on this timeless Jordan Brand silhouette. 
            Details like the deco stitching on the Swoosh add coveted appeal, 
            while the unexpected shading, rich mixture of materials and aged 
            midsole aesthetic give this release an artisan finish.
            </p>

            {/* Another Heading */}
            <h2 className="text-lg font-semibold text-[#111111] mb-4">
            ₹ 8 695.00
            </h2>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#111111] text-white flex items-cente justify-center gap-3 py-2  w-[160px]  rounded-full hover:bg-slate-400 transition">
          <Image src={shoppingIcon} width={25} height={25} alt='shopping icon'></Image>

          <Link href="/product-cart" > Add to Cart </Link>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;