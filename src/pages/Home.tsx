import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import EquipmentSection from "../components/EquipmentSection"
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";



const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>
        <Hero />

        <Stats />

        <EquipmentSection />

        <Services />

        <About />

        <WhyChooseUs />

        <CTASection />

        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />

    </div>
  );
};

export default Home;