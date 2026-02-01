import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Droplets, Users, Gift } from "lucide-react";
import { media } from "@/lib/media";
import DonationModal from "./DonationModal";

const Hero = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={media.pump4} 
          alt="Water pump installation" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            A Beacon of{" "}
            <span className="text-accent">Hope</span>
            <br />
            For Our Communities
          </h1>
          
          {/* Mission statement */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Welcome to Nazir Welfare – a catalyst for community change. We transform lives by 
            addressing the essential needs of water, nourishment, and dignity. With your support, 
            we bring clean water, nourishing meals, and much-needed relief to communities in need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              onClick={() => setIsDonationModalOpen(true)}
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('projects')}
            >
              Learn More About Our Work
            </Button>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/80 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Clean Water</h3>
              <p className="text-white/80 text-sm">Hand pump installations bringing life to communities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/80 flex items-center justify-center">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Nourishment</h3>
              <p className="text-white/80 text-sm">Ramadan drives and food distribution programs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-600/80 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dignity</h3>
              <p className="text-white/80 text-sm">Clothing and essential support for families</p>
            </div>
          </div>
        </div>
      </div>
      
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;