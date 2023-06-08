import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";
import Container from "../utility/Container";

export default function Hero() {
   return (
      <Container hero className="relative">
         <div className="relative">
            <Image
               src="/images/hero-a.jpg"
               width="1920"
               height="500"
               alt="hero image"
               className="w-full max-h-[900px] object-cover"
            />
            <div className="absolute top-0 left-0 flex flex-row w-full h-full bg-gradient-to-r from-slate-900 via-transparent to-slate-900">
               <div className="flex flex-col items-center justify-center w-full h-full pt-20 px-7 2xl:max-w-7xl 2xl:mx-auto">
                  <Image
                     src={"/images/pgclogo.png"}
                     width={120}
                     height={120}
                     alt="Preston Golf Club"
                     draggable={false}
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                  />
                  <h1
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                     className={`${playfairDisplay.className} text-center text-white mb-5 text-5xl font-extrabold xl:text-9xl`}
                  >
                     Welcome to
                     <br />
                     Preston Golf Club
                  </h1>
                  <p
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                     className="text-xl text-white"
                  >
                     A stunning parkland course situated in
                     the heart of Preston, Lancashire
                  </p>
                  <div className="z-10 mt-6">
                     <button className="px-6 py-3 mt-5 text-white bg-green-600 border-2 rounded-md border-white/70 hover:bg-green-700">
                        Book a Tee Time
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute bottom-0 z-auto w-full h-40 bg-gradient-to-t from-slate-900 to-transparent" />
      </Container>
   );
}