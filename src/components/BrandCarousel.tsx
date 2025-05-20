
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

// Definição dos dados das marcas
const carBrands = [
  { name: "Aston Martin", url: "https://www.astonmartin.com", logo: "https://seeklogo.com/images/A/aston-martin-logo-1A414F2929-seeklogo.com.png" },
  { name: "Audi", url: "https://www.audi.com", logo: "https://seeklogo.com/images/A/Audi-logo-6AA8473FA9-seeklogo.com.png" },
  { name: "Bentley", url: "https://www.bentleymotors.com", logo: "https://seeklogo.com/images/B/bentley-logo-162CCB5DE3-seeklogo.com.png" },
  { name: "BMW", url: "https://www.bmw.com", logo: "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png" },
  { name: "Cadillac", url: "https://www.cadillac.com", logo: "https://seeklogo.com/images/C/cadillac-logo-735900F053-seeklogo.com.png" },
  { name: "Chrysler", url: "https://www.chrysler.com", logo: "https://seeklogo.com/images/C/Chrysler-logo-50290F1954-seeklogo.com.png" },
  { name: "Dodge", url: "https://www.dodge.com", logo: "https://seeklogo.com/images/D/dodge-logo-5AC03DEF72-seeklogo.com.png" },
  { name: "Ferrari", url: "https://www.ferrari.com", logo: "https://seeklogo.com/images/F/ferrari-logo-7935CF173C-seeklogo.com.png" },
  { name: "Hummer", url: "https://www.gmc.com/electric/hummer-ev", logo: "https://seeklogo.com/images/H/Hummer-logo-5CB8E9DB27-seeklogo.com.png" },
  { name: "Infiniti", url: "https://www.infiniti.com", logo: "https://seeklogo.com/images/I/infiniti-logo-63AE3F53E5-seeklogo.com.png" },
  { name: "Jaguar", url: "https://www.jaguar.com", logo: "https://seeklogo.com/images/J/jaguar-logo-389704DC5C-seeklogo.com.png" },
  { name: "Lamborghini", url: "https://www.lamborghini.com", logo: "https://seeklogo.com/images/L/Lamborghini-logo-8B3C97B67F-seeklogo.com.png" },
  { name: "Land Rover", url: "https://www.landrover.com", logo: "https://seeklogo.com/images/L/land-rover-logo-232D4B9931-seeklogo.com.png" },
  { name: "Lexus", url: "https://www.lexus.com", logo: "https://seeklogo.com/images/L/lexus-logo-3B9C2B3909-seeklogo.com.png" },
  { name: "Lotus", url: "https://www.lotuscars.com", logo: "https://seeklogo.com/images/L/lotus-cars-logo-25DEF9179B-seeklogo.com.png" },
  { name: "Maserati", url: "https://www.maserati.com", logo: "https://seeklogo.com/images/M/maserati-logo-4D5305AE10-seeklogo.com.png" },
  { name: "Mercedes-Benz", url: "https://www.mercedes-benz.com", logo: "https://seeklogo.com/images/M/mercedes-benz-logo-248AAF2557-seeklogo.com.png" },
  { name: "Mini Cooper", url: "https://www.mini.com", logo: "https://seeklogo.com/images/M/mini-cooper-logo-EFA75F93F8-seeklogo.com.png" },
  { name: "Porsche", url: "https://www.porsche.com", logo: "https://seeklogo.com/images/P/Porsche-logo-D7FB8DB4C3-seeklogo.com.png" },
];

const BrandCarousel = () => {
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
