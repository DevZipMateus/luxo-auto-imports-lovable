
import React from "react";
import { Link } from "react-router-dom";

const InfoButtonsSection = () => {
  const infoButtons = [
    { label: "COMO COMPRAR?", route: "/como-comprar" },
    { label: "FORMAS DE ENTREGA", route: "/formas-entrega" },
    { label: "PRAZOS DE ENTREGA", route: "/prazos-entrega" },
    { label: "TROCAS E DEVOLUÇÕES", route: "/trocas-devolucoes" },
    { label: "FORMAS DE PAGAMENTO", route: "/formas-pagamento" },
    { label: "TERMOS DE USO", route: "/termos-uso" },
    { label: "POLÍTICA DE PRIVACIDADE", route: "/politica-privacidade" },
  ];

  return (
    <div className="bg-tradedark py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-center overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 min-w-max">
            {infoButtons.map((button, index) => (
              <Link
                key={index}
                to={button.route}
                className="text-white text-xs md:text-sm font-medium px-2 md:px-3 py-2 hover:text-tradeblue transition-colors duration-300 whitespace-nowrap flex-shrink-0"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoButtonsSection;
