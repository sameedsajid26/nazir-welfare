import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Heart, Gift, ArrowRight, Star } from "lucide-react";
import DonationModal from "./DonationModal";
import JoinUsModal from "./JoinUsModal";

const Projects = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  const projects = [
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Water Hand Pump Installations",
      price: "18,000 PKR",
      description: "Every community deserves easy access to clean water. We install water hand pumps in areas where water scarcity is an everyday challenge.",
      impact: "One pump brings life and opportunity to an entire community.",
      features: [
        "Clean, accessible water for entire communities",
        "Reduces water-related diseases",
        "Empowers women and children",
        "Long-lasting community impact"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Ramadan Iftar and Sehri Drives",
      price: "Support Our Drives",
      description: "In the holy month of Ramadan, we organize compassionate iftar and sehri drives to ensure that no one has to break their fast alone.",
      impact: "Creating moments of unity and spreading warmth during the sacred month.",
      features: [
        "Community iftar gatherings",
        "Pre-dawn sehri distributions",
        "Fostering unity and brotherhood",
        "Blessing families during Ramadan"
      ]
    },
    {
      icon: <Gift className="w-8 h-8" style={{color: "hsl(var(--success))"}} />,
      title: "Food and Clothing Distribution",
      price: "Year-Round Support",
      description: "Our commitment extends beyond Ramadan. Throughout the year, we distribute food and clothes to those facing hardships.",
      impact: "Providing nourishment and restoring hope to families in need.",
      features: [
        "Regular food distribution drives",
        "Clothing for all family members",
        "Emergency relief support",
        "Dignified assistance programs"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Life-Changing</span> Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Every project we undertake is designed to create lasting impact and transform lives. 
            See how your support makes a real difference in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-bl-full"></div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background shadow-md flex items-center justify-center">
                  {project.icon}
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="text-2xl font-bold text-primary">{project.price}</div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5" />
                    <p className="text-sm font-medium text-accent-foreground">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What your support provides:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => setIsDonationModalOpen(true)}
                >
                  Support This Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Nazir Welfare, every small contribution creates a monumental change. Whether it's funding 
            a water pump, supporting our Ramadan drives, or simply donating food and clothes, your 
            generosity transforms lives.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => setIsJoinUsModalOpen(true)}
          >
            <Heart className="w-5 h-5 mr-2" />
            Join Our Mission Today
          </Button>
        </div>
      </div>
      
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
      
      <JoinUsModal 
        isOpen={isJoinUsModalOpen} 
        onClose={() => setIsJoinUsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;