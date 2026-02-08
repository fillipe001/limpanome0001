import { FileSearch, Scale, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Analisamos sua dívida",
      description: "Identificamos as dívidas que estão vinculadas ao seu CPF/CNPJ."
    },
    {
      icon: Scale,
      title: "Advogados contestam",
      description: "Nossos parceiros jurídicos agem legalmente para contestar as cobranças."
    },
    {
      icon: TrendingUp,
      title: "Nome limpo e score alto",
      description: "Seu nome é limpo e seu score aumenta naturalmente, abrindo portas para crédito."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente em 3 etapas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                {index + 1}
              </div>
              
              <div className="mt-6 mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
