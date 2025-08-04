import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import HowToHelp from "@/components/HowToHelp";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stories />
        <HowToHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
