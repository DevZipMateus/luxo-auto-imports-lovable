
import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-usanavy text-white">
      <div className="container mx-auto px-4 py-12 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/07606789-617c-474a-984b-5aae0432ac4a.png" 
                  alt="Trade Imports Logo"
                  className="h-16" 
                />
              </Link>
            </div>
            <p className="text-usasilver mb-4">
              Especialista em importação de peças para veículos de luxo, com mais de 20 anos de experiência no mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-usasilver hover:text-usablue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a href="#" className="text-usasilver hover:text-usablue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-usasilver hover:text-usablue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-usablue">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-usasilver hover:text-usablue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-usasilver hover:text-usablue transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/importacao" className="text-usasilver hover:text-usablue transition-colors">Importação</Link>
              </li>
              <li>
                <Link to="/catalogos" className="text-usasilver hover:text-usablue transition-colors">Catálogos</Link>
              </li>
              <li>
                <Link to="/clientes" className="text-usasilver hover:text-usablue transition-colors">Fornecedores</Link>
              </li>
              <li>
                <Link to="/contato" className="text-usasilver hover:text-usablue transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-usablue">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-usablue mt-1" />
                <div>
                  <p className="text-usasilver">+55 (11) 4198-6237</p>
                  <p className="text-usasilver">+55 (11) 98303-4915 (WhatsApp)</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-usablue mt-1" />
                <p className="text-usasilver">São Paulo, SP - Brasil</p>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-usablue mt-1" />
                <p className="text-usasilver">contato@tradeimports.com.br</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-usasilver/30 mt-12 pt-6 text-usasilver text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© 2025 Trade Imports. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link to="/termos-uso" className="hover:text-usablue transition-colors">Termos de Uso</Link>
              <Link to="/politica-privacidade" className="hover:text-usablue transition-colors">Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
