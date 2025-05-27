
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/lovable-uploads/4-1-.png",
    "/lovable-uploads/banner-1-.png",
    "/lovable-uploads/banner-2-.png",
    "/lovable-uploads/banner_1.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative bg-gradient-to-r from-tradedark via-tradedark to-black overflow-hidden">
      {/* Background Images with Rotation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-70' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-tradedark/90 via-tradedark/80 to-black/70 z-10"></div>
        {/* Background effect with car part silhouettes */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute -right-16 top-20 w-80 h-80 rounded-full bg-tradered/30 blur-3xl animate-float"></div>
          <div className="absolute left-40 bottom-20 w-60 h-60 rounded-full bg-tradeblue/30 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Especialista em Peças para Veículos de Luxo Importados
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Há mais de 20 anos fornecendo peças de alta qualidade para as principais marcas automotivas premium do mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">Saiba Mais</Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
              Confira Nossos Produtos
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6">
            {/* Luxury car brand logos */}
            <div className="flex flex-wrap gap-6">
              {['BMW', 'Mercedes', 'Porsche', 'Audi', 'Land Rover'].map((brand) => (
                <div 
                  key={brand} 
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium text-sm transition-transform hover:scale-105"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
