import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Container from "../utility/Container";
import PricingCard from "./PricingCard";

export default function Pricing() {
   const memberships = [
      {
         name: "5-day Membership",
         description:
            "For the social golfer, our membership provides weekday access to our splendid course and facilities, fostering camaraderie and friendly competition akin to our esteemed 6-day option.",
         features: [
            "5-day access to the course",
            "Weekday access to the clubhouse",
            "Entry to weekday & sunday competitions",
            "Access to early morning tee-times",
            "Access to Top Tracer driving range",
            "Access to chipping greens",
            "Discounted purchases at the clubhouse",
         ],
         price: "£1,040.00",
         popular: false,
         selected: false,
      },
      {
         name: "Full Membership",
         description:
            "Enjoy unrestricted access to our remarkable course and facilities, available seven days a week. Embrace endless opportunities to play and compete to your heart's content.",
         features: [
            "7-day access to the course",
            "Unlimited access to the clubhouse",
            "Unrestricted access to all competitions",
            "Access to early morning tee-times",
            "Access to Top Tracer driving range",
            "Access to chipping greens",
            "Discounted purchases at the clubhouse",
         ],
         price: "£1,301.00",
         popular: true,
         selected: true,
      },
      {
         name: "6-day Membership",
         description:
            "Experience unhindered access to our remarkable course and facilities, with the exception of Saturdays, which serve as the vibrant stage for our men's main competition.",
         features: [
            "6-day access to the course",
            "Unlimited access to the clubhouse",
            "Entry to weekday & sunday competitions",
            "Access to early morning tee-times",
            "Access to Top Tracer driving range",
            "Access to chipping greens",
            "Discounted purchases at the clubhouse",
         ],
         price: "£1,171.00",
         popular: false,
         selected: false,
      },
   ];

   return (
      <Container className="pb-20">
         <div className="flex flex-col items-center justify-center mb-16">
            <h1
               className={`${playfairDisplay.className} py-5 text-6xl font-bold text-white`}
            >
               Membership Options
            </h1>
            <p className="mb-5 text-center text-white">
               Amidst life's tapestry, a yearning for change
               arises. Rekindle your love for golf, long
               dormant. Or embark on a new journey,
               embracing the game's allure. Now, join our
               ever-evolving golf club—a friendly sanctuary.
               Together, we'll script triumphs, forge bonds
               on our crafted course. Unleash potential,
               find belonging, begin your odyssey here.
            </p>
            <p className="text-xs italic text-center text-white font-extralight">
               Subscription rates will be pro rata on a
               quarterly basis as follows: - From June 1st -
               75% of the full year rate - From Sept 1st -
               50% of the full year rate - From Dec 1st -
               25% of the full year rate (Pro rata eligible
               on all playing categories - excluding
               Flexible, Junior and Student))
            </p>
         </div>
         <div className="grid grid-cols-3 gap-5 mb-10">
            {memberships.map((membership, index) => (
               <PricingCard
                  key={index}
                  name={membership.name}
                  description={membership.description}
                  features={membership.features}
                  price={membership.price}
                  popular={membership.popular}
                  selected={membership.selected}
               />
            ))}
         </div>
      </Container>
   );
}
