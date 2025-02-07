import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import shoeImage_1 from '../../../public/images/shoe_1-removebg.png';

const CarouselSlider = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#111111] font-bold text-xl w-max py-2 px-4 mt-6">
        Best of Air Max
      </h1>
      <div className="w-full max-w-[1200px] mt-6 px-4">
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
                    src={shoeImage_1}
                    alt={`Shoe ${index + 1}`}
                    className="w-[150px] h-auto"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer" />
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;
