// MemberCheckoutPage.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import deliveryImage from "../../../public/images/checkOut-pic1.png";

// ////////// inerface f product list ///////////////

interface Product {
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}

// ///// function whch store the product detailing.///////////

const products: Product[] = [
  {
    name: "Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top",
    image: "/images/cloth_1-men.png",
    price:  3895.00,
    size: "L",
    quantity: 2,
  },
  {
    name: "Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top",
    image: "/images/shoe_3.png",
    price: 3895.00,
    size: "L",
    quantity: 1,
  },
];

const MemberCheckoutPage: React.FC = () => {
  const [subtotal, setSubtotal] = useState(0); // Example subtotal
  const [deliveryCharge, setDeliveryCharge] = useState(5.0);
  const total = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Container */}
        <div className="space-y-6 bg-re-300 w-[80%]">
          <div>
            <h1 className=" bg-slat-400 text-2xl font-semibold text-[#111111]">
              How would you like to get your order?
            </h1>
            <p className="bg-slat-600 text-[#757575] mt-[7px]">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More.
            </p>
          </div>

          <div className="space-y-4 ">
            <Image
              src={deliveryImage}
              width={20}
              height={20}
              alt="delivery image"
              className="relative left-[25px] top-[55px]"
            ></Image>

            <input
              type="text"
              placeholder="Deliver It"
              className="w-full border border-[#111111] p-4 rounded-[10px] placeholder-[#111111] font-medium pl-[60px]  "
            />
            <h1 className="text-[#111111] font-medium text-[18px] ">
              Enter your name and address:
            </h1>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <p className="text-[#757575] text-[13px] relative bottom-[10px] left-[15px] bg-slat-500">
              We do not ship to P.O. boxes
            </p>
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <div className="flex space-x-[10px]">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
              />
            </div>

            <div className="flex space-x-[10px]">
              <select className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] ">
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
              />
            </div>
            {/* ////////////// check box ///////// */}
            <div className=" flex flex-col ">
              <input
                type="checkbox"
                id="terms"
                className="mr-[450px] mt-[10px] accent-blue-500 border-gray-300"
              />
              <label
                htmlFor="terms"
                className="text-[#111111] text-sm ml-[35px] mt-[-16px] bg-re-400"
              >
                Save this address to my profile
              </label>
              <input
                type="checkbox"
                id="terms"
                className="mr-[450px] mt-[25px]"
              />
              <label
                htmlFor="terms"
                className="text-[#111111] text-sm ml-[35px] mt-[-16px]"
              >
                Make this my preferred address
              </label>
            </div>
          </div>

          {/* ///////// second list of input feilds */}

          <div className="space-y-4">
            <h1 className="text-[#111111] font-medium text-[18px] ">
              What's your contact information?
            </h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <p className="text-[#757575] text-[13px] relative bottom-[10px] left-[15px] bg-slat-500">
              A confirmation email will be sent after checkout.
            </p>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <p className="bg-slat-400 text-[#757575] text-[13px] relative bottom-[10px] left-[15px] bg-slat-500">
              A carrier might contact you to confirm delivery.
            </p>

            <h1 className=" bg-slat-400 text-[#111111] font-medium text-[18px] ">
              What's your PAN?
            </h1>
            <input
              type="text"
              placeholder="PAN"
              className="w-full border border-gray-300 p-2 rounded placeholder-[#111111] "
            />
            <p className=" bg-re-500 text-[#757575] text-[13px] relative bottom-[10px] left-[13px] bg-slat-500">
              Enter your PAN to enable payment with UPI, Net Banking or local
              card methods
            </p>

            {/* //// check box ///////// */}
            <div className=" flex flex-col ">
              <input
                type="checkbox"
                id="terms"
                className="mr-[450px] mt-[10px]"
              />
              <label
                htmlFor="terms"
                className="text-[#757575] text-sm ml-[35px] mt-[-16px] "
              >
                Save PAN details to Nike Profile
              </label>

              <input
                type="checkbox"
                id="terms"
                className="mr-[450px] mt-[40px]"
              />
              <label
                htmlFor="terms"
                className="bg-slat-400 text-[#757575] text-sm ml-[35px] mt-[-16px] "
              >
                I have read and consent to eShopWorld processing my information
                in accordance with the{" "}
                <Link href="#" className="underline">
                  Privacy{" "}
                </Link>
                Statement and{" "}
                <Link href="#" className="underline">
                  Cookie Policy.{" "}
                </Link>
                eShopWorld is a trusted Nike partner.
              </label>

              <button className=" w-full bg-[#F5F5F5] text-[#757575] py-2 rounded-full hover:bg-gray-200 mt-[80px] mb-[40px] ">
                Continue
              </button>
            </div>

            {/* /////// list of buttons /// */}
            <div className="spac-y-3 bg-slat-500 mb-[-900px">
              <button className=" w-full  text-[#111] py-2 rounded hover:bg-gray-20 border-t border-t-[#e7e5e5] pb-5 text-left   ">
                Delivery Information
              </button>

              <button className=" w-full  text-[#757575] py-2 rounded hover:bg-gray-20 border-t border-t-[#e7e5e5]  pb-5 text-left ">
                Shipping Policy
              </button>

              <button className=" w-full  text-[#757575] py-2 rounded hover:bg-gray-20  border-t border-t-[#e7e5e5] pb-5  text-left">
                Billing Information
              </button>

              <button className=" w-full  text-[#757575] py-2 rounded hover:bg-gray-20 border-t border-t-[#e7e5e5]  pb-5 text-left ">
                Payment Options
              </button>
            </div>
          </div>
        </div>

        {/* Right Container  */}
         <div className="bg-gra-50 p-6 rounded-md shadow-md bg-gree-200">
          <h2 className="text-2xl font-medium mb-4 bg-slat-500">Order Summary</h2>
          <div className="space-y-2 bg-slat-400">
            <p className="flex justify-between text-gray-600">
              <span className="text-[17px]">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-600">
              <span className="text-[17px]">Delivery/Shipping:</span>
              <span>${deliveryCharge.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-800">
              <span className="text-[18px]">Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>
          </div>

          <p className="text-[16px] text-[#111111] mt-4 bg-slat-600">
          (The total reflects the price of your order, including all duties and taxes)
          </p>

        {/* Dynamic Product Section */}
          <h1 className="text-[#11111] text-2xl font-medium mt-[10px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
      <div className="mt-6 space-y-5">
        {products.map((product, index) => (
          <div key={index} className=" bg-gree-500 flex item-center space-x-2 bg-gra-100 p-4 rounded-md shadow h-[350px] w-[450px]">
            <div className="bg-re-500 w-[300px">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
             
            />
            </div>
            <div className="bg-re-500 w-[120px] ">
              <p className="text-[#111111] font-medium text-xl leading-[30px] pb-[10px]">{product.name}</p>
              <p className="text-[17px] text-[#8D8D8D]">Quantity: {product.quantity}</p>
              <p className="text-[17px] text-[#8D8D8D]"> size:{product.size}</p>
              <p className="text-[17px] text-[#8D8D8D]">Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>


        </div>

        {/* /////////////////// right container with map functionality */}



        

        
      </div>
    </div>
  );
};

export default MemberCheckoutPage;
