"use client";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";
import Container from "../utility/Container";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";
import Avatar from "./Avatar";

const links = [
   { name: "Home", href: "/" },
   { name: "Our Course", href: "/course" },
   { name: "Visitors", href: "/visitors" },
   { name: "Membership", href: "/membership" },
   {
      name: "Learn & Practice",
      href: "/learn-practice",
   },
   { name: "Contact", href: "/contact" },
];

export default function Navbar() {
   const [UserMenuOpen, setUserMenuOpen] = useState(false);

   const handleCloseUserMenu = () => {
      setUserMenuOpen(false);
   };

   return (
      <nav
         className={`${playfairDisplay.className} fixed w-full z-50 bg-slate-800/90 backdrop-blur-sm py-4 px-10 lg:px-5 text-neutral-50 shadow-md`}
      >
         <Container className="flex items-center justify-between">
            <Link
               href="/"
               className="flex items-center gap-5"
            >
               <Image
                  src={"/images/pgclogo.png"}
                  width={40}
                  height={40}
                  alt="Preston Golf Club"
                  draggable={false}
               />
               {/* <span className="text-xl font-semibold">
                  Preston Golf Club
               </span> */}
            </Link>
            <div className="flex items-center gap-10">
               <ul className="items-center hidden gap-6 lg:flex">
                  {links.map((link) => (
                     <li key={link.name}>
                        <Link
                           href={link.href}
                           className="py-2 transition-all border-b-2 border-transparent cursor-pointer duration-30 hover:border-opacity-100 hover:border-white"
                        >
                           {link.name}
                        </Link>
                     </li>
                  ))}
               </ul>
               <div className="hidden lg:block">|</div>
               <div className="relative">
                  <div
                     onMouseEnter={() =>
                        setUserMenuOpen(true)
                     }
                     className="flex flex-row items-center gap-1 cursor-pointer hover:text-teal-500"
                  >
                     <div className="flex flex-row items-center gap-3">
                        <Avatar src="/images/profile.png" />
                     </div>
                     <HiOutlineChevronDown size={14} />
                  </div>
                  {UserMenuOpen && (
                     <UserMenu
                        closeMenu={handleCloseUserMenu}
                        username="Dastardly"
                     />
                  )}
               </div>
            </div>
         </Container>
      </nav>
   );
}
