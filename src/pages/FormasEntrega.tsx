
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, AlertTriangle } from "lucide-react";

const FormasEntrega = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Formas de Entrega</h1>
          </div>

          {/* Processo de Entrega */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Truck className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Processo de Entrega
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>As entregas são realizadas de segunda a sexta, das 8h às 15h.</p>
              <p>É indispensável que no endereço solicitado esteja presente uma pessoa responsável para receber o pedido e assinar o comprovante de entrega.</p>
              <p>A entrega poderá ser feita a terceiros, como parentes e porteiros, desde que eles aceitem o recebimento do produto, assinem o comprovante e apresentem documento de identificação. Esse procedimento é fundamental para garantir a integridade e rastreamento do seu pedido.</p>
              <p>Nossas entregas são realizadas por transportadoras contratadas ou pelos Correios, dependendo do CEP de entrega e do(s) produto(s) adquirido(s).</p>
              <p>Fazemos entregas de todos os produtos disponíveis à venda no site, para todo Brasil.</p>
              <p>Dados incorretos ou incompletos podem gerar atraso desnecessário. Portanto, atualize o cadastro antes de concluir a compra.</p>
              <p>Os produtos não sofrem qualquer alteração em nosso estoque, eles são enviados ao cliente exatamente como nos foram entregues pelo fabricante.</p>
            </div>
          </Card>

          {/* Agendamento de Entrega */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Clock className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Agendamento de Entrega
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Não é possível agendar data e horário para entregas, uma vez que não podemos antecipar o roteiro escolhido para cada região. No entanto, se não houver ninguém no local para receber não haverá mais tentativas de entrega e o produto deverá ser enviado por correio a pagar.
            </p>
          </Card>

          {/* Entrega Parcial */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <MapPin className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Entrega Parcial do Pedido
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Em algumas situações, a entrega de um pedido pode ser realizada em duas remessas, conforme o tamanho dos produtos e sua disponibilidade em estoque.
            </p>
          </Card>

          {/* Situações para Recusa */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="text-red-500 mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Recuse o Recebimento Nas Seguintes Situações
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Embalagem aberta ou avariada</li>
              <li>Lacre do fabricante rompido</li>
              <li>A descrição da nota fiscal, não é a mesma do produto</li>
              <li>Produto avariado</li>
              <li>Produto em desacordo com o pedido</li>
              <li>Falta de acessórios</li>
            </ul>
          </Card>

          {/* Atenção */}
          <Card className="p-8 bg-tradeblue text-white">
            <h2 className="text-2xl font-semibold mb-4">Atenção</h2>
            <p className="leading-relaxed mb-4">
              Em caso de problemas com a mercadoria, entrega e informação acima entre em contato com a nossa Central de Atendimento ao Cliente.
            </p>
            <p className="font-semibold">
              Unidade São Paulo Brasil - Fone: +55 (11) 4198-6237
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FormasEntrega;
