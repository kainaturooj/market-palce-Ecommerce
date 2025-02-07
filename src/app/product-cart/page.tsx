"use client";
import { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
// import product_1 from "../../../public/images/cloth_1-men.png";

interface Product {
  id: number;
  name: string;
  description_1: string;
  description_2: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description_1: "Men's Short-Sleeve Running Top",
      description_2: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,

      price: 500,
      image: "/images/shoe_3.png",
    },
    {
      id: 2,
      name: "Nike Air Max 97 SE",

      description_1: "Men's Shoes",
      description_2: "Flat Pewter/Light Bone/Black/White",
      size: "B",
      quantity: 1,
      price: 700,
      image: "/images/cloth_1-men.png",
    },

    {
      id: 3,
      name: "Nike Air Max 97 SE",

      description_1: "Men's Shoes",
      description_2: "Flat Pewter/Light Bone/Black/White",
      size: "B",
      quantity: 1,
      price: 700,
      image: "/images/cloth_1-men.png",
    },
    // { id: 3, name: 'Product 3', price: 300, image: 'https://via.placeholder.com/150'},
  ]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
   
  };

  const subtotal = cart.reduce((acc, product) => acc + product.price, 0);
  const deliveryHandling = 100;
  const total = subtotal + deliveryHandling;

  return (
    <div className=" p-6 bg-gray-100 h-[1500px] ">
      {/* ///////// first container ///////////////////////////*/}
      <div className=" w-[650px] h-[70px] bg-[#F5F5F5] rounded p-2 ml-[150px] mt-[20px]">
        <h1 className="text-lg font-bold   text-[#111111] ">Free Delivery</h1>
        <p className="text-[#111111] mt-5px] ">
          Applies to orders of ₹ 14 000.00 or more.
          <span className="text-[#111111] underline ml-[10px]">
            <Link href="#">View details</Link>
          </span>
        </p>
      </div>

      {/* ///////// second container //////////////// */}
      <div className="fle flex-col d:flex-row justify-between bg-re-300 relative top-[40px] left-[150px] w-[650px] h-[900px]">
        <h1 className="text-[#111111] font-bold text-2xl">Bag</h1>

        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-slat-500 w-full h-[170px] mt-[20px] border-b border-[#eaeaea] flex gap-5"
          >
            {/* //product image container */}
            <div className="bg-re-500 w-[100px] h-[120px] rounde relative top-[20px] left-[10px]">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={120}
                className=" rounde-lg"
              />
            </div>

            {/* product content container */}

            <div className="bg-re-600 w-[500px] h-[130px] rounde relative top-[20px] left-[10px]">
              <h2 className="text-base font-medium">{product.name}</h2>
              <p className="text-sm text-[#757575]">{product.description_1}</p>
              <p className="text-sm text-[#757575]">{product.description_2}</p>
              <span className="text-sm text-[#757575]">
                Size {product.size}
              </span>
              <span className="text-sm text-[#757575] ml-[50px]">
                Quantity {product.quantity}
              </span>
              <span className=" text-lg font-normal  mb-[80px relative left-[240px] bottom-[70px]">
                Rs {product.price}
              </span>
            </div>

            <div className="flex  items-cente space-x-4 relative right-[480px] top-[50px]">
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-black hover:text-red-700"
              >
                <i className="fas fa-trash"></i>
              </button>

              <button className="text-black hover:text-pink-500">
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ///////////////////////// third section summay card ///////////////// */}

      <div className="  bg-[#FFFFFF bg-slat-500 shadow-md rounded-lg p-7  relative left-[900px] top-[-968px] w-[350px] h-[300px]">
        <h2 className="text-xl font-bold mb-4 bg-slat-300">Summary</h2>
        <div className="flex justify-between  ">
          <span className="text-[#111111] text-[15px]">Subtotal</span>
          <span>Rs {subtotal}</span>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-[#111111] text-[15px]">
            Estimated Delivery & Handling
          </span>
          <span>Rs {deliveryHandling}</span>
        </div>
        <div className="flex justify-between p-2 text-lg mt-7 border-t border-b border-[#E5E5E5]">
          <span>Total:</span>
          <span>Rs {total}</span>
        </div>
        <button className="w-full bg-[#111111] text-white py-2 rounded-full hover:bg-slate-400 mt-[35px] ">
          <Link href="/check-out">Member Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
