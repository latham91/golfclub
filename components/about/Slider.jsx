import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Slider() {
   return (
      <div className="px-5">
         <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
         >
            <SwiperSlide>
               <Image
                  src={"/images/carousel-a.jpg"}
                  height={500}
                  width={2000}
                  alt="Slide image"
                  className="object-cover rounded-3xl h-[325px] md:h-[350px] shadow-md shadow-black/50 cursor-pointer"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={"/images/carousel-b.jpg"}
                  height={500}
                  width={2000}
                  alt="Slide image"
                  className="object-cover rounded-3xl h-[325px] md:h-[350px] shadow-md shadow-black/50 cursor-pointer"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={"/images/carousel-c.jpg"}
                  height={500}
                  width={2000}
                  alt="Slide image"
                  className="object-cover rounded-3xl h-[325px] md:h-[350px] shadow-md shadow-black/50 cursor-pointer"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={"/images/carousel-d.jpg"}
                  height={500}
                  width={2000}
                  alt="Slide image"
                  className="object-cover rounded-3xl h-[325px] md:h-[350px] shadow-md shadow-black/50 cursor-pointer"
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
