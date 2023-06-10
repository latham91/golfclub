import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";

export default function NewsCard({ data }) {
   return (
      <div className="overflow-hidden border-4 flex flex-col justify-between hover:border-slate-500/80 transition border-slate-500/30 rounded-3xl max-h-[500px] cursor-pointer relative">
         <Image
            src={data.image}
            height={200}
            width={300}
            alt="News article"
            draggable={false}
            className="w-full transition object-fit max-h-[250px] h-full"
         />
         <div className="bottom-0 left-0 flex flex-col justify-between w-full h-full p-5 bg-slate-800">
            <div>
               <h1
                  className={`${playfairDisplay.className} mb-2 text-2xl font-semibold text-white`}
               >
                  {data.title}
               </h1>
               <p className="mb-2 text-sm text-white md:text-base">
                  {data.description}
               </p>
            </div>
            <div className="w-full font-semibold text-teal-500 hover:underline">
               Read more...
            </div>
         </div>
      </div>
   );
}
