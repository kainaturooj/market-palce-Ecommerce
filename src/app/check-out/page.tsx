"use client";

// ///////////////////////////////// check out with  functionality ////////////////////////////

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { ProductDataType } from "../../lib/type";
import { CgChevronRight } from "react-icons/cg";
import { SanityClient } from "sanity";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<ProductDataType[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  /////// for disable the button of place order after once click ///
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);
  const handlePlaceOrder = async () => {
    if (isPlaceOrder) return;
    setIsPlaceOrder(true);
    // //// for alert when form filled ///

    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your order has been successfully processed.",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields before proceeding.",
            "error"
          );
        }
      }
    });

    // /// for rder saving in the sanity ///
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map((items) => ({
        _type: "reference",
        _ref: items._id,
      })),

      total: total,
      discount: discount,
      orderDate: new Date().toISOString,
    };
    //  /// order creating in sanity ///
    try {
      await client.create(orderData);
      console.log("order created");
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.log("error creating order", error);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-base font-medium"
            >
              Cart
            </Link>
            <CgChevronRight className="w-5 h-5 text-black text[#666666]" />
            <span className="text-base font-medium ">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.productName}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-lg font-semibold">
                Subtotal:{" "}
                <span className="font-[1px] text-lg text-black ">
                  ${subtotal}
                </span>
              </p>
              <p className="text-lg font-semibold">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">
              What's Your Contact Information ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                {/* <label htmlFor="firstName">First Name</label> */}
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                {/* <label htmlFor="lastName">Last Name </label> */}
                <input
                  className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last name is required.</p>
                )}
              </div>
            </div>
            <div>
              {/* <label htmlFor="address">Address </label> */}
              <input
                className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              {/* <label htmlFor="city">City</label> */}
              <input
                className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              {/* <label htmlFor="zipCode">Zip Code</label> */}
              <input
                className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            <div>
              {/* <label htmlFor="phone">Phone</label> */}
              <input
                className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                className="w-full border border-gray-300 p-2 rounded placeholder-[#646363]"
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <Link href="/stripe-page">
              {/* this link just fe checking the sripe page will open or not when click on place order */}
              <button
                disabled={isPlaceOrder}
                className="w-full h-12 font-medium bg-[#111111] hover:bg-gray-300 hover:text-black text-white mt-[40px]
              disabled:bg-blue-300 disabled:cursor-not-allowed"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
