
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { CreditCard, Plane, Ship } from "lucide-react";

const FormasPagamento = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Formas de Pagamento</h1>
          </div>

          {/* Embarques e Serviços */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <CreditCard className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Embarques e Serviços
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              No processo de importação sua carga é devidamente embalada e armazenada de acordo com as normas da ANAC. A Trade Imports faz todo o processo, desde a coleta, documentação, reserva com a companhia aérea ou marítima, armazenagem, estufagem, containers e entregas, além de trazer cargas aéreas e marítimas de qualquer lugar do mundo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              No caso de cargas perecíveis, a equipe Trade Imports tem uma forte atuação junto ao Ministério da Agricultura, o que agiliza a emissão dos documentos necessários e preserva a qualidade dos produtos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Para as cargas vivas, a Trade Imports emite certificados junto aos órgãos competentes, acompanhando o processo do embarque ao desembarque.
            </p>
          </Card>

          {/* Aérea */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Plane className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Aérea
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Seleção da modalidade de embarque mais indicado (direto ou consolidado)</li>
              <li>Coordenação do embarque no exterior</li>
              <li>Coleta da mercadoria em seu fornecedor através de nossa rede de agentes</li>
              <li>Acompanhamento junto ao exportador, agente no exterior e companhia aérea, com informações passo a passo do status de seu embarque (pré-avisos e avisos de chegada)</li>
              <li>Controle do uso de licença de importação antecipada</li>
              <li>Acompanhamento da atracação da carga até à disponibilidade para liberação</li>
            </ul>
          </Card>

          {/* Marítima */}
          <Card className="p-8 bg-white">
            <div className="flex items-center mb-6">
              <Ship className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Marítima
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Acompanhamento junto ao exportador, agente no exterior e companhia marítima, com informações passo a passo do status de seu embarque</li>
              <li>Posicionamento da frequência e tempo de trânsito das companhias marítimas</li>
              <li>Coleta da mercadoria em seu fornecedor através de nossa rede de agentes exclusivos no exterior</li>
              <li>Informação da chegada do embarque</li>
              <li>Redestinação de containers</li>
              <li>Acompanhamento junto aos órgãos competentes para a desconsolidação de cargas</li>
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FormasPagamento;
