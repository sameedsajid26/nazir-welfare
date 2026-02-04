import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Heart, Users, Gift, Sparkles } from "lucide-react";
import { media } from "@/lib/media";

const ClothingSection = () => {
  const initiatives = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Seasonal Clothing Drives",
      description: "We organize clothing drives during winter and Eid to provide warm clothes and festive attire to families in need."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "School Uniforms",
      description: "Helping children attend school with dignity by providing complete school uniform sets."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "New Clothes for Eid",
      description: "Every child deserves to celebrate Eid with new clothes. We make sure no child is left behind."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Family Clothing Packages",
      description: "Complete clothing packages for entire families, ensuring everyone has clean, quality garments."
    }
  ];

  return (
    <section id="clothing" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Dignity Through Clothing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Clothing</span> for Those in Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Everyone deserves to dress with dignity. Our clothing initiatives ensure that families have access to 
            quality garments throughout the year, bringing warmth and joy to countless lives.
          </p>
        </div>

        {/* Featured images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={media.clothing1}
              alt="Clothing Distribution Drive"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Our Clothing Drives in Action</h3>
              <p className="text-white/80">Volunteers distributing clothes to families in need</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={media.clothing2}
              alt="Clothing distribution to families in need"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-emerald-500/20 hover:border-emerald-500/40 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {initiative.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{initiative.title}</h3>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Restoring Dignity, One Garment at a Time</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Your donations help us purchase new clothes and collect gently used garments to distribute 
            among families who need them most. Together, we can ensure no one faces the cold without protection.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/80">Families Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2,000+</div>
              <div className="text-sm text-white/80">Garments Distributed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Every</div>
              <div className="text-sm text-white/80">Season We Help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;

