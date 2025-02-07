"use client";

import { ProductDataType } from "../../lib/type";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import shoppingCart from "../../../public/images/shoping-cart.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ProductDataType[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  // //////// for check out //////////////
  const route = useRouter();

  const handleProceed = () => {
    // //// for check out /////////

    route.push("/check-out");
    //       // Clear the cart after proceeding (optional)
    setCartItems([]);
    //     }
    //   });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="fle items-cente">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-[#111111] text-white rounded-md hover:bg-gray-300 hover:text-black text-base font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-5 mt-[100px]">
              <Image
                className="bg-re-400"
                src={shoppingCart}
                alt="shoping cart image "
                width={200}
                height={200}
              ></Image>
              <p className="text-gray-600 text-center text-3xl font-medium">
                Your cart is empty.
              </p>
            </div>
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-[#111111] text-white rounded-md hover:bg-gray-300 hover:text-black font-bold text-lg"
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
