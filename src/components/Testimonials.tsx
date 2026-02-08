import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      age: 52,
      text: "Depois de 3 anos com o nome sujo, consegui limpar em 30 dias. Hoje já financiei meu celular!",
      rating: 5
    },
    {
      name: "João Silva",
      age: 48,
      text: "Atendimento excelente, me explicaram tudo direitinho. Meu score subiu 150 pontos!",
      rating: 5
    },
    {
      name: "Rosa Lima",
      age: 61,
      text: "Fui enganada antes, mas aqui encontrei seriedade. Recuperei meu crédito e comprei no carnê.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      age: 44,
      text: "Consegui financiar meu carro após anos negativado. Equipe muito atenciosa e profissional!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Depoimentos Reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
