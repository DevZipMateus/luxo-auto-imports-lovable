
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { RefreshCw, Phone, AlertCircle, CheckCircle } from "lucide-react";

const TrocasDevolucoes = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Trocas e Devoluções</h1>
          </div>

          {/* Condições de Devolução */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <RefreshCw className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Condições de Devolução
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A mercadoria deverá retornar nas mesmas condições em que foi lhe entregue, ou seja: Lacres intactos do fabricante, embalagem original em perfeitas condições e completa com notas fiscais, manuais, acessórios e outros itens que façam parte do produto. É importante ressaltar que a caixa do produto também deve ser preservada em perfeitas condições, isto é, a embalagem não pode estar danificada ou violada. Esclarece-se que o produto <strong>NÃO PODE TER SIDO USADO</strong>.
            </p>
          </Card>

          {/* Situações Possíveis */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Situações Possíveis de Retorno da Mercadoria
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Existem quatro hipóteses em que a mercadoria pode ser devolvida:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li><strong>A.</strong> Produto avariado</li>
              <li><strong>B.</strong> Produto em desacordo com o pedido</li>
              <li><strong>C.</strong> Desistência da compra (Prazo de 07 dias – Conforme art. 49 do Código de Defesa do Consumidor. O produto deverá ser devolvido nas mesmas condições no qual foi entregue, ou seja, lacrado e sem nenhum sinal de uso. A devolução por arrependimento só será aceita dentro destas condições.)</li>
              <li><strong>D.</strong> Produto com defeito técnico ou de fabricação</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>OBS:</strong> Todas as devoluções deverão ser previamente autorizadas por nosso setor técnico responsável.
            </p>
          </Card>

          {/* Como obter autorização */}
          <Card className="p-8 bg-white mb-8">
            <div className="flex items-center mb-6">
              <Phone className="text-tradeblue mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-tradedark">
                Como Obter a Autorização para Retorno de Mercadoria
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              O cliente poderá solicitar troca ou devolução pelos telefones <strong>(011) 4198-6237</strong> e/ou <strong>(11) 4198-0937</strong>.
            </p>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Produto Avariado */}
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-tradedark mb-4">Produto</h3>
              <p className="text-gray-600 leading-relaxed">
                O cliente deverá ficar atento no ato da entrega, recusando imediatamente o produto ou a embalagem que estiver sido avariada no transporte, devendo então entrar em contato com o nosso SAC, no prazo de 48 horas. Solicitações de avaria não serão aceitas fora do prazo.
              </p>
            </Card>

            {/* Produto Diferente */}
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-tradedark mb-4">Produto Diferente do Pedido</h3>
              <p className="text-gray-600 leading-relaxed">
                Caso o cliente detecte no ato da entrega que o produto encomendado e o produto adquirido são diferentes, ele deverá recusar a entrega imediatamente.
              </p>
            </Card>
          </div>

          {/* Desistência da Compra */}
          <Card className="p-8 bg-white mb-8">
            <h2 className="text-2xl font-semibold text-tradedark mb-6">Desistência da Compra</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Na hipótese de desistência da compra, conforme previsto no Artigo 49 do Código de Defesa do Consumidor (CDC - Lei 8.078 de 11/Set/1990), restrita apenas às compras efetuadas pelo site, o cliente terá a opção de devolver a mercadoria no prazo de até 07 dias corridos do recebimento, respeitando requisitos abaixo:
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              O cliente deverá enviar a 2ª via da nota fiscal (Pessoa Física), sendo aceito também a declaração de compra. Descreva, no verso, o motivo de sua solicitação de devolução. Em caso de cliente pessoa jurídica (CNPJ), a empresa deverá emitir uma nota fiscal de devolução (apenas dos produtos que apresentarem problemas) com os mesmos dados da nota fiscal de compra (modelo do produto, alíquotas de impostos, etc.) que foi enviada por nossa empresa juntamente com o pedido de compra.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Caso esta pessoa jurídica não seja emissora de nota fiscal (como escolas, instituições, etc.), enviar umas das vias da nota fiscal de compra juntamente com uma declaração informando os produtos que estão sendo devolvidos e o motivo da devolução. O cliente irá receber uma restituição no valor dos produtos, desde que esteja dentro do prazo estabelecido pelo Código de Defesa do Consumidor.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A restituição terá o prazo de 30 dias após a confirmação da constatação do defeito pelos nossos técnicos para inserir crédito no valor do produto, incluindo o valor do frete, o qual o cliente poderá utilizar de uma só vez para adquirir qualquer outro produto.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Caso fique constatado que o cliente não cumpriu com as condições de devolução ou perdeu a garantia do produto, o mesmo será devolvido sem prévia comunicação por frete a cobrar.
            </p>
          </Card>

          {/* Produtos com Defeito */}
          <Card className="p-8 bg-white mb-8">
            <h2 className="text-2xl font-semibold text-tradedark mb-6">Produtos com Defeito</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Enviar via correios a mercadoria com a Nota Fiscal no verso detalhando motivo e defeitos apresentados.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A partir do recebimento da mercadoria, terá o prazo de 30 dias para efetuar testes para confirmação do defeito apontado. O cliente será contatado o mais breve possível no sentido de lhe informar o resultado dos testes e a previsão de disponibilidade do produto reparado ou trocado.
            </p>
          </Card>

          {/* Custos de Envio */}
          <Card className="p-8 bg-red-50 border-red-200">
            <div className="flex items-center mb-4">
              <AlertCircle className="text-red-500 mr-3" size={32} />
              <h2 className="text-2xl font-semibold text-red-700">
                Custos de Envio
              </h2>
            </div>
            <p className="text-red-700 leading-relaxed font-semibold">
              Todos os custos de transporte do produto são de responsabilidade do CLIENTE.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TrocasDevolucoes;
