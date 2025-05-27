import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Definição dos dados das marcas com imagens locais
const carBrands = [
  { name: "Aston Martin", url: "https://www.astonmartin.com", logo: "/lovable-uploads/marcas/aston-.png" },
  { name: "Audi", url: "https://www.audi.com", logo: "/lovable-uploads/marcas/audi.png" },
  { name: "Bentley", url: "https://www.bentleymotors.com", logo: "/lovable-uploads/marcas/bentley.jpg" },
  { name: "BMW", url: "https://www.bmw.com", logo: "/lovable-uploads/marcas/bmw.png" },
  { name: "Bugatti", url: "https://www.bugatti.com", logo: "/lovable-uploads/marcas/bugatti.png" },
  { name: "Cadillac", url: "https://www.cadillac.com", logo: "/lovable-uploads/marcas/cadillac.jpg" },
  { name: "Chrysler", url: "https://www.chrysler.com", logo: "/lovable-uploads/marcas/chrysler.jpg" },
  { name: "Corvette", url: "https://www.chevrolet.com/performance/corvette", logo: "/lovable-uploads/marcas/corvete.jpg" },
  { name: "Dodge", url: "https://www.dodge.com", logo: "/lovable-uploads/marcas/dodge.png" },
  { name: "Ferrari", url: "https://www.ferrari.com", logo: "/lovable-uploads/marcas/ferrari.png" },
  { name: "GMC", url: "https://www.gmc.com", logo: "/lovable-uploads/marcas/gmc.jpg" },
  { name: "Hella", url: "https://www.hella.com", logo: "/lovable-uploads/marcas/hella.png" },
  { name: "Hummer", url: "https://www.gmc.com/electric/hummer-ev", logo: "/lovable-uploads/marcas/hummer.png" },
  { name: "Infiniti", url: "https://www.infiniti.com", logo: "/lovable-uploads/marcas/infiniti.png" },
  { name: "Jeep", url: "https://www.jeep.com", logo: "/lovable-uploads/marcas/jeep.png" },
  { name: "Lamborghini", url: "https://www.lamborghini.com", logo: "/lovable-uploads/marcas/lamborghini.jpg" },
  { name: "Land Rover", url: "https://www.landrover.com", logo: "/lovable-uploads/marcas/landrover.jpg" },
  { name: "Lexus", url: "https://www.lexus.com", logo: "/lovable-uploads/marcas/lexus.jpg" },
  { name: "McLaren", url: "https://www.mclaren.com", logo: "/lovable-uploads/marcas/maclaren.png" },
  { name: "Maserati", url: "https://www.maserati.com", logo: "/lovable-uploads/marcas/maserati.png" },
  { name: "Mercedes-Benz", url: "https://www.mercedes-benz.com", logo: "/lovable-uploads/marcas/mercedes.jpg" },
  { name: "Mustang", url: "https://www.ford.com/cars/mustang", logo: "/lovable-uploads/marcas/mustang.jpg" },
  { name: "Pontiac", url: "https://www.gm.com", logo: "/lovable-uploads/marcas/pontic.png" },
  { name: "Porsche", url: "https://www.porsche.com", logo: "/lovable-uploads/marcas/porsche.jpg" },
  { name: "Volkswagen", url: "https://www.volkswagen.com", logo: "/lovable-uploads/marcas/volks.jpg" },
  { name: "Volvo", url: "https://www.volvo.com", logo: "/lovable-uploads/marcas/volvo.jpg" },
  { name: "Wunder", url: "https://www.wunder.com", logo: "/lovable-uploads/marcas/wunder.png" },
  { name: "Aircraft", url: "https://www.aircraft.com", logo: "/lovable-uploads/marcas/aircraft.jpg" },
];

const BrandCarousel = () => {
  const [api, setApi] = useState<any>(null);
  
  // Plugin de autoplay com 2 segundos de intervalo e loop contínuo
  const autoplayOptions = {
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  
  const autoplay = React.useRef(
    Autoplay(autoplayOptions)
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Marcas Parceiras</h2>
        
        <div className="relative px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps"
            }}
            plugins={[autoplay.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carBrands.map((brand, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/4 lg:basis-1/6">
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block bg-white rounded-lg p-4 h-full hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        className="h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600">
                        Visitar <ExternalLink size={12} className="ml-1" />
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 bg-white border border-gray-200 shadow-sm hover:bg-gray-50" />
            <CarouselNext className="-right-2 bg-white border border-gray-200 shadow-sm hover:bg-gray-50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
