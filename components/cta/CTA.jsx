import Image from "next/image";
import Container from "../utility/Container";

export default function CTA() {
   return (
      <div className="mb-48">
         <h2 className="mb-24 text-5xl font-bold text-center text-white">
            Book Now for an Unforgettable
            <br />
            Golfing Experience!
         </h2>
         <Container className="relative flex justify-between border-2 rounded-3xl shadow-md border-slate-500 h-[325px] bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900">
            <div className="w-3/5">
               <Image
                  src={"/images/cta-image.png"}
                  height={700}
                  width={700}
                  alt="Golfer swinging club"
                  draggable={false}
                  className="absolute -left-32 -top-40"
               />{" "}
            </div>
            <div className="flex flex-col px-6 py-12 justify-evenly">
               <p className="mb-10 text-lg font-semibold text-center text-white">
                  Book now to secure your tee time and
                  embark on an unforgettable golfing
                  adventure. Experience the tranquility of
                  our meticulously crafted course, where
                  every swing and putt becomes a moment of
                  pure bliss.
                  <br />
                  <br />
                  Don't miss out on creating lasting
                  memories. Reserve your spot today!
               </p>
               <button className="py-3 font-semibold text-white transition bg-gradient-to-br from-green-500 to-green-700 rounded-xl px-7 hover:opacity-90">
                  Reserve your tee time!
               </button>
            </div>
         </Container>
      </div>
   );
}
