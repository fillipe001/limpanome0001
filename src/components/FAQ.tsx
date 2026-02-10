import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para limpar meu nome?",
      answer: "O prazo varia de acordo com cada caso, mas a maioria dos processos é concluída em 40 dias. Mantemos você informado em cada etapa."
    },
    {
      question: "É realmente seguro e legal?",
      answer: "Sim! Todo o processo é amparado por advogados especializados e segue rigorosamente a legislação brasileira de defesa do consumidor. Baseado no artigo 42 do Código de Defesa do Consumidor."
    },
    {
      question: "Quanto custa o serviço?",
      answer: "A partir de R$497 à vista ou em 12x no cartão (valor pode variar conforme o tamanho da dívida)."
    },
    {
      question: "E se eu já fui enganado antes?",
      answer: "Entendemos sua preocupação. Diferente de outras empresas, temos CNPJ registrado, equipe identificada e parceiros jurídicos comprovados. Você pode verificar tudo antes de contratar."
    },
    {
      question: "Tenho garantia?",
      answer: "Você terá 6 meses de garantia total. Se voltar qualquer negativação do mesmo débito nesse período, refazemos todo o processo sem cobranças."
    },
    {
      question: "Funciona para CNPJ também?",
      answer: "Sim, funciona exatamente da mesma forma para pessoa física e jurídica. Já ajudamos centenas de empresas a limparem o CNPJ e voltarem a ter crédito no mercado."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
