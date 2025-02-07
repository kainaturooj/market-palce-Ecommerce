import React from 'react'
import ProductCard from "../components/productCard";
import Image from "next/image";

const Shoes = () => {
  return (
    <>
    
    {/* Product Grid */}
    <div className='bg-gree-400'>
    <main className="flex-1 p-8 bg-re-900">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[200px bg-slat-500">
            {/* Product Cards */}
            <div className='bg-blue-400 w-[600px] h-[200px]'>
            <ProductCard
              title="Nike Air Force 1 Mid '07"
              price="₹10,795.00"
              imgSrc="/images/shoe_3.png"
              gender="Men's Shoes"
              color= {1}
              productStatus="Just In"
              
            />
            </div>
            <ProductCard
              title="Nike Court Vision Low Next Nature"
              price="₹4,995.00"
              imgSrc="/images/shoe-_4.png"
              gender="Men's Shoes"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe-_5.png"
              gender="Women's Shoes"
              color= {1}
              productStatus="Just In"
            />

            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe-_5.png"
              gender="Women's Shoes"
              color= {1}
              productStatus="Just In"
            />
            
            
          </div>

        </main>
        </div>
    
    </>
  )
}

export default Shoes