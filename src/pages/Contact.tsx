
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="mb-12 text-center">
            <h1 className="section-title">Entre em Contato</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Direto do Estados Unidos, Istanbul e Alemanha TradeImports é líder no mercado de autopeças de importados de Auto Luxo. 
              Importação de autopeças e acessórios automotivo genuína e OEM direto do Estados Unidos, Alemanha, Inglaterra, Turquia entregue no Brasil. 
              O processo de desembaraço aduaneiro é ágil e eficaz!
            </p>
            <p className="text-md text-gray-600 max-w-4xl mx-auto mt-4">
              O portfólio inclui peças de renomadas marcas internacional como a Ferrari, Mercedez-Benz, Aston Martin, Mini Cooper, Smart, 
              Rolls-Royce, Lexus, Maserati, Land Rover, Lotus, Hummer, Jaguar, Infiniti, Dodge, Porsche, Volvo, Lamborghini, BMW, Audi, 
              Bentley, Chrysler, Cadillac.
            </p>
          </div>

          {/* Grid de contato e mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Informações de contato */}
            <div className="space-y-6">
              <Card className="p-6 bg-white">
                <h2 className="text-2xl font-semibold mb-6 text-tradedark">
                  Informações de Contato
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-tradeblue mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-tradedark">Telefones</h3>
                      <p className="text-gray-600">+55 (11) 4198-6237</p>
                      <p className="text-gray-600">+55 (11) 98303-4915 (WhatsApp)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-tradeblue mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-tradedark">E-mail</h3>
                      <p className="text-gray-600">contato@tradeimports.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-tradeblue mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-tradedark">Endereço</h3>
                      <p className="text-gray-600">
                        Rua Madre Cabrini, 140 - Vila Bertioga<br />
                        São Paulo, SP - CEP: 03187-000<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-tradeblue mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-tradedark">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda à Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                      <p className="text-gray-600">Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="tel:+551141986237"
                      className="bg-tradeblue text-white px-6 py-2 rounded hover:bg-tradeblue-dark transition-colors font-medium"
                    >
                      Ligar Agora
                    </a>
                    <a 
                      href="https://wa.me/5511983034915" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors font-medium"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="mailto:contato@tradeimports.com.br"
                      className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors font-medium"
                    >
                      Enviar E-mail
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mapa do Google */}
            <div>
              <Card className="p-0 bg-white overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold text-tradedark">
                    Nossa Localização
                  </h2>
                </div>
                <div className="w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7833333333!2d-46.5566667!3d-23.5566667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f0a0a0a0a0a%3A0xa0a0a0a0a0a0a0a0!2sRua%20Madre%20Cabrini%2C%20140%20-%20Vila%20Bertioga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003187-000!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização TradeImports"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>

          {/* Seção de países de origem */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-tradedark text-center">
              Importamos Diretamente De
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">🇺🇸</div>
                <h3 className="font-semibold text-tradedark">Estados Unidos</h3>
                <p className="text-sm text-gray-600">Peças originais e OEM</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🇩🇪</div>
                <h3 className="font-semibold text-tradedark">Alemanha</h3>
                <p className="text-sm text-gray-600">Tecnologia alemã</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🇹🇷</div>
                <h3 className="font-semibold text-tradedark">Turquia</h3>
                <p className="text-sm text-gray-600">Peças de qualidade</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🇬🇧</div>
                <h3 className="font-semibold text-tradedark">Inglaterra</h3>
                <p className="text-sm text-gray-600">Tradição britânica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
