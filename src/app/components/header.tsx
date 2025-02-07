"use client";

import React from "react";
import Image from "next/image";
import nikeManLogo from "../../../public/images/nike-man-logo.png";
import nikeLogo from "../../../public/images/nike-logo.png";
import searchIcon from "../../../public/images/search-icon.png";
import lockIcon from "../../../public/images/lock-icon.png";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  // //// for cart counter //////////
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    // Get initial cart count from local storage
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) setCartCount(parseInt(storedCount, 10));

    // Listen for changes in local storage
    const handleStorageChange = () => {
      const updatedCount = localStorage.getItem("cartCount");
      setCartCount(updatedCount ? parseInt(updatedCount, 10) : 0);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // /// for drop down of language convertor
  const [language, setLanguage] = useState<string>("Choose the Language");

  return (
    <>
      <div className="headerCon z-50 sticky top- bg-slat-400">
        <div className="hidden md:flex headerDivTop h-[40px] bg-[#F5F5F5] justify-evenly items-center ">
          <div className="div-1 bg-re-400 relative right-[150px] ">
            <Image
              src={nikeManLogo}
              width={30}
              height={30}
              alt="nike man logo"
            ></Image>
          </div>
          {/* <div className="div2 w-[155px] h-[30px] bg-[#FFFFFF] content-center text-center ">
            <p className="font-normal">Choose the Language</p>
          </div> */}

          {/* drop down of choosen language */}

          <div className="w-[180px] h-[30px] bg-white bg-re-400 ml-[20px] text-center border rounded-lg shadow-sm       ">
            <select
              className="w-full h-full bg-transparent text-center outline-none cursor-pointer      "
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option disabled>Choose the Language</option>
              <option className="">Arabic</option>
              <option>Urdu</option>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="div-3  w-[155px] h-auto b-[#a55050] flex">
            <Link href="/product-store">
              <Button
                className="bg-slat-500 border-r-[1px] rounded-none  border-white font-bold text-base"
                variant="link"
              >
                Find a Store
              </Button>
            </Link>

            <Link href="/help">
              <Button
                className="bg-slat-500 border-r-[1px] rounded-none  border-white font-bold text-base"
                variant="link"
              >
                Help
              </Button>
            </Link>

            <Link href="/join-us">
              <Button
                className="bg-slat-500 border-r-[1px] rounded-none  border-white font-bold text-base"
                variant="link"
              >
                Join Us
              </Button>
            </Link>

            <Link href="/sign-in">
              <Button
                className="bg-slat-500  rounded-none  font-bold text-base"
                variant="link"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="headerDivBottom h-[70px] bg-white flex items-center justify-between">
          <div className="div-1 relative left-[10px] md:left-[90px] md:top-[3px]">
            <Image
              src={nikeLogo}
              width={80}
              height={80}
              alt="nike man logo"
            ></Image>
          </div>

          <div className=" bg-slat-600 block md:hidden">
            <Button className="font-bold" variant="link">
              <Menu className="text-black bg-slat-600" />
            </Button>
          </div>

          <div className="hidden md:flex div-2 w-[600px] h-[40px] bg-re-400 relative left-[120px] top-[4px] ">
            <Link href="/product-store">
              <Button className=" font-bold text-[18px]" variant="link">
                New and Featured
              </Button>
            </Link>

            <Link href="/product-store">
              <Button className=" font-bold text-[18px]" variant="link">
                Men
              </Button>
            </Link>

            <Link href="/product-store">
              <Button className=" font-bold text-[18px]" variant="link">
                Women
              </Button>
            </Link>

            <Link href="/product-store">
              <Button className=" font-bold text-[18px]" variant="link">
                Kids
              </Button>
            </Link>

            {/* /////// will work on this section , according to gpt ides
            //  "https://chatgpt.com/c/679cb624-92e8-8004-b09b-ca507176b702 
            // this is the path in which ideas are available." */}
            {/* 
            <Link href="/product-store">
            <Button className=" font-bold text-[18px]" variant="link">
              Sales
            </Button>
            </Link> */}

            <Link href="/product-store">
              <Button
                className=" font-bold text-[18px] ml-[10px]"
                variant="link"
              >
                SNKRS
              </Button>
            </Link>
          </div>

          <div className=" flex gap-8 bg-slat-400 hidde  w-[450px] h-[40px] ml-[20px]   md:flex justify-around">
            <div className="div-3i relative bottom-[25px]  ">
              <div className="w-[28px] h-[28px] bg-slat-400 relative left-[190px] top-[37px]">
                <Image
                  src={searchIcon}
                  alt="search logo"
                  className="text-[#111111]"
                ></Image>
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-[#F5F5F5] text-[#CCCCCC] focus:outline-none"
              />
            </div>

            <div className=" div-3ii w-[380px h-[380px bg-slat-400 relative top-[3px] ">
              <Heart className="w-[25px] h-[25px] mt-[10px]" />
            </div>

            <div className="div-3iii w-[90px h-[90px bg-slat-400 relative top-[3px]">
              <Link href="/cart">
                <span className="w-[10px] h- px-[4px] py-[1px rounded-full text-center bg-gray-400 text-black fontbold ml-[32px] relative top-[-3px] ">
                  {cartCount}
                </span>
                <Image
                  className="bg-blac rounded-full mt-[-25px] mr-[120px]"
                  src={lockIcon}
                  width={45}
                  height={45}
                  alt="lock logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
