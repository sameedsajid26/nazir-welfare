import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import DonationModal from "./DonationModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Nazir Welfare</h3>
                <p className="text-sm opacity-80">Water • Nourishment • Dignity</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A beacon of hope and catalyst for community change, dedicated to transforming 
              lives through clean water, nourishing meals, and dignified support.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setIsDonationModalOpen(true)}
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#help" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  How to Help
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Our Projects */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Water Hand Pumps
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Ramadan Iftar Drives
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Food Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Clothing Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Emergency Relief
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>Block-A, Street 15</p>
                  <p>Gulshan-e-Iqbal</p>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80" />
                <a href="tel:+923001234567" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +92 300 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:info@nazirwelfare.org" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  info@nazirwelfare.org
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Nazir Welfare. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Transparency Report
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm opacity-60 italic">
              "And whoever saves a life, it is as if he has saved all of mankind." - Quran 5:32
            </p>
          </div>
        </div>
      </div>
      
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;