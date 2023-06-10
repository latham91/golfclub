import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";

export default function NewsCard() {
   return (
      <div className="overflow-hidden border-4 hover:border-slate-500/80 transition border-slate-500/30 rounded-3xl max-h-[500px] cursor-pointer relative">
         <Image
            src="/images/news-1.jpg"
            height={200}
            width={300}
            alt="News article"
            draggable={false}
            className="w-full transition object-cover max-h-[250px]"
         />
         <div className="bottom-0 left-0 w-full p-5 bg-slate-800">
            <h1
               className={`${playfairDisplay.className} mb-2 text-2xl font-semibold text-white`}
            >
               100 Holes in a Day
            </h1>
            <p className="mb-2 text-sm text-white md:text-base">
               Alex Fowler is attempting to do 100 holes in
               one day - on the 30th of June. His first
               round is starting at 4:30am in the morning
               running all day and hopefully aiming to get
               finished at about 9:30pm All money raised...
            </p>
            <div className="w-full font-semibold text-teal-500 hover:underline">
               Read more...
            </div>
         </div>
      </div>
   );
}
