
import React from "react";

const OurHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossa História</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 text-gray-700">
              A <strong className="text-tradedark">TRADE IMPORTS</strong> se especializou em atender a forte demanda de reposição de peças para carros importados de luxo.
            </p>
            
            <p className="mb-4 text-gray-700">
              Por atuar de maneira segura e séria, dentro das normas de comércio internacional estabelecidas pelo país, a empresa cresceu rapidamente, se tornando líder de mercado no setor de reposição e importação de peças para veículos de luxo, superluxo e alto luxo.
            </p>
            
            <p className="mb-4 text-gray-700">
              A <strong className="text-tradedark">TRADE IMPORTS</strong> garante seu lugar de destaque no mercado pela facilidade dos serviços, menor preço e prazo de entrega, excelentes parcerias com fornecedores e fabricantes, alta qualidade das peças de reposição e eficiência no atendimento.
            </p>
            
            <p className="mb-4 text-gray-700">
              A empresa possui uma equipe de profissionais qualificados para orientar o cliente nas suas mais variadas necessidades relacionadas à manutenção de seu veículo importado, e oferece um amplo estoque de peças, como: componentes de motor, buchas, coxins, juntas, pastilhas e discos de freio, homocinéticas, amortecedores, entre outros itens disponíveis para a compra.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-tradelight p-6 rounded-lg border-l-4 border-tradeblue">
              <h3 className="text-xl font-semibold mb-2 text-tradedark">Liderança no Mercado</h3>
              <p className="text-gray-700">
                Não é por acaso que a TRADE IMPORTS é hoje uma reconhecida empresa do ramo de Importação e Autopeças, pois visa o constante aperfeiçoamento e melhoria dos serviços para a satisfação de seus clientes, parceiros e colaboradores.
              </p>
            </div>
            
            <div className="bg-tradelight p-6 rounded-lg border-l-4 border-tradered">
              <h3 className="text-xl font-semibold mb-2 text-tradedark">Alcance Global</h3>
              <p className="text-gray-700">
                Hoje em dia, além de despachar peças para todo o território nacional e Mercosul, a TRADE IMPORTS também fornece para clientes de varejo com a mesma excelência de atendimento, qualidade de produtos e prazo de entrega que oferece regionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
