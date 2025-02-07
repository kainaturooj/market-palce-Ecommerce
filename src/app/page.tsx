import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import { BannerCard, BannerCard_2 } from "./components/banner-card";

import shoeImage_1 from "../../public/images/shoe_1-removebg.png";
import menCloth_1 from "../../public/images/cloth_1-men.png";
import womenCloth_1 from "../../public/images/cloth_1-women.png";
import bannerImage_3 from "../../public/images/banner-image-3.png";
import image_1 from "../../public/images/image_1.png";
import image_2 from "../../public/images/image_2.png";
import image_3 from "../../public/images/image_3.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <>
      {/* //////////////////////// home page section one start ////////////////////// */}

      {/* ///////////// home section one heading part ///////////////////////////////  */}
      <div className="homeSec_1Con w-full h-[70px] bg-[#F5F5F5] text-center flex items-center justify-center">
        <h1 className="font-bold">Nike App</h1>
        <p className="text-[#111111] ml-2">
          Download the app t access everything Nike
          <Link className="underline ml-2" href="#">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* // //////////////////////// home section one banner card ////////////// */}
      <div className="w-full bg-slate-300 py-4">
        <BannerCard
          src="/images/banner-image-1.png"
          para="First Look"
          title="NIKE AIR MAX PULSE"
          content="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max."
          alt="banner image shoe"
          button1Text="Notify ME"
          button2Text="Shop Air Max"
        />
      </div>

      <div className="HomeSec_2Con h-[430px] bg-slat-500 py-4">
        <h1 className="text-[#111111] font-bold mx-auto text-xl bg-slate-400 w-max h-[60px] relative top-[60px]">
          {" "}
          Best of Air Max{" "}
        </h1> 
        <div className= "shoesProductCon w-full h-[320px] bg-slate-300 mx-auto mt-4">
          <Carousel className="w-full h-[310px] bg-blue-300 mx-auto">
            <CarouselContent className="flex space-x-4 overflow-x-scroll">
              <CarouselItem className="product_1 bg-[#F5F5F5] basis-1/3 border-l  h-[250px]">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_2 bg-[#F5F5F5] flex-none w-[250px] h-[250px] border-l">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_3 bg-[#F5F5F5] flex-none w-[250px] h-[250px] border-l">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_4 bg-[#F5F5F5] flex-none w-[250px] h-[250px] border-l">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_5 bg-[#F5F5F5] flex-none w-[250px] h-[250px] border-l">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_6 bg-[#F5F5F5] flex-none w-[250px] h-[250px] border-l">
                <Image src={shoeImage_1} alt="shoes_1"></Image>
              </CarouselItem>
            </CarouselContent>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[7px] ">
              <h1 className="product_1H text-[#111111] font-semibold">
                Nike Air Max Pulse{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[66px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575]">Women's Shoes</p>
            </div>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[-51px] left-[305px]">
              <h1 className="product_1H text-[#111111] font-semibold">
                Nike Air Max Pulse{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[66px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575]">Men,s Shoes</p>
            </div>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[-109px] left-[609px]">
              <h1 className="product_1H text-[#111111] font-semibold">
                Nike Air Max Pulse{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[66px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575]">Men,s Shoes</p>
            </div>

            <CarouselPrevious className="absolute top-[100px] left-[-70px]" />
            <CarouselNext className="absolute top-[100px] left-[930px]" />
          </Carousel>
        </div>
      </div>
      <br />

      {/* //////////////////////// home page section three start  ////////////////////// */}

      {/* // //////////////////////// home section three banner card ////////////// */}
      <br />
      <br />
      <div className="w-screen h-[850px] bg-[#FFFFFF] ">
        <h1 className="text-[#111111] font-bold ml-[82px] text-xl bg-slat-400 w-[150px] h-[60px] relative top-[20px]">
          Featured
        </h1>

        <BannerCard_2
          src="/images/banner-image-2.png"
          title="STEP INTO WHAT FEELS GOOD"
          content="Cause everyone should know the feeling of running in that perfect pair ."
          alt="banner image runnig man"
          button2Text="Find Your Shoe"
        />
      </div>
      <br />
      <br />

      {/* /////////////////////////// home page fourth section start ........ */}

      <br />

      <div className="HomeSec_2Con   h-[430px] bg-slat-500">
        <h1 className="text-[#111111] font-bold ml-[170px] text-xl bg-slat-400 w-[150px] h-[60px] relative top-[60px]">
          Gear Up
        </h1>
        <div className="shoesProductCon w-[1200px] h-[320px] bg-slat-300 ml-[70px] mt-[50px] ">
          <Carousel className="w-[900px] h-[310px] bg-blu-300    ml-[100px]">
            <CarouselContent className="  bg-pin-500   ">
              <CarouselItem className="product_1 bg-[#F5F5F5] basis-1/3 border-l   h-[250px]">
                <Image src={menCloth_1} alt="shoes_1"></Image>
              </CarouselItem>

              <CarouselItem className=" product_2  bg-[#F5F5F5] basis-1/3 h-[250px] border-l ">
                <Image src={menCloth_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className=" product_3  bg-[#F5F5F5] basis-1/3 h-[250px] border-l">
                <Image src={womenCloth_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className=" product_4  bg-[#F5F5F5] basis-1/3 h-[250px] border-l">
                <Image src={womenCloth_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className="product_5  bg-[#F5F5F5] basis-1/3 h-[250px] border-l">
                <Image src={womenCloth_1} alt="shoes_1"></Image>
              </CarouselItem>
              <CarouselItem className=" product_6  bg-[#F5F5F5] basis-1/3 h-[250px] border-l ">
                <Image src={womenCloth_1} alt="shoes_1"></Image>
              </CarouselItem>
            </CarouselContent>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[7px] ">
              <h1 className="product_1H text-[#111111] font-semibold text-[13px]">
                Nike Dri-FIT ADV TechKnit Ultra{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[30px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575] w-[150px]">
                Men's Short Sleeve Running Top
              </p>
            </div>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[-51px] left-[305px]">
              <h1 className="product_1H text-[#111111] font-semibold">
                Nike Air Max Pulse{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[66px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575]">Men,s Shoes</p>
            </div>

            <div className=" contentDiv  w-[280px] h-[60px] bg-re-700 relative top-[-109px] left-[609px]">
              <h1 className="product_1H text-[#111111] font-semibold">
                Nike Air Max Pulse{" "}
                <span className="product_Prize  text-[#111111] font-semibold ml-[66px]">
                  $ 13 995
                </span>{" "}
              </h1>
              <p className="product_1P text-[#757575]">Men,s Shoes</p>
            </div>

            <CarouselPrevious className="absolute top-[100px] left-[-70px]" />
            <CarouselNext className="absolute top-[100px] left-[930px]" />
          </Carousel>
        </div>
      </div>
      <br />

      {/* ///////////////// home page 5th section start.//////////////////// */}

      <br />
      <br />

      <div className="homefifthCon w-screen h-[980px] bg-re-400 flex flex-col ">
        <h1 className="text-[#111111] font-bold ml-[100px] text-xl bg-slat-400 w-[150px] h-[60px] relative top-[20px">
          Don't Miss
        </h1>
        <div className="leftCon     h-[800] w-[1200px]  bg-slat-400 mx-[100px]">
          <Image src={bannerImage_3} alt="vertical men image"></Image>
        </div>
        <div className=" h-[370px] flex flex-col items-center bg-slat-300 relative top-[80px]">
          <h2 className="text-5xl font-bold text-[#111111] mt-[20px]">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-[#111111] font-semibol text-[18px] w-[620px] bg-re-600 text-center mt-[30px]">
            Your built-to-last, all weeks wear -but with style only Jorden Brand
            can deliver
          </p>
          <button className="px-10 py-3 bg-[#111111] text-white rounded-full mt-[40px] ">
            Shop
          </button>
        </div>
      </div>

      <br />
      <br />
      {/* //////////////////// home page 6th section start /////////////// */}

      <div className="homeSixthCon  w-screen h-[800px] bg-re-400 flex flex-col ">
        <h1 className="text-[#111111] font-bold ml-[100px] text-xl bg-slat-400 w-[150px] h-[60px] relative top-[20px]">
          Don't Miss
        </h1>
        <div className="leftCon     h-[400px] w-[1200px]  bg-slat-600 mx-[100px] flex gap-5">
          <div className="imge_1  w-[400px] h-full bg-yellow-300 ">
            <Image src={image_1} alt="vertical men image"></Image>

            <button className="px-6 py-1 bg-[#FFFFFF] text-[#111111] rounded-full relative bottom-[99px] left-[10px]">
              Men's
            </button>
          </div>
          <div className="image_2  w-[400px] h-full bg-yellow-500">
            <Image src={image_2} alt="vertical men image"></Image>

            <button className="px-6 py-1 bg-[#FFFFFF] text-[#111111] rounded-full relative bottom-[99px] left-[10px] ">
              Womem's
            </button>
          </div>
          <div className="image_3  w-[400px] h-full bg-yellow-700">
            <Image src={image_3} alt="vertical men image"></Image>

            <button className="px-6 py12 bg-[#FFFFFF] text-[#111111] rounded-full relative bottom-[99px] left-[10px] ">
              Kids
            </button>
          </div>
        </div>
        <div className="homeSixthCon    w-[980px] h-[199px] bg-slat-800  relative left-[230px] top-[120px] flex gap-10 ">
          <div className="con_1  h-full w-[310px] bg-slat-300">
            <h1 className="font-bold">Shoes</h1>
            <br />
            <p className="">All Shoes</p>
            <p className="">Custom Shoes</p>
            <p className="">Jorden Shoes</p>
            <p className="">Running Shoes</p>
          </div>
          <div className="con_2 h-full w-[310px] bg-slat-300">
            <h1 className="font-bold">Icons</h1>
            <br />
            <p className="">Air Force 1</p>
            <p className="">Huarache</p>
            <p className="">Air Max 90</p>
            <p className="">Air Max 95</p>
          </div>
          <div className="con_3 h-full w-[310px] bg-slat-300">
            <h1 className="font-bold">Clothing</h1>
            <br />
            <p className="">All Clothing</p>
            <p className="">Modest Wear</p>
            <p className="">Hoodies & Pullovers</p>
            <p className="">Shirts & Toops</p>
          </div>
          <div className="con_4 h-full w-[310px] bg-slat-300">
            <h1 className="font-bold">Kid's</h1>
            <br />
            <p className="">Infant & Toddler Shoes</p>
            <p className="">Kid's Shoes</p>
            <p className="">Kid's Jorden Shoes</p>
            <p className="">Kid's Basketball Shoes</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;






///////////////////////////// clone code //////////////////////////////////


