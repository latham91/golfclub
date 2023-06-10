import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Container from "../utility/Container";
import NewsCard from "./NewsCard";

export default function News() {
   return (
      <div className="py-5">
         <Container className="px-5 mb-12">
            <h1
               className={`${playfairDisplay.className} mb-5 text-3xl text-white md:text-6xl font-bold text-center`}
            >
               Club News
            </h1>
            <p className="mb-12 text-sm text-center text-white md:text-base">
               Explore the latest updates and exclusive news
               directly from Preston Golf Club. <br />
               Stay informed about upcoming events,
               tournaments and exciting developments within
               our golfing community.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
               <NewsCard />
               <NewsCard />
               <NewsCard />
            </div>
         </Container>
      </div>
   );
}
