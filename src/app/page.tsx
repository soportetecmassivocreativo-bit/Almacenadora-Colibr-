import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import ProcessMap from "@/components/ProcessMap/ProcessMap";
import Services from "@/components/Services/Services";
import CargoTypes from "@/components/CargoTypes/CargoTypes";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <ProcessMap />
      <Services />
      <CargoTypes />
      <ContactSection />
      <Footer />
    </main>
  );
}
