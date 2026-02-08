import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5515997882156?text=Olá,%20vim%20pelo%20site%20e%20quero%20fazer%20a%20triagem%20grátis', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl bg-success hover:bg-success/90 p-0 hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};
