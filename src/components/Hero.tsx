import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  onSimulateClick?: () => void;
}

export const Hero = ({ onSimulateClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
          Limpe seu nome, aumente seu score<br />
          <span className="text-success">e recupere seu crédito!</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 max-w-3xl mx-auto animate-fade-in font-medium">
          Atendimento humano, apoio jurídico e resultados comprovados.<br />
          Volte a ter crédito com segurança e dignidade.
        </p>

        <div className="mb-10 animate-fade-in">
          <p className="text-lg md:text-xl text-white/70 mb-1">
            A partir de
          </p>
          <p className="text-5xl md:text-7xl lg:text-8xl font-black text-[#10b981] mb-2">
            <span className="text-[0.4em]">R$</span>497,00
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
            em até 12x no cartão de crédito
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          
          {/* BOTÃO WHATSAPP */}
          <Button 
            size="lg"
            onClick={() => {
              window.open(
                "https://wa.me/5515997882156?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20quero%20limpar%20meu%20nome",
                "_blank"
              );
            }}
            className="text-lg px-8 py-6 h-auto bg-success hover:bg-success/90 text-success-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Orçamento gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* BOTÃO COMO FUNCIONA (SCROLL) */}
          <Button 
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById('como-funciona');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-lg px-8 py-6 h-auto border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold"
          >
            Como Funciona
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm md:text-base font-medium">100% Legal e Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm md:text-base font-medium">Advogados Parceiros</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm md:text-base font-medium">Taxa Justa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
