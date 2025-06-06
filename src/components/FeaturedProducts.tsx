
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Válvula Termostática do Mini Cooper",
      description: "Válvula termostática original para Mini Cooper, garantindo controle preciso da temperatura do motor",
      image: "/lovable-uploads/produto1.jpg",
      price: "R$ 999,99",
      category: "Motor"
    },
    {
      id: 2,
      name: "Filtro de Óleo Jaguar Land Rover V8",
      description: "Filtro de óleo de alta qualidade para motores V8 Jaguar Land Rover, garantindo máxima proteção",
      image: "/lovable-uploads/produto2.jpg",
      price: "R$ 110,99",
      category: "Motor"
    },
    {
      id: 3,
      name: "Farol Mercedes AMG C43 C45 Lado Esquerdo",
      description: "Farol original lado esquerdo para Mercedes AMG C43 e C45, garantindo máxima qualidade e durabilidade",
      image: "/lovable-uploads/produto3.jpg",
      price: "R$ 8.499,99",
      category: "Iluminação"
    },
    {
      id: 4,
      name: "Cubo Da Roda Dianteira do Volvo",
      description: "Cubo da roda dianteira original para Volvo, oferecendo máxima segurança e performance",
      image: "/lovable-uploads/produto4.jpg",
      price: "R$ 899,99",
      category: "Suspensão"
    }
  ];

  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <CardDescription className="text-gray-500">{product.category}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-xl font-bold text-usablue">{product.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
