
import React from "react";
import { Truck, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImportationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-usablue to-usablue-dark text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/22b376b8-8f51-417c-9eef-bb797a29290f.png')"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white relative 
                     after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-usared
                     pb-3">
            Importação
          </h2>
          
          <p className="text-xl mb-8 text-gray-200">
            Suas cargas aéreas e marítimas podem ser enviadas para qualquer lugar do mundo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
              <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                <Truck className="text-usared" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Logística Completa</h3>
              <p className="text-gray-300">
                Todos os documentos para envio ao aeroporto são elaborados pela TRADE IMPORTS e, através do nosso departamento de desembaraço aduaneiro, liberamos a carga para embarque ao destino.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
              <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                <Package className="text-usared" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Envio Global</h3>
              <p className="text-gray-300">
                Contamos com parcerias especiais em companhias aéreas para garantir reserva com data certa de embarque de forma rápida e segura.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
              <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                <Clock className="text-usared" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Prazos Reduzidos</h3>
              <p className="text-gray-300">
                Oferecemos os melhores e menores prazos de entrega do mercado, garantindo que sua peça chegue no momento certo.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-usared hover:bg-usared-dark text-white text-lg px-8 py-6">Solicitar Cotação de Importação</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportationSection;
