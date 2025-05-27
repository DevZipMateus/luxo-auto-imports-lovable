
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, CreditCard } from "lucide-react";

const HowToBuy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Como Importar Peças De Carros?</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Trade Imports está no mercado há 20 anos, sendo referência no nicho de importação de peças de carros 
              e ajudando milhares de clientes a enfrentarem esse processo com bastante facilidade.
            </p>
            <p className="text-md text-gray-600 max-w-4xl mx-auto mt-4">
              Trabalhando com segurança e transparência, prezamos pela informação e qualidade para todo o nosso público. 
              Portanto, se você deseja entender melhor a trajetória da Trade Imports de como importar peças de carro, 
              basta continuar lendo!
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Por que comprar peças no exterior? */}
            <Card className="p-8 bg-white">
              <div className="flex items-center mb-6">
                <Shield className="text-tradeblue mr-3" size={32} />
                <h2 className="text-2xl font-semibold text-tradedark">
                  Por que comprar peças no exterior?
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Em alguns casos, é necessário devido a ausência de peças no território nacional, como automóveis que 
                deixaram de ser fabricados e não têm fornecedores que lidem com tal trabalho. Assim, a única saída é 
                importar peças de carros antigos para resolver o problema.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fazemos a busca entre auto peças nos Estados Unidos, por exemplo, e as trazemos para o Brasil do 
                jeitinho que você precisa. Confie na experiência de quem está há duas décadas no mercado e compre 
                no melhor site de peças importadas!
              </p>
            </Card>

            {/* Como é o processo de finalização da compra? */}
            <Card className="p-8 bg-white">
              <div className="flex items-center mb-6">
                <CreditCard className="text-tradeblue mr-3" size={32} />
                <h2 className="text-2xl font-semibold text-tradedark">
                  Como é o processo de finalização da compra?
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Você pode pagar por suas compras tanto em dinheiro quanto no cartão de crédito. Como importar peças 
                de carros pode ser visto com certo receio, trabalhamos para tornar a experiência mais simples!
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Além disso, caso se trate de uma concessionária, a Trade Imports pode emitir nota fiscal para a empresa, 
                permitindo que a compra seja possível para mais pessoas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Para que você saiba que o processo é seguro, emitimos também o prazo de entrega após a compra ser 
                efetuada, permitindo acompanhar o processo de importação das peças de perto o tempo todo.
              </p>
            </Card>
          </div>

          {/* O que a Trade Imports tem a oferecer? */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                O que a Trade Imports tem a oferecer?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Oferecemos um atendimento de qualidade para que o cliente entenda o processo de como importar peças 
                  de carros e, assim, saibamos identificar exatamente o que ele precisa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Além disso, a Trade Imports dispõe de segurança e rapidez na entrega dos produtos, oferecendo 
                  alcance nacional para que todos tenham as peças que precisam diretamente em casa sem enfrentar burocracia.
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Quando você confia nos serviços da Trade Imports, a melhor escolha de site para importar peças 
                  automotivas, seu automóvel agradece pela velocidade na entrega e qualidade dos produtos escolhidos.
                </p>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Entendeu melhor como importar peças de carros? Agora basta nos dizer o que você precisa!
                </p>
              </div>
            </div>
          </Card>

          {/* Process Steps */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-tradedark text-center">
              Nosso Processo Seguro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="bg-tradeblue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="font-semibold text-tradedark mb-2">Identificação da Peça</h3>
                <p className="text-sm text-gray-600">Atendimento personalizado para identificar exatamente o que você precisa</p>
              </div>
              <div className="p-6">
                <div className="bg-tradeblue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="font-semibold text-tradedark mb-2">Busca Internacional</h3>
                <p className="text-sm text-gray-600">Procuramos a peça nos melhores fornecedores dos EUA, Alemanha e outros países</p>
              </div>
              <div className="p-6">
                <div className="bg-tradeblue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="font-semibold text-tradedark mb-2">Entrega Segura</h3>
                <p className="text-sm text-gray-600">Processo de desembaraço ágil e entrega diretamente na sua casa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToBuy;
