import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GeneralDonation from "@/components/GeneralDonation";
import RamadanDonation from "@/components/RamadanDonation";
import Projects from "@/components/Projects";
import ClothingSection from "@/components/ClothingSection";
import PhotoGallery from "@/components/PhotoGallery";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background blobs */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <GeneralDonation />
        <RamadanDonation />
        <Projects />
        <ClothingSection />
        <PhotoGallery />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
