
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Catalogs = () => {
  // Array com os dados dos catálogos
  const catalogs = [
    { 
      name: "ABS Sensor", 
      file: "/lovable-uploads/catalagos/abs-sensor.pdf"
    },
    { 
      name: "VVT Solenoid", 
      file: "/lovable-uploads/catalagos/vvt-solenoid.pdf"
    },
    { 
      name: "Fuel Injector", 
      file: "/lovable-uploads/catalagos/fuel-injector.pdf"
    },
    { 
      name: "Catálogo Mangueiras", 
      file: "/lovable-uploads/catalagos/catalagomagueiras.pdf"
    },
    { 
      name: "Energy Suspension", 
      file: "/lovable-uploads/catalagos/energisuspencion.pdf"
    },
    { 
      name: "Parts Peças - Suspensão", 
      file: "/lovable-uploads/catalagos/parts peças - SUSPENSÃO.pdf"
    },
    { 
      name: "Jaguar Old", 
      file: "/lovable-uploads/catalagos/jaguarold.pdf"
    },
    { 
      name: "Arnott", 
      file: "/lovable-uploads/catalagos/arnott.pdf"
    }
  ];

  const handlePdfClick = (file: string) => {
    window.open(file, '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="mb-12">
            <h1 className="section-title">Catálogos</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Acesse nossos catálogos técnicos e encontre as peças que você precisa. 
              Clique em qualquer catálogo para visualizar ou fazer o download.
            </p>
          </div>

          {/* Grid de catálogos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.map((catalog, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => handlePdfClick(catalog.file)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-tradeblue/10 transition-colors">
                      <FileText 
                        size={24} 
                        className="text-tradered group-hover:text-tradeblue transition-colors" 
                      />
                      <div className="absolute bg-tradered text-white text-xs px-2 py-1 rounded -mt-2 ml-6">
                        PDF
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-tradedark group-hover:text-tradeblue transition-colors">
                      {catalog.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Clique para visualizar
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Seção de informações adicionais */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-tradedark">
              Precisa de Mais Informações?
            </h2>
            <p className="text-gray-600 mb-6">
              Nossos catálogos contêm informações técnicas detalhadas sobre peças automotivas. 
              Caso não encontre o que procura ou precise de assistência técnica, nossa equipe 
              está pronta para ajudar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+551141986237"
                className="bg-tradeblue text-white px-6 py-2 rounded hover:bg-tradeblue-dark transition-colors font-medium"
              >
                Fale Conosco
              </a>
              <a 
                href="https://wa.me/5511983034915" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalogs;
