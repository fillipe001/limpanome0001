import { Heart, Shield, Wallet, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Atendimento Humano",
      description: "Nossa equipe está pronta para te ouvir e ajudar com atenção e respeito."
    },
    {
      icon: Shield,
      title: "Advogados Parceiros",
      description: "Apoio jurídico especializado para garantir seus direitos."
    },
    {
      icon: Wallet,
      title: "Taxa Justa",
      description: "Preços transparentes e acessíveis, sem surpresas ou taxas ocultas."
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Milhares de clientes com nome limpo e crédito recuperado."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Chega de promessas vazias. Aqui você vê resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-success rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
