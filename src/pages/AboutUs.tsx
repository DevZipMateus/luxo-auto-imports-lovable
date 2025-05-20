
import React from "react";
import Layout from "@/components/Layout";
import { Shield, Award, Truck } from "lucide-react";
import BrandCarousel from "@/components/BrandCarousel";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-tradelight">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tradedark mb-12 relative 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-tradered
                    pb-4">
            Nossa História
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-tradered">TRADE IMPORTS</strong> se especializou em atender a forte demanda de reposição de peças para carros importados de luxo.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Por atuar de maneira segura e séria, dentro das normas de comércio internacional estabelecidas pelo país, a empresa cresceu rapidamente, se tornando líder de mercado no setor de reposição e importação de peças para veículos de luxo, superluxo e alto luxo.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-tradered">TRADE IMPORTS</strong> garante seu lugar de destaque no mercado pela facilidade dos serviços, menor preço e prazo de entrega, excelentes parcerias com fornecedores e fabricantes, alta qualidade das peças de reposição e eficiência no atendimento.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                A empresa possui uma equipe de profissionais qualificados para orientar o cliente nas suas mais variadas necessidades relacionadas à manutenção de seu veículo importado, e oferece um amplo estoque de peças, como: componentes de motor, buchas, coxins, juntas, pastilhas e discos de freio, homocinéticas, amortecedores, entre outros itens disponíveis para a compra.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-tradered transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-tradered/10 p-3 rounded-full mr-4">
                    <Shield className="text-tradered" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-tradedark">Compromisso com a Qualidade</h3>
                </div>
                <p className="text-gray-700">
                  Não é por acaso que a TRADE IMPORTS é hoje uma reconhecida empresa do ramo de Importação e Autopeças, pois visa o constante aperfeiçoamento e melhoria dos serviços para a satisfação de seus clientes, parceiros e colaboradores.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-tradeblue transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-tradeblue/10 p-3 rounded-full mr-4">
                    <Truck className="text-tradeblue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-tradedark">Alcance Nacional e Internacional</h3>
                </div>
                <p className="text-gray-700">
                  Hoje em dia, além de despachar peças para todo o território nacional e Mercosul, a TRADE IMPORTS também fornece para clientes de varejo com a mesma excelência de atendimento, qualidade de produtos e prazo de entrega que oferece regionalmente.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-tradedark transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-tradedark/10 p-3 rounded-full mr-4">
                    <Award className="text-tradedark" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-tradedark">Liderança de Mercado</h3>
                </div>
                <p className="text-gray-700">
                  Com mais de 20 anos de experiência, a TRADE IMPORTS se consolidou como líder no segmento de peças para veículos importados, oferecendo um serviço completo que abrange desde a importação até a entrega final em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BrandCarousel />
      
    </Layout>
  );
};

export default AboutUs;
