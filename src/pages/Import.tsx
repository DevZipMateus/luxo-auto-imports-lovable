import React from "react";
import Layout from "@/components/Layout";
import { Truck, Package, Clock, Globe, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Import = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-usablue to-usablue-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 relative 
                     after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-usared
                     pb-4">
            Importadora de peças automotivas
          </h1>
          
          {/* Seção Importamos Diretamente De */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
              Importamos Diretamente De
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/5 p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="text-4xl mb-3">🇺🇸</div>
                <h3 className="font-semibold text-white mb-2">Estados Unidos</h3>
                <p className="text-sm text-gray-300">Peças originais e OEM</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="text-4xl mb-3">🇩🇪</div>
                <h3 className="font-semibold text-white mb-2">Alemanha</h3>
                <p className="text-sm text-gray-300">Tecnologia alemã</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="text-4xl mb-3">🇹🇷</div>
                <h3 className="font-semibold text-white mb-2">Turquia</h3>
                <p className="text-sm text-gray-300">Peças de qualidade</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="text-4xl mb-3">🇬🇧</div>
                <h3 className="font-semibold text-white mb-2">Inglaterra</h3>
                <p className="text-sm text-gray-300">Tradição britânica</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="text-lg text-gray-200 space-y-6">
              <p>
                A importação de autopeças é uma operação que envolve diversos procedimentos, desde a seleção de fornecedores confiáveis e que oferecem os melhores preços e condições de pagamento até a entrega das mercadorias aos clientes que fizeram os pedidos. Neste tipo de negócio, planejamento estratégico é fundamental para evitar embaraços perante a Receita Federal.
              </p>
              <p>
                Referência no mercado, a Trade Imports é uma importadora de peças automotivas reconhecida pela qualidade de atendimento. Líder no segmento de autopeças de importados, a empresa tem negócios no Brasil, Alemanha, Estados Unidos e Turquia.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-usared/20 flex items-center">
              <div className="mr-6">
                <Globe className="text-usared h-16 w-16" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Presença Global</h3>
                <p className="text-gray-300">
                  Com operações em Brasil, Alemanha, Estados Unidos e Turquia, garantimos acesso às melhores peças do mercado internacional.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
              Consultoria e Despacho Aduaneiro
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                <p className="text-gray-200">
                  A Trade Imports tem 20 anos de experiência como importadora de peças automotivas. O know-how acumulado, ao longo desse tempo, e a qualificação contínua da equipe de colaboradores garantem eficiência, agilidade e segurança no processo de importação de peças automotivas.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                <p className="text-gray-200">
                  Seja qual for o meio de transporte – aéreo ou marítimo – a Trade Imports está preparada para elaborar a documentação necessária para o despacho da carga. Os procedimentos são eletrônicos, o que garante mais velocidade aos trâmites burocráticos.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
              <p className="text-gray-200">
                A empresa oferece consultoria aduaneira a empresários que atuam no mercado de veículos importados, além de realizar o desembaraço dos processos de importação, atendendo, com rapidez os pedidos urgentes de reposição de autopeças oriundas do exterior. Além da importação de peças, a Trade Imports também presta consultoria para a exportação de autopeças.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
              Segurança e rapidez na entrega
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                  <Clock className="text-usared" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Entrega Rápida</h3>
                <p className="text-gray-300">
                  Graças às excelentes parcerias comerciais e ao planejamento logístico, a Trade Imports recebe mercadorias, no Brasil, em 10 ou 15 dias.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                  <Package className="text-usared" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Armazenamento Seguro</h3>
                <p className="text-gray-300">
                  A importadora de peças automotivas dispõe de armazém bem estruturado e seguro para garantir a integridade das mercadorias.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-usared/20 hover:border-usared/40 transition-all">
                <div className="bg-usared/20 p-3 rounded-full w-fit mb-4">
                  <Truck className="text-usared" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Distribuição Nacional</h3>
                <p className="text-gray-300">
                  Finalizados os procedimentos burocráticos as peças são enviadas aos clientes em todas as regiões do país.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-200">
              <p>
                Como a Trade Imports possui estoque de peças para reposição, pedidos oriundos das principais capitais brasileiras são despachados no dia seguinte. A disponibilidade de peças automotivas importadas e a rapidez na entrega contribuem para a satisfação do mercado consumidor.
              </p>
              
              <p>
                O cliente que precisa, por exemplo, importar peças Volkswagen ou importar peças Hyndai deseja ser atendido no menor espaço de tempo possível. A mesma urgência tem o cliente que necessita importar peças de carros antigos para realizar o sonho de ver o veículo completamente restaurado. Para isso, é fundamental contar com os serviços de uma importadora de peças automotivas com credibilidade e experiência no mercado.
              </p>
              
              <p>
                Com sede em Alphaville (Barueri/SP), a Trade Imports é uma importadora de peças automotivas completa, com capacidade para atender pedidos, no atacado ou varejo, das principais marcas de veículos, tais como Audi, Volvo, Mercedes-Benz, Ford, GMC, Jeep, BMW, Cadillac, Corvette, Porche, Land Rover, Jaguar, Dodge, Chrysler e outras.
              </p>
            </div>
          </div>
          
          <div className="bg-usared/10 p-8 rounded-lg border border-usared/30 text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="text-usared mr-2" />
              <h3 className="text-xl font-semibold text-white">Deseja obter mais informações sobre a importação de autopeças?</h3>
            </div>
            <Button className="bg-usared hover:bg-usared-dark text-white mt-2">Fale Conosco!</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Import;
