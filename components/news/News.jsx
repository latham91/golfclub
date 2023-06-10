import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Container from "../utility/Container";
import NewsCard from "./NewsCard";

const news = [
   {
      title: "100 Holes in a Day",
      description:
         "Alex Fowler is attempting to do 100 holes in one day - on the 30th of June. His first round is starting at 4:30am in the morning running all day and hopefully aiming to get finished at about 9:30pm All money raised...",
      image: "/images/news-1.jpg",
      link: "/news/100-holes-in-a-day",
   },
   {
      title: "2023 English Senior Women's Amateur Championship",
      description:
         "Preston Golf Club is proud to host the English Senior Ladies Strokeplay Championship. Official practice day is Monday 19th June which you can book via the England Golf Senior Ladies Championship page. Tee Times: Tues &...",
      image: "/images/news-2.jpg",
      link: "/news/english-senior-womans-amateur-championship",
   },
   {
      title: "The Preston Challenge is Recognised",
      description:
         "The complexity and inviting challenge of Preston Golf Course has been fully recognised following publication of its Course and Slope Rating, as part of the national introduction of the World Handicap System. This...",
      image: "/images/news-3.jpg",
      link: "/news/preston-challenge-recognised",
   },
];

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
               {news.map((item) => (
                  <NewsCard data={item} />
               ))}
            </div>
         </Container>
      </div>
   );
}
