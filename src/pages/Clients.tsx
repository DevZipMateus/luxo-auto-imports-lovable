import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Clients = () => {
  // Array com todas as marcas parceiras com links
  const clients = [
    { name: "Aston Martin", logo: "/lovable-uploads/marcas/aston-.png", url: "https://www.astonmartin.com" },
    { name: "Audi", logo: "/lovable-uploads/marcas/audi.png", url: "https://www.audi.com" },
    { name: "Bentley", logo: "/lovable-uploads/marcas/bentley.jpg", url: "https://www.bentleymotors.com" },
    { name: "BMW", logo: "/lovable-uploads/marcas/bmw.png", url: "https://www.bmw.com" },
    { name: "Bosch", logo: "/lovable-uploads/marcas/Bosch.png", url: "https://www.bosch.com.br/" },
    { name: "Bugatti", logo: "/lovable-uploads/marcas/bugatti.png", url: "https://www.bugatti.com" },
    { name: "Cadillac", logo: "/lovable-uploads/marcas/cadillac.jpg", url: "https://www.cadillac.com" },
    { name: "Chrysler", logo: "/lovable-uploads/marcas/chrysler.jpg", url: "https://www.chrysler.com" },
    { name: "Corvette", logo: "/lovable-uploads/marcas/corvete.jpg", url: "https://www.chevrolet.com/performance/corvette" },
    { name: "Dodge", logo: "/lovable-uploads/marcas/dodge.png", url: "https://www.dodge.com" },
    { name: "Ferrari", logo: "/lovable-uploads/marcas/ferrari.png", url: "https://www.ferrari.com" },
    { name: "Ford", logo: "/lovable-uploads/marcas/ford-logo-1.png", url: "https://www.ford.com.br/" },
    { name: "GMC", logo: "/lovable-uploads/marcas/gmc.jpg", url: "https://www.gmc.com" },
    { name: "Hella", logo: "/lovable-uploads/marcas/hella.png", url: "https://www.hella.com" },
    { name: "Hummer", logo: "/lovable-uploads/marcas/hummer.png", url: "https://www.gmc.com/electric/hummer-ev" },
    { name: "Infiniti", logo: "/lovable-uploads/marcas/infiniti.png", url: "https://www.infiniti.com" },
    { name: "Jeep", logo: "/lovable-uploads/marcas/jeep.png", url: "https://www.jeep.com" },
    { name: "Lamborghini", logo: "/lovable-uploads/marcas/lamborghini.jpg", url: "https://www.lamborghini.com" },
    { name: "Land Rover", logo: "/lovable-uploads/marcas/landrover.jpg", url: "https://www.landrover.com" },
    { name: "Lexus", logo: "/lovable-uploads/marcas/lexus.jpg", url: "https://www.lexus.com" },
    { name: "McLaren", logo: "/lovable-uploads/marcas/maclaren.png", url: "https://www.mclaren.com" },
    { name: "Maserati", logo: "/lovable-uploads/marcas/maserati.png", url: "https://www.maserati.com" },
    { name: "Mercedes-Benz", logo: "/lovable-uploads/marcas/mercedes.jpg", url: "https://www.mercedes-benz.com" },
    { name: "Mustang", logo: "/lovable-uploads/marcas/mustang.jpg", url: "https://www.ford.com/cars/mustang" },
    { name: "Pontiac", logo: "/lovable-uploads/marcas/pontic.png", url: "https://www.gm.com" },
    { name: "Porsche", logo: "/lovable-uploads/marcas/porsche.jpg", url: "https://www.porsche.com" },
    { name: "Valeo", logo: "/lovable-uploads/marcas/Valeo.png", url: "https://www.valeo.com/pt-br/brasil/" },
    { name: "Volkswagen", logo: "/lovable-uploads/marcas/volks.jpg", url: "https://www.volkswagen.com" },
    { name: "Volvo", logo: "/lovable-uploads/marcas/volvo.jpg", url: "https://www.volvo.com" },
    { name: "Aircraft", logo: "/lovable-uploads/marcas/aircraft.jpg", url: "https://www.aircraft.com" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-12">
            <h1 className="section-title text-center">Clientes</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as principais marcas automotivas de luxo, oferecendo 
              peças e serviços de alta qualidade para nossos clientes em todo o Brasil.
            </p>
          </div>

          {/* Grid de logos dos clientes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <a 
                key={index}
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Card className="p-6 flex items-center justify-center bg-white hover:shadow-lg transition-shadow duration-300 min-h-[120px] group">
                  <div className="flex flex-col items-center justify-center h-full">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-16 max-w-full object-contain"
                    />
                    <div className="mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600">
                      Visitar <ExternalLink size={12} className="ml-1" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
