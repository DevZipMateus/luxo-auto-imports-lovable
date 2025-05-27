
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Shield, Satellite, Warehouse, Truck, Package } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Política de Privacidade</h1>
          </div>

          {/* Monitoramento */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Satellite className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Monitoramento por Satélite
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Possuímos um moderno sistema de Monitoramento por satélite que acompanha sua carga em tempo real, traduzindo nossa preocupação e proporcionando eficiência e segurança.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Planejamento, logística, segurança, qualidade e eficiência são palavras que permeiam nosso dia-a-dia.
            </p>
          </Card>

          {/* Armazém */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Warehouse className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Armazém
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Com a Trade Imports você armazena suas mercadorias numa área própria, segura e adequada.
            </p>
          </Card>

          {/* Transportes Especiais */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Truck className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Transportes Especiais
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              O transporte de equipamentos sensíveis exige uma série de procedimentos e cuidados especiais. Com uma infra-estrutura completa, a Trade Imports domina, dimensiona e aplica as melhores técnicas de transportes necessárias para transportar suas cargas sensíveis de maneira tranquila, rápida e eficaz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trabalhamos com todos os tipos de cargas, especialmente equipamentos de aviação e aeronaves, partes e peças. Para isto contamos com veículos apropriados garantindo total segurança de sua carga:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li><strong>Full Sider Truck:</strong> Facilita o carregamento e descarregamento do bem transportado evitando o manuseio excessivo</li>
              <li><strong>Suspensão Pneumática:</strong> evita danos à carga</li>
              <li><strong>Total Sider:</strong> permite a carga e descarga tanto pelas laterais como pela ponte rolante</li>
              <li><strong>Exaustor de Escapamento:</strong> Evita poluição no hangar feita pela fumaça do Munck</li>
            </ul>
          </Card>

          {/* Embalagens */}
          <Card className="p-8 bg-white">
            <div className="flex items-center mb-6">
              <Package className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Embalagens
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dentro de seus variados níveis de fragilidade, volume e forma, cada item necessita de um tipo específico de embalagem. A Trade Imports oferece serviços de transportes com embalagens adequadas para cada tipo de carga transportando com extrema segurança sua carga, cumprindo com as condições de capacidade, peso e de utilização.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Planejamos e desenvolvemos embalagens especiais para equipamentos sensíveis dentro dos padrões internacionais.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PoliticaPrivacidade;
