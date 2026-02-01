import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { media } from "@/lib/media";
import DonationModal from "./DonationModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-14 md:h-16 flex-shrink-0">
              <img 
                src={media.logoFinal} 
                alt="Nazir Welfare" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('ramadan-donation')}
              className="text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 transition-colors"
            >
              🌙 Ramadan
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setIsDonationModalOpen(true)}
            >
              <Heart className="w-4 h-4 mr-2" />
              Bank Details
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('donate')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Donate
              </button>
              <button
                onClick={() => scrollToSection('ramadan-donation')}
                className="text-left text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 transition-colors"
              >
                🌙 Ramadan Donation
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                onClick={() => setIsDonationModalOpen(true)}
              >
                <Heart className="w-4 h-4 mr-2" />
                Bank Details
              </Button>
            </div>
          </nav>
        )}
      </div>
      
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </header>
  );
};

export default Header;