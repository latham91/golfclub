"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function Carousel({ className }) {
   const [sliderRef] = useKeenSlider(
      {
         loop: true,
         slides: {
            perView: 1,
            spacing: 20,
         },
      },
      [
         (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
               clearTimeout(timeout);
            }
            function nextTimeout() {
               clearTimeout(timeout);
               if (mouseOver) return;
               timeout = setTimeout(() => {
                  slider.next();
               }, 3500);
            }
            slider.on("created", () => {
               slider.container.addEventListener(
                  "mouseover",
                  () => {
                     mouseOver = true;
                     clearNextTimeout();
                  }
               );
               slider.container.addEventListener(
                  "mouseout",
                  () => {
                     mouseOver = false;
                     nextTimeout();
                  }
               );
               nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
         },
      ]
   );

   return (
      <div
         ref={sliderRef}
         className={`${className} shadow-md rounded-3xl keen-slider shadow-black/50`}
      >
         <div className="shadow-md keen-slider__slide shadow-black/50">
            <Image
               src={"/images/carousel-a.jpg"}
               height={500}
               width={2000}
               alt="Slide image"
               className="object-cover rounded-3xl h-[250px] shadow-md shadow-black/50"
            />
         </div>
         <div className="keen-slider__slide">
            <Image
               src={"/images/carousel-b.jpg"}
               height={500}
               width={2000}
               alt="Slide image"
               className="object-cover rounded-3xl h-[250px] shadow-md shadow-black/50"
            />
         </div>
         <div className="keen-slider__slide">
            <Image
               src={"/images/carousel-c.jpg"}
               height={500}
               width={2000}
               alt="Slide image"
               className="object-cover rounded-3xl h-[250px] shadow-md shadow-black/50"
            />
         </div>
         <div className="keen-slider__slide">
            <Image
               src={"/images/carousel-d.jpg"}
               height={500}
               width={2000}
               alt="Slide image"
               className="object-cover rounded-3xl h-[250px] shadow-md shadow-black/50"
            />
         </div>
      </div>
   );
}
