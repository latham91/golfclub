import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import { TbCircleCheckFilled } from "react-icons/tb";

export default function PricingCard({
   name,
   price,
   features,
   description,
   selected,
   popular,
}) {
   return (
      <div
         className={`p-6 text-white border-2 rounded-3xl border-slate-700 shadow-md hover:bg-slate-800/80 cursor-pointer transition ${
            selected ? "bg-slate-800/80" : ""
         }`}
      >
         <div className="flex flex-col h-full gap-5 justify-evenly">
            <div className="flex flex-col gap-5">
               <h1
                  className={`${playfairDisplay.className} flex flex-row items-center justify-between text-2xl font-semibold`}
               >
                  {name}
                  {popular && (
                     <span className="px-4 py-1 text-base rounded-full max-sm:text-center bg-gradient-to-br from-teal-500 to-teal-700">
                        Most Popular
                     </span>
                  )}
               </h1>
               <p className="text-sm md:text-base">
                  {description}
               </p>
               <ul className="flex flex-col gap-3 p-3 font-semibold bg-white/5 backdrop-blur-sm rounded-2xl">
                  {features.map((feature, index) => (
                     <li
                        key={index}
                        className="flex flex-row items-center gap-3 text-sm md:text-base"
                     >
                        <TbCircleCheckFilled size={18} />{" "}
                        {feature}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="flex flex-col gap-5">
               <div className="text-center">
                  <h2
                     className={`${playfairDisplay.className} mb-1 text-5xl font-bold`}
                  >
                     {price}
                  </h2>
                  <p>vat included.</p>
               </div>
               <div className="text-center">
                  <button
                     className={`${playfairDisplay.className} px-10 py-3 font-semibold transition bg-gradient-to-br from-teal-500 to-teal-700 border-2 rounded-xl border-white/50 hover:from-teal-600 hover:to-teal-800`}
                  >
                     Choose this plan
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
