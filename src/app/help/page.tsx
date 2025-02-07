"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import mobileImage from "../../../public/images/mobile-phone-image.png";
import messageBoxImage from "../../../public/images/message-box-image.png";
import envelopeImage from "../../../public/images/envelop-image.png";
import nikeLocationImage from "../../../public/images/nike-location-image.png";

const GetHelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Main Heading */}
      <h1 className="text-5xl font-semibold text-center mb-6 text-[#111111]">
        Get Help
      </h1>

      {/* Search Bar */}
      <div className="mb-10 max-w-md mx-auto">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full px-4 py-2 bg-[#FFFFFF] border border-[#E5E5E5] text-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5] text-[17px]"
        />
        {/* ///// search icon /////////////// */}
        <FaSearch className="absolute right-[480px] top-[236px] transform -translate-y-1/2 text-gray-400 w-[20px] h-[20px]" />
      </div>

      {/*///////////////////////////////////// Content Section ////////////////////////////////// */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg mt-[70px] ">
        {/*///////////////////// First Div ///////////////////// */}
        <div className=" p-6   w-[840px] mt-[-25px]">
          <h2 className="text-2xl font-semibold mb-4 text-[#111111]">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-[#111111] text-[16px] mb-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>

          <p className="text-[#111111] text-[16px] mb-4 ml-[40px]">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
          </p>

          <p className="text-[#111111] text-[16px] mb-4 ml-[40px]">
            If you enter your PAN information at checkout, you'll be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>

          <p className="text-[#111111] text-[16px] mb-4 ml-[40px]">Apple Pay</p>

          <p className="text-[#111111] text-[16px] mb-4">
            <span className="">
              <Link href="#" className="underline">
                Nike Members
              </Link>
            </span>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member,{" "}
            <span className="">
              <Link href="#" className="underline">
                Join Us
              </Link>
            </span>
            .
          </p>

          <div className="flex space-x-4 mb-4">
            <button className="px-6 py-2 bg-[#111111] text-[#FFFFFF] rounded-full hover:bg-gray-400">
              <Link href="/join-us">Join Us</Link>
            </button>
            <button className="px-8 py-2 bg-[#111111] text-[#FFFFFF] rounded-full hover:bg-gray-400">
              Shop Nike
            </button>
          </div>
          <p className="text-[#111111] font-bold mb-2">FAQs</p>

          <h5 className="font-semibold">
            Does my card need international purchases enabled?
          </h5>
          <p className="text-[#111111]">
            Yes, we recommend asking your bank to enable international purchases
            on your card. You will be notified at checkout if international
            purchases need to be enabled.
          </p>

          <p className="text-[#111111] mt-[20px]">
            Please note, some banks may charge{" "}
            <span className="underline">
              <Link href="#" className="underline">
                a small transection free
              </Link>
            </span>
            for international orders.
          </p>

          <p className="text-[#111111] mt-[20px] font-semibold ">
            Can I pay for my order with multiple methods?
            <span className="text-[#111111] font-normal block">
              No, payment for Nike orders can't be
            </span>
          </p>

          <h5 className="font-semibold mt-[30px]">
            What payment method is accepted for SNKRS orders?
          </h5>
          <p className="text-[#111111]">
            You can use any accepted credit card to pay for your SNKRS order.
          </p>

          <h5 className="font-semibold mt-[30px]">
            Why don't I see Apple Pay as an option?
          </h5>
          <p className="text-[#111111]">
            To see Apple Pay as an option in the Nike App or on Nike.com, you'll
            need to use a compatible Apple device running the latest OS, be
            signed in to your iCloud account and have a supported card in your
            Wallet. Additionally, you'll need to use Safari to use Apple Pay on
            Nike.com.
          </p>

          <div className="flex items-center space-x-4">
            <h5 className="font-semibold mt-[30px]">
              Was this answer helpful?
            </h5>
            <div className="flex items-cente space-x-1 relative top-[50px] right-[190px]">
              <button className="">
                <span>👍</span>
              </button>
              <button className="">
                <span>👎</span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="font-semibold mt-[60px] text-[#757575] ">RELATED</h5>
            <br />
            <Link
              className="underline text-[14px] ml-[20px] text-[#111111] "
              href="/privacy"
            >
              WHAT ARE NIKE'S DELIVERY OPTIONS?
            </Link>
            <br />
            <Link
              className="underline text-[14px]  ml-[20px] text-[#111111]"
              href="/terms"
            >
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </Link>
          </div>
        </div>

        {/* /////////////////////////////////     Second Div contact section  //////////////////////////////// */}
        <div className=" p-6 text-center  w-[450px] h-[1050px] border-l-2 border-[#dfdede] relative left-[200px]">
          <div className="mt-[-20px]">
            <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
            <div className="flex flex-col gap-14 items-center">
              <div className="w-[290px] h-[230px] mt-[30px]">
                {/* /// image div */}
                <div className="w-[70px] h-[75px]  ml-[105px]">
                  <Image src={mobileImage} alt="mobile phone image"></Image>
                </div>

                {/* ////  image content div */}

                <div className="w-[280px] h-[150px] mt-[30px]">
                  <p className="text-[#111111] text-[17px] font-medium">
                    000 800 919 0566
                  </p>
                  <p className=" text-[#111111] text-[17px] ">
                    Products & Orders: 24 hours a day
                  </p>
                  <p className="text-[#111111] text-[17px] "> 7 days a week</p>
                  <p className="text-[#111111] text-[17px] ">
                    Company Info & Enquiries: 07:30
                  </p>
                  <p className="text-[#111111] text-[17px] ">
                    16:30, Monday - Friday
                  </p>
                </div>
              </div>

              <div className=" w-[290px] h-[140px] mt-[30px]">
                {/* /// image div */}
                <div className="w-[70px] h-[75px]  ml-[105px]">
                  <Image src={messageBoxImage} alt="message box image"></Image>
                </div>

                {/* ////  image content div */}

                <div className="w-[280px] h-[50px] ">
                  <p className="text-[#111111] text-[17px] font-medium">
                    24 hours a day
                  </p>
                  <p className="text-[#111111] text-[17px] ">7 days a week</p>
                </div>
              </div>
              <div className=" w-[290px] h-[140px] mt-[30px] ">
                {/* /// image div */}
                <div className="w-[70px] h-[75px]  ml-[105px]">
                  <Image src={envelopeImage} alt="envelope box image"></Image>
                </div>

                {/* ////  image content div */}

                <div className="w-[280px] h-[50px]  mt-[30px]">
                  <p className="text-[#111111] text-[17px] font-medium">
                    We'll reply within
                  </p>
                  <p className="text-[#111111] text-[17px] ">
                    five business days
                  </p>
                </div>
              </div>
              <div className=" w-[290px] h-[140px] mt-[30px]">
                {/* /// image div */}
                <div className="w-[70px] h-[75px]  ml-[105px]">
                  <Image
                    src={nikeLocationImage}
                    alt="nike location image"
                  ></Image>
                </div>

                {/* ////  image content div */}

                <div className="w-[280px] h-[50px] ">
                  <p className="text-[#111111] text-[17px] font-medium">
                    STORE LOCATOR
                  </p>
                  <p className="text-[#111111] text-[17px] ">
                    Find Nike retail stores near you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelpPage;
