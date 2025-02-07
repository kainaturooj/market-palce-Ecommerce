import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import productImage_1 from "../../../public/images/shoe_1-removebg.png";
import productImage_2 from "../../../public/images/cloth_1-men.png";
import productImage_3 from "../../../public/images/cloth_1-kids.png";
import productImage_4 from "../../../public/images/cloth_1-women.png";
import productImage_5 from "../../../public/images/cloth_2-men.png";
import productImage_6 from "../../../public/images/cloth_2-women.png";

const images = [
  productImage_1,
  productImage_2,
  productImage_3,
  productImage_4,
  productImage_5,
  productImage_6,
];

const CarouselSlider = () => {
  return (
    <div className="flex flex-col items-center bg-slat-400 h-[500px] mt-[50px]">
      <h1 className="text-[#111111] font-bold text-xl w-max py-2 px-4 mt-12 m-[200px] mr-[1190px] bg-slat-600">
        Best of Air Max
      </h1>
      <div className="w-full max-w-[1200px] mt-[-190px] px-4 bg-re-400">
        <Carousel className="relative">
          <CarouselContent className="flex gap-4">
            {/* Map through items for scalability */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 bg-[#F5F5F5] h-[250px] rounded-lg flex items-center justify-center border"
                >
                  <Image
                    src={images[index % images.length]}
                    alt={`Shoe ${index + 1}`}
                    className="w-[150px] h-auto"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-[1060px]  top-[-32px] top1/2 left0 transform -translate-y-1/2 bg-gray-100 text-black rounded-full border-gray-300 p2 cursor-pointer" />
          <CarouselNext className="absolute top-[-32px] top1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-black rounded-full border-gray-300 p2 cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;
