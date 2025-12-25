import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Branches from "@/components/Branches";
import Franchise from "@/components/Franchise";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Calculator />
      <Branches />
      <Franchise />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
