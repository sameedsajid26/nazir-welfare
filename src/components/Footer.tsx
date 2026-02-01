import { Phone, Instagram } from "lucide-react";
import { media } from "@/lib/media";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="h-20 flex-shrink-0">
              <img 
                src={media.logoFinal} 
                alt="Nazir Welfare" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('ramadan-donation')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Ramadan
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('clothing')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Clothing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Contact
            </button>
          </nav>

          {/* Contact & Social */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+923002332718" 
              className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              +92 300 2332718
            </a>
            <a 
              href="https://www.instagram.com/nazirwelfare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-background/20 text-center">
          <p className="text-sm opacity-60">
            © {currentYear} Nazir Welfare. Sub Kay Leye.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
