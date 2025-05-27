
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample product data
const products = [
  {
    id: 1,
    name: "Válvula Termostática do Mini Cooper",
    price: 550.55,
    image: "/lovable-uploads/produto1.jpg",
    brand: "Mini Cooper",
    link: "https://www.tradeimports.com.br/loja2/valvula-termostatica-do-mini-cooper"
  },
  {
    id: 2,
    name: "Filtro de Óleo Jaguar Land Rover V8",
    price: 1250.90,
    image: "/lovable-uploads/produto2.jpg",
    brand: "Jaguar",
    link: "https://www.tradeimports.com.br/loja2/index.php?route=product/product&product_id=87"
  },
  {
    id: 3,
    name: "Farol Mercedes AMG C43 C45 Lado Esquerdo",
    price: 890.75,
    image: "/lovable-uploads/produto3.jpg",
    brand: "Mercedes-Benz",
    link: "https://www.tradeimports.com.br/loja2/index.php?route=product/product&product_id=90"
  },
  {
    id: 4,
    name: "Cubo Da Roda Dianteira da BMW",
    price: 3200.00,
    image: "/lovable-uploads/produto4.jpg",
    brand: "BMW",
    link: "https://www.tradeimports.com.br/loja2/index.php?route=product/product&product_id=70"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-tradelight">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Produtos em Destaque</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-tradered text-white text-xs font-bold px-2 py-1 rounded">
                  {product.brand}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-xl font-bold text-tradedark">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  className="text-tradeblue border-tradeblue hover:bg-tradeblue/5"
                  onClick={() => window.open(product.link, '_blank')}
                >
                  Detalhes
                </Button>
                <Button 
                  className="bg-tradered hover:bg-tradered-dark text-white"
                  onClick={() => window.open(product.link, '_blank')}
                >
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="btn-primary text-lg"
            onClick={() => window.open('https://www.tradeimports.com.br/loja2/', '_blank')}
          >
            Ver Todos os Produtos
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {[
            "Aston Martin", "Audi", "Bentley", "BMW", "Cadillac", 
            "Ferrari", "Jaguar", "Lamborghini", "Land Rover", "Lexus",
            "Maserati", "Mercedes-Benz", "Porsche"
          ].map((brand) => (
            <div key={brand} className="bg-white shadow px-3 py-2 text-center rounded-md text-xs font-medium text-gray-700">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
