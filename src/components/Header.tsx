
import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/07606789-617c-474a-984b-5aae0432ac4a.png"
                alt="Trade Imports Logo" 
                className="h-14" 
              />
            </Link>
          </div>
          
          {/* Contact Info - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-tradeblue" />
              <a href="tel:+551141986237" className="text-sm hover:text-tradeblue transition-colors">
                +55 (11) 4198-6237
              </a>
            </div>
            <a 
              href="https://wa.me/5511983034915" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M20.52 3.449a12.532 12.532 0 00-3.566-2.314 12.54 12.54 0 00-4.629-.9C5.36.247 0 5.608 0 12.068 0 14.141.846 16.145 2.45 17.75h.002L0 24l6.398-2.49a12.062 12.062 0 005.208 1.164h.004c6.966 0 12.33-5.354 12.335-11.91a12.58 12.58 0 00-3.425-9.065zm-8.03 18.44h-.3a9.873 9.873 0 01-5.031-1.378l-.365-.214-3.75 1.459 1.485-3.687-.235-.374A9.88 9.88 0 013.11 12.077c0-5.446 4.433-9.879 9.886-9.879a9.866 9.866 0 017.021 2.911 9.88 9.88 0 012.891 7.022c-.003 5.446-4.436 9.878-9.885 9.878z" />
              </svg>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/sobre-nos" className="nav-link">Sobre Nós</Link>
            <Link to="/importacao" className="nav-link">Importação</Link>
            <Link to="/produtos" className="nav-link">Produtos</Link>
            <Link to="/fornecedores" className="nav-link">Fornecedores</Link>
            <Link to="/clientes" className="nav-link">Clientes</Link>
            <Link to="/catalogos" className="nav-link">Catálogos</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
            <Button className="btn-primary">Loja Virtual</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/sobre-nos" className="nav-link">Sobre Nós</Link>
              <Link to="/importacao" className="nav-link">Importação</Link>
              <Link to="/produtos" className="nav-link">Produtos</Link>
              <Link to="/fornecedores" className="nav-link">Fornecedores</Link>
              <Link to="/clientes" className="nav-link">Clientes</Link>
              <Link to="/catalogos" className="nav-link">Catálogos</Link>
              <Link to="/contato" className="nav-link">Contato</Link>
              
              <div className="flex flex-col space-y-3 pt-2">
                <Button className="btn-primary">Loja Virtual</Button>
                
                <div className="flex items-center gap-2 pt-2">
                  <Phone size={18} className="text-tradeblue" />
                  <a href="tel:+551141986237" className="text-sm hover:text-tradeblue transition-colors">
                    +55 (11) 4198-6237
                  </a>
                </div>
                
                <a 
                  href="https://wa.me/5511983034915" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors w-fit"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.52 3.449a12.532 12.532 0 00-3.566-2.314 12.54 12.54 0 00-4.629-.9C5.36.247 0 5.608 0 12.068 0 14.141.846 16.145 2.45 17.75h.002L0 24l6.398-2.49a12.062 12.062 0 005.208 1.164h.004c6.966 0 12.33-5.354 12.335-11.91a12.58 12.58 0 00-3.425-9.065zm-8.03 18.44h-.3a9.873 9.873 0 01-5.031-1.378l-.365-.214-3.75 1.459 1.485-3.687-.235-.374A9.88 9.88 0 013.11 12.077c0-5.446 4.433-9.879 9.886-9.879a9.866 9.866 0 017.021 2.911 9.88 9.88 0 012.891 7.022c-.003 5.446-4.436 9.878-9.885 9.878z" />
                  </svg>
                  <span className="text-xs font-medium">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
