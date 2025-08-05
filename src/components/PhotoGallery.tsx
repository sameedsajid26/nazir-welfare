import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplets, Gift } from "lucide-react";

const PhotoGallery = () => {
  const photos = [
    {
      src: "/water-pump-project-1.jpg",
      alt: "Water pump installation bringing clean water to rural community",
      category: "Water Projects",
      description: "New water pump installation in village Mahmoodabad",
      icon: <Droplets className="w-4 h-4" />
    },
    {
      src: "/food-distribution-1.jpg",
      alt: "Food distribution drive serving families in need",
      category: "Food Distribution",
      description: "Community food distribution program",
      icon: <Gift className="w-4 h-4" />
    },
    {
      src: "/water-pump-project-2.jpg",
      alt: "Children accessing clean water from community pump",
      category: "Water Projects", 
      description: "Children celebrating access to clean water",
      icon: <Droplets className="w-4 h-4" />
    },
    {
      src: "/ramadan-iftar-1.jpg",
      alt: "Ramadan iftar distribution bringing community together",
      category: "Ramadan Drive",
      description: "Iftar distribution during holy month of Ramadan",
      icon: <Heart className="w-4 h-4" />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Work in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See the real impact of your support through these moments captured from our projects. 
            Every photo tells a story of hope, transformation, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 text-foreground border-border">
                    <span className="flex items-center gap-2">
                      {photo.icon}
                      {photo.category}
                    </span>
                  </Badge>
                </div>
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{photo.description}</h3>
                <p className="text-muted-foreground text-sm">
                  Your support makes these moments of transformation possible. Each project 
                  creates lasting change in the lives of families and communities.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Real Stories, Real Impact</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These photos represent just a fraction of the lives touched by Nazir Welfare. 
            Behind each image is a family with renewed hope, a community with better access 
            to essential resources, and the beautiful spirit of giving that connects us all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;