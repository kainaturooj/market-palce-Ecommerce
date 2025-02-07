import React from 'react';
import Image from 'next/image';

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
    <div className="cardCon max-w-full md:w-[1200px] h-auto bg-gray-400">
      <div className="mx-auto w-full md:w-[1200px] bg-gray-600 h-auto ">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={200}
            layout="responsive"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center bg-gray-900 md:bg-white py-8 md:relative">
          {para && (
            <p className="text-gray-100 font-bold text-lg md:text-xl md:text-[#111111]">{para}</p>
          )}
          <h2 className="text-2xl md:text-7xl font-bold text-gray-100 mt-4 md:text-[#111111]">
            {title}
          </h2>
          <p className="text-gray-100 sm:font-semibold text-base md:text-lg max-w-xs md:max-w-lg text-center mt-4 md:text-[#111111]">
            {content}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {button1Text && (
              <button className="px-5 py-3 bg-gray-100 text-gray-900 rounded-full">
                {button1Text}
              </button>
            )}
            <button className="px-7 py-3 bg-gray-100 text-gray-900 rounded-full">
              {button2Text}
            </button>
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
    <div className="cardCon max-w-full md:w-[1200px] h-auto bg-gray-400">
      <div className="mx-auto w-full md:w-[1200px] h-auto md:h-[400px]">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={200}
            layout="responsive"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center py-8 md:relative md:top-[30px]">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mt-4">
            {title}
          </h2>
          <p className="text-gray-100 font-semibold text-base md:text-lg max-w-xs md:max-w-lg text-center mt-4">
            {content}
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="px-7 py-3 bg-gray-100 text-gray-900 rounded-full">
              {button2Text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerCard_2, BannerCard };
