import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";
import Container from "../utility/Container";

export default function CTA() {
   return (
      <div className="relative px-5 mb-12 md:mb-36 lg:mb-48">
         <h2
            className={`${playfairDisplay.className} mb-16 md:mb-24 text-3xl font-bold text-center text-white md:text-6xl`}
         >
            Book Now for an Unforgettable
            <br />
            Golfing Experience!
         </h2>
         <Container className="relative flex justify-between border-2 rounded-2xl shadow-md border-slate-500 h-[325px] bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900">
            <div className="hidden w-3/5 md:w-4/5 md:block lg:w-3/5">
               <Image
                  src={"/images/cta-image.png"}
                  height={700}
                  width={700}
                  alt="Golfer swinging club"
                  draggable={false}
                  className="absolute -left-32 -top-40 md:w-[500px] lg:w-[700px] md:-top-28 lg:-top-40"
               />{" "}
            </div>
            <div className="flex flex-col px-6 py-12 justify-evenly">
               <p className="mb-10 text-sm text-center text-white md:text-lg">
                  Book now to secure your tee time and
                  embark on an unforgettable golfing
                  adventure. Experience the tranquility of
                  our meticulously crafted course, where
                  every swing and putt becomes a moment of
                  pure bliss.
                  <br />
                  <br />
                  Don't miss out on creating lasting
                  memories. Reserve your spot today!
               </p>
               <button
                  className={`${playfairDisplay.className} py-3 font-semibold text-white transition bg-gradient-to-br from-green-500 to-green-700 rounded-xl px-7 hover:opacity-90`}
               >
                  Reserve your tee time!
               </button>
            </div>
         </Container>
      </div>
   );
}
