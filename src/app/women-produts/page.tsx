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
           
            <ProductCard
              title="Nike Court Vision Low Next Nature"
              price="₹4,995.00"
              imgSrc="/images/cloth_1-women.png"
              gender="Men's Shoes"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_2-women.png"
              gender="Women's Shoes"
              color= {1}
              productStatus="Just In"
            />

            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_2-women.png"
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