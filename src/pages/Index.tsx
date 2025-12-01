import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import OurExperience from "@/components/sections/OurExperience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CoreServices />
      <OurExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
