import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { BannerCard, BannerCard_2 } from './components/banner-card';

import shoeImage_1 from '../../public/images/shoe_1-removebg.png';
import menCloth_1 from '../../public/images/cloth_1-men.png';
import womenCloth_1 from '../../public/images/cloth_1-women.png';
import bannerImage_3 from '../../public/images/banner-image-3.png';
import image_1 from '../../public/images/image_1.png';
import image_2 from '../../public/images/image_2.png';
import image_3 from '../../public/images/image_3.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CarouselSlider from './components/carousel';

const Home = () => {
  return (
    <>
      {/* //////////////////////// home page section one start ////////////////////// */}

      {/* ///////////// home section one heading part ///////////////////////////////  */}
      <div className="hidden md:block homeSec_1Con h-[70px] bg-[#F5F5F5] text-center content-center">
        <h1 className="font-bold">Nike App</h1>
        <p className="text-[#111111#111111]">
          Download the app t access everything Nike
          <Link className=" underline ml-[10px]" href="#">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* // //////////////////////// home section one banner card ////////////// */}
      <div className=" flex items-center justify-center px-4 md:px-0">
        <BannerCard
          src="/images/banner-image-1.png"
          para="First Look"
          title="NIKE AIR MAX PULSE"
          content="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max."
          alt="banner image shoe"
          button1Text="Notify ME"
          button2Text="Shop Air Max"
        />
      </div>

      {/* //////////////////////// home page section two start ////////////////////// */}

      <CarouselSlider></CarouselSlider>

      {/* //////////////////////// home page section three start  ////////////////////// */}

      {/* // //////////////////////// home section three banner card ////////////// */}
      <div className="hidden  h-[850px] bg-[#FFFFFF] ">
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

      <div className="homefifthCon bg-re-400 flex flex-col mt-[30px]">
        <h1 className="text-[#111110] text-center font-bold text-xl mb-[30px]">
          Don't Miss
        </h1>
        <div className="leftCon mx-auto w-full md:w-[1200px] bg-gray-600 h-auto">
          <Image src={bannerImage_3} alt="vertical men image"></Image>
        </div>
        <div className=" flex flex-col items-center text-center bg-slat-300 relative top-[80px]">
          <h2 className="text-5xl font-bold text-[#111111] mt-[20px]">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-[#111111]">
            Your built-to-last, all weeks wear -but with style only Jorden Brand
            can deliver
          </p>
          <button className="text-[#111111]">Shop</button>
        </div>
      </div>

      {/* //////////////////// home page 6th section start /////////////// */}

      <div className="homeSixthCon flex flex-col mt-12">
        <h1 className="text-[#111110] font-bold text-center text-xl mb-8">
          Don't Miss
        </h1>
        <div className="leftCon mx-auto w-full max-w-[1200px] flex flex-col md:flex-row gap-6">
          {[
            { src: image_1, alt: "Men's image", label: "Men's" },
            { src: image_2, alt: "Women's image", label: "Women's" },
            { src: image_3, alt: "Kids' image", label: 'Kids' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-[400px] md:max-w-none flex-1"
            >
              <Image src={item.src} alt={item.alt} className="w-full h-auto" />
              <button className="absolute bottom-4 left-4 px-6 py-1 bg-[#FFFFFF] text-[#111111] rounded-full">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-12 mb-20">
        <div className="homeSixthCon mx-auto w-full max-w-[1200px] relative left-0 top-16 flex flex-wrap gap-6 p-6">
          {[
            {
              title: 'Shoes',
              items: [
                'All Shoes',
                'Custom Shoes',
                'Jordan Shoes',
                'Running Shoes',
              ],
            },
            {
              title: 'Icons',
              items: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
            },
            {
              title: 'Clothing',
              items: [
                'All Clothing',
                'Modest Wear',
                'Hoodies & Pullovers',
                'Shirts & Tops',
              ],
            },
            {
              title: "Kid's",
              items: [
                'Infant & Toddler Shoes',
                "Kid's Shoes",
                "Kid's Jordan Shoes",
                "Kid's Basketball Shoes",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px]] p-4 rounded-md shadow-md"
            >
              <h1 className="font-bold text-lg mb-4">{category.title}</h1>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
