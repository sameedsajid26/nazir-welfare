import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Star, Heart, ArrowUp, Sparkles } from "lucide-react";
import { media } from "@/lib/media";

const RamadanDonation = () => {
  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ramadan-donation" className="py-20 relative overflow-hidden">
      {/* Ramadan-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-purple-900/10 to-indigo-900/20 dark:from-amber-900/40 dark:via-purple-900/30 dark:to-indigo-900/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] text-amber-500/20 dark:text-amber-400/30">
          <Moon className="w-32 h-32" />
        </div>
        <div className="absolute top-20 right-[15%] text-amber-500/15 dark:text-amber-400/25">
          <Star className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-[20%] text-amber-500/15 dark:text-amber-400/25">
          <Star className="w-12 h-12" />
        </div>
        <div className="absolute top-40 right-[25%] text-amber-500/10 dark:text-amber-400/20">
          <Star className="w-8 h-8" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <Moon className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Ramadan Special</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">Ramadan</span> Iftar & Sehri Drives
          </h2>
          <p className="text-lg text-muted-foreground">
            The blessed month of Ramadan is the perfect time to multiply your blessings. 
            Join us in feeding the fasting and bringing joy to families in need.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={media.ramadanDrive} 
              alt="Ramadan Iftar Drive" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold mb-2">Community Iftar</h3>
              <p className="text-white/80 text-sm">Bringing families together to break their fast</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={media.clothingDrive}
              alt="Clothing Distribution"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold mb-2">Clothing Distribution</h3>
              <p className="text-white/80 text-sm">Providing dignity through quality garments</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left side - Info cards */}
          <div className="space-y-6">
            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Heart className="w-5 h-5" />
                  Why Donate in Ramadan?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Multiplied Rewards</h4>
                    <p className="text-sm text-muted-foreground">Good deeds in Ramadan are rewarded 70 times more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Feed the Fasting</h4>
                    <p className="text-sm text-muted-foreground">Whoever feeds a fasting person earns the same reward</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sadaqah Jariyah</h4>
                    <p className="text-sm text-muted-foreground">Water pumps provide ongoing charity for years to come</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/20 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "The best charity is that given in Ramadan."
                  </blockquote>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">— Prophet Muhammad ﷺ</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - CTA */}
          <div className="text-center lg:text-left">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <Moon className="w-16 h-16 text-amber-500 mx-auto lg:mx-0 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Support Our Ramadan Initiatives
              </h3>
              <p className="text-muted-foreground mb-6">
                Your donation helps us organize iftar gatherings, sehri distributions, 
                and provide essential support to families during this blessed month.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-sm">PKR 1,000 feeds a family iftar</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-sm">PKR 5,000 provides a week of meals</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-sm">PKR 18,000 installs a water pump</span>
                </div>
              </div>
              <Button 
                onClick={scrollToDonate}
                className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-6 text-lg"
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Use the donation form above to contribute to our Ramadan drives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RamadanDonation;
