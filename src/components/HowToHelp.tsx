import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart, Share2, Banknote, Clock } from "lucide-react";

const HowToHelp = () => {
  const helpWays = [
    {
      icon: <Banknote className="w-6 h-6 text-primary" />,
      title: "One-Time Donation",
      description: "Make an immediate impact with a single contribution to any of our projects.",
      action: "Donate Now",
      highlight: false
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Monthly Giving",
      description: "Join our sustaining supporters with recurring monthly donations for ongoing impact.",
      action: "Set Up Monthly Giving",
      highlight: true
    },
    {
      icon: <Users className="w-6 h-6 text-success" style={{color: "hsl(var(--success))"}} />,
      title: "Volunteer With Us",
      description: "Join our team in the field and help us distribute aid and install water pumps.",
      action: "Become a Volunteer",
      highlight: false
    },
    {
      icon: <HandHeart className="w-6 h-6 text-primary" />,
      title: "Corporate Partnership",
      description: "Partner with us for large-scale community impact through corporate social responsibility.",
      action: "Explore Partnerships",
      highlight: false
    },
    {
      icon: <Share2 className="w-6 h-6 text-accent" />,
      title: "Spread the Word",
      description: "Share our mission with your network and help us reach more people in need.",
      action: "Share Our Story",
      highlight: false
    },
    {
      icon: <Heart className="w-6 h-6 text-success" style={{color: "hsl(var(--success))"}} />,
      title: "Fundraising Campaign",
      description: "Start your own fundraising campaign for birthdays, events, or special occasions.",
      action: "Start Fundraising",
      highlight: false
    }
  ];

  return (
    <section id="help" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every <span className="text-gradient">Bit of Help</span> Counts
          </h2>
          <p className="text-lg text-muted-foreground">
            There are many ways to support our mission. Whether through donations, volunteering, 
            partnerships, or simply spreading awareness, your contribution makes a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {helpWays.map((way, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-lg transition-all duration-300 ${
                way.highlight ? 'ring-2 ring-accent/50 bg-accent/5' : ''
              }`}
            >
              {way.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-background shadow-md flex items-center justify-center">
                  {way.icon}
                </div>
                <CardTitle className="text-lg">{way.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {way.description}
                </CardDescription>
                
                <Button 
                  variant={way.highlight ? "default" : "outline"}
                  className={`w-full ${way.highlight ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                >
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact statement */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Your Impact in Numbers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₨18,000</div>
              <p className="text-sm text-muted-foreground">Funds one complete water hand pump</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <p className="text-sm text-muted-foreground">Families served per iftar drive</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: "hsl(var(--success))"}} >Year-Round</div>
              <p className="text-sm text-muted-foreground">Food & clothing distribution</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Every contribution, no matter the size, creates ripple effects of positive change 
            in our communities. Together, we can transform lives and build a better future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;