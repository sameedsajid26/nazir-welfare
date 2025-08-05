import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Droplets, Users, Gift } from "lucide-react";
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
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A Beacon of{" "}
            <span className="text-gradient">Hope</span>
            <br />
            For Our Communities
          </h1>
          
          {/* Mission statement */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Clean Water</h3>
              <p className="text-muted-foreground">Hand pump installations bringing life to communities</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">Nourishment</h3>
              <p className="text-muted-foreground">Ramadan drives and food distribution programs</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                <Users className="w-6 h-6" style={{color: "hsl(var(--success))"}} />
              </div>
              <h3 className="text-2xl font-bold" style={{color: "hsl(var(--success))"}}>Dignity</h3>
              <p className="text-muted-foreground">Clothing and essential support for families</p>
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