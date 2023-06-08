"use client";

import Image from "next/image";
import Container from "../utility/Container";
import {
   FaFacebookSquare,
   FaInstagram,
   FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="py-12 border-t-2 bg-gradient-to-br border-white/10 from-slate-800 to-slate-900">
         <Container className="flex justify-between">
            <div className="flex flex-row gap-8">
               <Image
                  src={"/images/pgclogo.png"}
                  width={100}
                  height={100}
                  alt="Preston Golf Club Logo"
               />
               <div className="text-white">
                  <h3 className="text-2xl font-semibold">
                     Preston Golf Club
                  </h3>
                  <p>Fulwood Hall Lane</p>
                  <p>Fulwood</p>
                  <p>Preston</p>
                  <p>PR2 8DD</p>
                  <p>Tel: 01772 700011</p>
               </div>
            </div>
            <div className="text-white">
               <h3 className="mb-3 text-xl font-semibold">
                  Social Media
               </h3>
               <div className="flex items-center gap-3">
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
            </div>
         </Container>
      </footer>
   );
}
