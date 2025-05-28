
import React from "react";
import { Link } from "react-router-dom";

const InfoButtonsSection = () => {
  const infoButtons = [
    { label: "COMO COMPRAR?", route: "/como-comprar" },
    { label: "FORMAS DE ENTREGA", route: "/formas-entrega" },
    { label: "PRAZOS DE ENTREGA", route: "/prazos-entrega" },
    { label: "TROCAS E DEVOLUÇÕES", route: "/trocas-devolucoes" },
    { label: "FORMAS DE PAGAMENTO", route: "/formas-pagamento" },
  ];

  return (
    <div className="bg-usablue py-2 md:py-3 overflow-hidden">
      <div className="container mx-auto px-1 sm:px-2 md:px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-0.5 xs:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 min-w-max justify-center">
            {infoButtons.map((button, index) => (
              <Link
                key={index}
                to={button.route}
                className="text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-sm font-medium px-0.5 xs:px-1 sm:px-2 md:px-3 py-1.5 md:py-2 hover:text-usasilver transition-colors duration-300 whitespace-nowrap flex-shrink-0 text-center"
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
