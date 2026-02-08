import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToSimulation = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Hero onSimulateClick={scrollToSimulation} />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
