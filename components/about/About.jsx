"use client";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Container from "../utility/Container";
import Image from "next/image";
import Carousel from "./Carousel";

export default function About() {
   return (
      <div className="relative">
         <Container className="py-5 mb-16">
            <div className="flex justify-between gap-16 mb-10">
               <div>
                  <h1
                     className={`${playfairDisplay.className} py-5 text-6xl font-bold text-white`}
                  >
                     About the club
                  </h1>
                  <p className="mb-5 text-white">
                     Nestled amidst 120 acres of enchanting
                     parkland, where serenity meets
                     grandeur, lies the illustrious Preston
                     Golf Club. A beacon of warmth and
                     camaraderie, this cherished
                     establishment graciously welcomes all
                     who seek solace in its verdant embrace.
                     Dating back to the hallowed year of
                     1892, our resplendent 18-hole,
                     6,278-yard masterpiece beckons with an
                     unrivaled allure, its design inspired
                     by the ingenious minds of golfing
                     legends like James Braid, Harry Vardon,
                     Alistair Mackenzie, and Sandy Herd.
                     Prepare to be captivated by the
                     kaleidoscope of holes that await, each
                     one an eloquent testament to the
                     artistry of the game. But it is the
                     meticulously crafted USGA greens that
                     truly elevate the experience,
                     challenging both novices and virtuosos
                     alike. Renowned as a coveted
                     destination for both social gatherings
                     and spirited competitions.
                  </p>
                  <p className="text-white">
                     Preston Golf Club boasts a plethora of
                     enticing packages tailored for society
                     events, corporate golf days, or simply
                     indulging in the leisurely pursuit of
                     this noble sport. Join us on our proud
                     journey as we stand as hosts for the
                     prestigious English Senior Ladies
                     Strokeplay Championship in June 2023,
                     an occasion that shall etch itself into
                     the annals of golfing glory.
                  </p>
               </div>
               <div className="flex items-center justify-center">
                  <Image
                     src={"/images/about-b.jpg"}
                     width={3500}
                     height={1000}
                     alt="Golf Course Green"
                     className="shadow-lg rounded-3xl object-fit shadow-black/30"
                  />
               </div>
            </div>
            <Carousel />
         </Container>
         <Image
            src={"/images/about-abstract.png"}
            width={2000}
            height={200}
            className="absolute top-0 opacity-20 -z-10 mix-blend-plus-lighter"
            draggable={false}
         />
      </div>
   );
}
