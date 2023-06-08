import About from "@/components/about/About";
import CTA from "@/components/cta/CTA";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Container from "@/components/utility/Container";

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <Pricing />
         <CTA />
      </main>
   );
}
