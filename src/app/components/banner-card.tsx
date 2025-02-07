import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerCardProps {
  src: string;
  alt: string;
  para?: string;
  title: string;
  content: string;

  button1Text?: string;
  button2Text: string;
}

interface BannerCard_2Props {
  src: string;
  alt: string;

  title: string;
  content: string;

  button2Text: string;
}

const BannerCard = ({
  src,
  title,
  content,
  para,
  alt,
  button1Text,
  button2Text,
}: BannerCardProps) => {
  return (
    <div className="cardCon w-[1200px] h-[950px] bg-re-400 ml-[80px] mr-[100px]">
      <div className=" mx-auto w-[1200px] bg-slat-600 h-[400px] ">
        {/* Image Section */}
        <div className="h-[200px] w-full">
          <Image src={src} alt={alt} width={1200} height={200}></Image>
        </div>

        {/* Content Section */}
        <div className=" h-[370px flex flex-col items-center bg-slat-900 relative top-[430px]">
          <p className="  text-[#111111] font-bold text-xl bg-slat-400 mt-[20px] ">
            {para}
          </p>
          <h2 className="text-7xl font-bold text-[#111111] mt-[30px]">
            {title}
          </h2>
          <p className="text-[#111111] leading-10 font-semibol text-[20px] w-[660px] bg-re-600 text-center mt-[35px]">
            {content}
          </p>

          {/* Buttons */}
          <div className="mt-[35px] flex space-x-2 bg-slat-600 ">
            <Link href="/product-store">
              <button className="px-7 py-3 bg-[#111111] text-white rounded-full ">
                {button2Text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerCard_2 = ({
  src,
  title,
  content,
  alt,
  button2Text,
}: BannerCard_2Props) => {
  return (
    <div className="cardCon w-[1200px] h-[910px] bg-re-400 ml-[80px] mr-[100px]">
      <div className=" mx-auto w-[1200px] bg-slat-600 h-[400px] ">
        {/* Image Section */}
        <div className="h-[200px] w-full">
          <Image src={src} alt={alt} width={1200} height={200}></Image>
        </div>

        {/* Content Section */}
        <div className="  h-[370px flex flex-col items-center bg-slat-900 relative top-[430px]">
          <h2 className="text-5xl font-bold text-[#111111] mt-[20px]">
            {title}
          </h2>
          <p className="text-[#111111] font-semibol text-[18px] w-[620px] bg-re-600 text-center mt-[20px]">
            {content}
          </p>

          {/* Buttons */}
          <div className="mt-[25px]  ">
            <button className="px-7 py-3 bg-[#111111] text-white rounded-full ">
              {button2Text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerCard_2, BannerCard };
