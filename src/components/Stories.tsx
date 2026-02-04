import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Star, Heart, Droplets, Users, Gift } from "lucide-react";

const Stories = () => {
  const testimonials = [
    {
      name: "Fatima Bibi",
      location: "Village Mahmoodabad",
      story: "The water pump installed by Nazir Welfare has transformed our entire community. Now, over 50 families have easy access to clean water right in our neighborhood.",
      impact: "Water Hand Pump Project",
      icon: <Droplets className="w-5 h-5 text-primary" />
    },
    {
      name: "Mohammad Ali",
      location: "Karachi",
      story: "Last Ramadan, Nazir Welfare organized a beautiful iftar gathering in our area. Over 200 families came together to break their fast. It wasn't just about the food - it was about unity, community spirit, and the joy of sharing.",
      impact: "Ramadan Iftar Drive",
      icon: <Gift className="w-5 h-5 text-accent" />
    },
    {
      name: "Ayesha Begum",
      location: "Lahore",
      story: "When Nazir Welfare distributed clothes in our school it brought so much happiness to families. Students and teaches received eid clothes, and parents got quality garments for daily wear. The community feels valued and cared for.",
      impact: "Clothing Distribution",
      icon: <Users className="w-5 h-5" style={{color: "hsl(var(--success))"}} />
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stories of <span className="text-gradient">Hope</span> and Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our work has transformed communities and brought positive change. 
            These stories reflect the real impact of your support on families and neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full"></div>
              
              <CardHeader className="relative">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {testimonial.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.story}"
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    {testimonial.icon}
                    <span className="text-sm font-medium text-accent">
                      {testimonial.impact}
                    </span>
                  </div>
                </div>
                
                {/* Star rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community impact stats */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Our Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Families Supported</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">200+</div>
              <p className="text-sm text-muted-foreground">Water Pumps Installed</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{color: "hsl(var(--success))"}} >1000+</div>
              <p className="text-sm text-muted-foreground">Meals Distributed</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Communities Reached</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These numbers represent real families, real communities, and real lives transformed. 
              Each statistic is a story of hope, dignity, and positive change made possible by 
              supporters like you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
