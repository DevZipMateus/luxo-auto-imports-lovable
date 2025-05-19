
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample product data
const products = [
  {
    id: 1,
    name: "Pastilhas de Freio Dianteiro Porsche",
    price: 550.55,
    image: "https://images.unsplash.com/photo-1610844884768-490b92c1bdc0?q=80&w=500&auto=format&fit=crop",
    brand: "Porsche",
  },
  {
    id: 2,
    name: "Bomba de Combustível Mercedes-Benz",
    price: 1250.90,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=500&auto=format&fit=crop",
    brand: "Mercedes-Benz",
  },
  {
    id: 3,
    name: "Hélice da Ventoinha Land Rover",
    price: 890.75,
    image: "https://images.unsplash.com/photo-1626467080295-c31b244acbe3?q=80&w=500&auto=format&fit=crop",
    brand: "Land Rover",
  },
  {
    id: 4,
    name: "Faróis Dianteiros LED/Xenon BMW",
    price: 3200.00,
    image: "https://images.unsplash.com/photo-1579541591970-e5de6e1937a3?q=80&w=500&auto=format&fit=crop",
    brand: "BMW",
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
                <Button variant="outline" className="text-tradeblue border-tradeblue hover:bg-tradeblue/5">
                  Detalhes
                </Button>
                <Button className="bg-tradered hover:bg-tradered-dark text-white">
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg">Ver Todos os Produtos</Button>
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
