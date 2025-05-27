
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Plane, Ship, Warehouse, Clock, Shield } from "lucide-react";

const PrazosEntrega = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Prazos de Entrega</h1>
          </div>

          {/* Importação */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Plane className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Importação
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Suas cargas aéreas e marítimas podem ser enviadas para qualquer lugar do mundo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Todos os documentos para envio ao aeroporto são elaborados pela Trade Imports e, através do nosso departamento de desembaraço aduaneiro, liberamos a carga para embargue ao destino. Contamos com parcerias especiais das companhias aéreas para garantir reserva com data certa de embarque de forma rápida e segura.
            </p>
          </Card>

          {/* Logística */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Warehouse className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Logística
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Antes mesmo do embarque, a equipe logística da Trade Imports faz todo o planejamento estratégico. Assim, cada etapa é pensada e o processo flui naturalmente. A junção de todos os serviços prestados pela Trade Imports é a otimização da logística ideal. Para isso, há o acompanhamento, controle e administração, com a execução das providências pertinentes, em todas as suas etapas.
            </p>
          </Card>

          {/* Desembaraço */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Shield className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Desembaraço e Consultoria Aduaneira
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Profissionais atuantes em alfândegas e entrepostos aduaneiros de todo o Brasil e ao redor do mundo, agilizam as questões burocráticas e efetuam os registros necessários de importação e exportação, de acordo com as leis vigentes, permitindo que os clientes usufruam dos benefícios legais para produtos diversos e especificidades.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cada detalhe é cuidadosamente analisado sob os aspectos normativos, fiscais, financeiros e logísticos para garantir o sucesso da operação. A Trade Imports presta consultoria na importação e na exportação, além de processar todos os desembaraços eletronicamente, através de um sofisticado sistema on-line e garantir o acompanhamento em todas as etapas do processo.
            </p>
          </Card>

          {/* Armazém */}
          <Card className="p-8 bg-white mb-8">
            <h2 className="text-2xl font-semibold text-tradedark mb-4">Armazém</h2>
            <p className="text-gray-600 leading-relaxed">
              Com a Trade Imports você armazena suas mercadorias numa área própria, segura e adequada.
            </p>
          </Card>

          {/* Importação com Segurança */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Clock className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Importação com Segurança e Rapidez
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Efetuamos importação de peças em tempo recorde <strong>"prazo médio 5 á 10 dias úteis no Brasil"</strong>, através de nosso DEALER na América e Europa. *prazo previsto poderá exceder em caso de interferência alfandegária de Receita Federal.
            </p>
          </Card>

          {/* Remessas */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Ship className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Remessas
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              As entregas são realizadas através dos serviços IMPORTAÇÃO FORMAL, DHL, FEDEX, JADLOG, SEDEX NORMAL (2 dias úteis) SEDEX 10, Moto-boy e Transportadoras conveniadas a Trade Imports.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Entregas em todo território nacional / principais capitais podem ser realizadas no dia seguinte dependendo da disponibilidade do produto em nosso estoque.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Os custos com os fretes poderão ser negociados no ato da compra. O procedimento para entrega será iniciado após a confirmação via e-mail ou fax com cópia do comprovante de depósito bancário realizado em nossa conta.
            </p>
          </Card>

          {/* Pedidos de Urgência */}
          <Card className="p-8 bg-tradeblue text-white">
            <h2 className="text-2xl font-semibold mb-4">Pedidos de Urgência</h2>
            <p className="leading-relaxed mb-4">
              Especializada em veículos importados, a Trade Imports atua no mercado de reposição de peças automotivas oferecendo produtos e serviços de alta qualidade.
            </p>
            <p className="leading-relaxed mb-4">
              Hoje ela faz a diferença com seu amplo estoque de peças de reposição para veículos importados a pronta-entrega, o que a torna apta em atender qualquer tipo de necessidade do cliente. Para isso, disponibiliza profissionais e técnicos absolutamente capacitados para garantir a excelência em cada atendimento.
            </p>
            <p className="leading-relaxed mb-4">
              Entre outros detalhes, que fazem a diferença e tornam a TRADEIMPORTS uma das Auto-Peças e Importadora mais completa e respeitada do país. Entre outras marcas, atendemos toda linha de carros importados com rapidez e segurança.
            </p>
            <p className="leading-relaxed mb-4 font-semibold">
              Mercedes Benz, Audi, Bmw, Jaguar, Dodge, Chrysler, Jeep, Porsche, Ferrari, Land Rover, Gmc, Ford, Cadillac, Volvo, Corvette
            </p>
            <p className="leading-relaxed mb-4">
              Agora com a Trade Imports acabaram seus problemas de peças para veículos importados!
            </p>
            <p className="font-semibold text-xl">CONSULTE NOSSOS AGENTES</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrazosEntrega;
