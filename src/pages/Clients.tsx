
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Clients = () => {
  // Array com os dados dos clientes
  const clients = [
    { name: "Audi", logo: "/lovable-uploads/marcas/audi.png" },
    { name: "Chrysler", logo: "/lovable-uploads/marcas/chrysler.jpg" },
    { name: "Mercedes-Benz", logo: "/lovable-uploads/marcas/mercedes.jpg" },
    { name: "BMW", logo: "/lovable-uploads/marcas/bmw.png" },
    { name: "Jaguar", logo: "/lovable-uploads/marcas/landrover.jpg" },
    { name: "Porsche", logo: "/lovable-uploads/marcas/porsche.jpg" },
    { name: "Ferrari", logo: "/lovable-uploads/marcas/ferrari.png" },
    { name: "Lamborghini", logo: "/lovable-uploads/marcas/lamborghini.jpg" },
    { name: "Maserati", logo: "/lovable-uploads/marcas/maserati.png" },
    { name: "Bentley", logo: "/lovable-uploads/marcas/bentley.jpg" },
    { name: "Aston Martin", logo: "/lovable-uploads/marcas/aston-.png" },
    { name: "McLaren", logo: "/lovable-uploads/marcas/maclaren.png" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="p-6 flex items-center justify-center bg-white hover:shadow-lg transition-shadow duration-300 min-h-[120px]"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Card>
            ))}
          </div>

          {/* Seção de call-to-action */}
          <div className="text-center bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-tradedark">
              Seja Nosso Parceiro
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se aos nossos clientes satisfeitos e descubra como podemos 
              ajudar sua empresa com as melhores peças e serviços do mercado.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="btn-primary">
                Entre em Contato
              </Button>
              <Button variant="outline" className="btn-outline">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
