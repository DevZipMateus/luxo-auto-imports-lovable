
import React from 'react';

const WhatsAppFloat = () => {
  const whatsappNumber = "5511983034915";
  const message = "Olá! Gostaria de mais informações sobre peças importadas.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/60b9f84d-84a2-4db9-a060-8590367ff3f7.png"
        alt="WhatsApp"
        className="w-full h-full rounded-full object-cover"
      />
    </button>
  );
};

export default WhatsAppFloat;
