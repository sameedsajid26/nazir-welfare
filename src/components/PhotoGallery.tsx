import { Badge } from "@/components/ui/badge";
import { Heart, Droplets } from "lucide-react";
import { media } from "@/lib/media";

const PhotoGallery = () => {
  const photos = [
    {
      src: media.pump1,
      alt: "Water pump installation serving the community",
      category: "Water Projects",
      description: "Hand pump bringing clean water to families",
      icon: <Droplets className="w-4 h-4" />
    },
    {
      src: media.pump2,
      alt: "Community water pump installation",
      category: "Water Projects",
      description: "Transforming lives through clean water",
      icon: <Droplets className="w-4 h-4" />
    },
    {
      src: media.seher,
      alt: "Community sehri gathering",
      category: "Community",
      description: "Sharing pre-dawn meals together",
      icon: <Heart className="w-4 h-4" />
    },
    {
      src: media.pump3,
      alt: "Water pump project completion",
      category: "Water Projects",
      description: "Community celebrating new water source",
      icon: <Droplets className="w-4 h-4" />
    },
    {
      src: media.wuduPlace,
      alt: "Wudu facility construction",
      category: "Community",
      description: "Building facilities for spiritual cleanliness",
      icon: <Heart className="w-4 h-4" />
    },
    {
      src: media.pump5,
      alt: "Water pump serving village",
      category: "Water Projects",
      description: "Clean water for entire neighborhoods",
      icon: <Droplets className="w-4 h-4" />
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

        {/* Clean 3-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Always visible gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-2">
                    <span className="flex items-center gap-2">
                      {photo.icon}
                      {photo.category}
                    </span>
                  </Badge>
                  <p className="text-white font-medium text-sm drop-shadow-lg">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">See Our Impact in Motion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                poster={media.pump4}
              >
                <source src={media.vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                poster={media.pump6}
              >
                <source src={media.vid2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Real Stories, Real Impact</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These photos and videos represent just a fraction of the lives touched by Nazir Welfare. 
            Behind each image is a family with renewed hope, a community with better access 
            to essential resources, and the beautiful spirit of giving that connects us all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;