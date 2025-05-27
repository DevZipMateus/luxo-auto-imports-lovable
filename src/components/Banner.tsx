
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
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-usanavy via-usanavy to-usablue-dark overflow-hidden">
      {/* Background Images with Rotation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-usanavy/60 via-usanavy/50 to-usablue/40 z-10"></div>
        {/* Background effect with patriotic elements */}
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute -right-16 top-20 w-80 h-80 rounded-full bg-usared/40 blur-3xl animate-float"></div>
          <div className="absolute left-40 bottom-20 w-60 h-60 rounded-full bg-usablue/40 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-20 max-w-full">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Especialista em Peças para Veículos de Luxo Importados
          </h1>
          <p className="text-lg md:text-xl text-usasilver mb-8 max-w-3xl">
            Há mais de 20 anos fornecendo peças de alta qualidade para as principais marcas automotivas premium do mercado.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button 
              className="btn-primary text-base sm:text-lg"
              onClick={() => scrollToSection('our-history')}
            >
              Saiba Mais
            </Button>
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors text-base sm:text-lg px-6 py-3"
              onClick={() => scrollToSection('featured-products')}
            >
              Confira Nossos Produtos
            </Button>
            <a 
              href="https://www.tradeimports.com.br/loja2/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-usared text-white hover:bg-usared-dark transition-colors text-base sm:text-lg px-6 py-3">
                Acesse Nossa Loja
              </Button>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4 lg:gap-6">
            {/* Expanded luxury car brand logos */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {[
                'BMW', 'Mercedes', 'Porsche', 'Audi', 'Land Rover',
                'Ferrari', 'Lamborghini', 'Maserati', 'Bentley', 'Jaguar',
                'McLaren', 'Aston Martin', 'Bugatti', 'Rolls-Royce'
              ].map((brand) => (
                <div 
                  key={brand} 
                  className="bg-white/20 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-white font-medium text-sm transition-transform hover:scale-105"
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
