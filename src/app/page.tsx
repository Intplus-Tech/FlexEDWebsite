import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Modules from "@/components/sections/Modules";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <div id="Features">
        <Features />
      </div>
      <Modules />
      <Testimonials />
      <div id="CTA">
        <CTA />
      </div>
      <Footer />
    </main>
  );
}