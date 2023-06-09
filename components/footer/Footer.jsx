"use client";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";
import Container from "../utility/Container";
import {
   FaFacebookSquare,
   FaInstagram,
   FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="border-t-2 bg-gradient-to-br border-white/10 from-slate-800 to-slate-900">
         <Container className="flex items-center justify-between px-5">
            <div className="flex flex-row gap-8 py-10">
               <Image
                  src={"/images/pgclogo.png"}
                  width={130}
                  height={130}
                  alt="Preston Golf Club Logo"
                  draggable={false}
               />
               <div className="text-white">
                  <h3
                     className={`${playfairDisplay.className} text-3xl font-semibold mb-3`}
                  >
                     Preston Golf Club
                  </h3>
                  <p>Fulwood Hall Lane</p>
                  <p>Fulwood</p>
                  <p>Preston</p>
                  <p>PR2 8DD</p>
                  <p>
                     Email:{" "}
                     <Link
                        href="mailto:generalmanager@prestongolfclub.com"
                        className="hidden font-semibold text-teal-500 hover:underline md:block"
                     >
                        generalmanager@prestongolfclub.com
                     </Link>
                  </p>
                  <p>
                     Tel:{" "}
                     <Link
                        href="tel:+441772700011"
                        className="font-semibold text-teal-500 hover:underline"
                     >
                        01772 700011
                     </Link>
                  </p>
               </div>
            </div>
            <div className="flex-col hidden text-right text-white lg:flex">
               <h3
                  className={`${playfairDisplay.className} mb-3 text-3xl font-semibold`}
               >
                  Social Media
               </h3>
               <div className="flex items-center justify-end gap-3 mb-7">
                  <FaFacebookSquare
                     size={32}
                     className="transition cursor-pointer hover:text-blue-500"
                  />
                  <FaInstagram
                     size={32}
                     className="transition cursor-pointer hover:text-pink-600"
                  />
                  <FaTwitterSquare
                     size={32}
                     className="transition cursor-pointer hover:text-blue-300"
                  />
               </div>
               <div
                  className={`${playfairDisplay.className} flex flex-col gap-3 text-right`}
               >
                  <h3>Subscribe to the newsletter</h3>
                  <div className="flex flex-row gap-3">
                     <input
                        type="email"
                        className="px-4 py-2 w-[350px] rounded-xl text-slate-800 font-semibold"
                     />
                     <button className="px-4 py-2 bg-gradient-to-br from-green-500 to-green-700 rounded-xl">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>
         </Container>
         <div className="py-3 text-center md:text-right bg-slate-800 text-slate-600 ">
            <Container className="px-10 text-sm md:px-5 md:text-base">
               Website designed with ❤️ by{" "}
               <Link
                  href="https://github.com/ddastardly91"
                  target="_blank"
                  className="font-semibold text-slate-500 hover:underline"
               >
                  Aaron Latham
               </Link>
            </Container>
         </div>
      </footer>
   );
}
