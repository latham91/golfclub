import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const raleway = Raleway({
   subsets: ["latin"],
   weight: [
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
   ],
});

export const metadata = {
   title: "Preston Golf Club - Home",
   description:
      "Picturesque golf course in Preston, Lancashire.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${raleway.className} bg-slate-900 relative`}
         >
            <Navbar />
            {children}
            <Footer />

            <Image
               src={"/images/about-abstract.png"}
               fill
               className="absolute top-0 left-0 w-full h-full opacity-20 object-fit -z-10 mix-blend-plus-lighter"
               draggable={false}
            />
         </body>
      </html>
   );
}
