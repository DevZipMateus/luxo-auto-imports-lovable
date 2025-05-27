import React from "react";
import { Clock, Award, Truck } from "lucide-react";

const OurHistory = () => {
  return (
    <section id="our-history" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Nossa História</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-usablue p-3 rounded-full mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Compromisso</h3>
            </div>
            <p className="text-gray-600">
              Compromisso em fornecer soluções de alta qualidade e superar as expectativas de nossos clientes.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-usared p-3 rounded-full mr-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Qualidade</h3>
            </div>
            <p className="text-gray-600">
              Garantimos a qualidade superior de nossas peças e serviços, assegurando a satisfação e a confiança de nossos clientes.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-usanavy p-3 rounded-full mr-4">
                <Truck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Experiência</h3>
            </div>
            <p className="text-gray-600">
              Com mais de 20 anos de experiência, somos especialistas em atender às necessidades do mercado de veículos de luxo importados.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Na Trade Imports, nossa história é construída sobre a paixão por automóveis de luxo e a busca incessante pela excelência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
