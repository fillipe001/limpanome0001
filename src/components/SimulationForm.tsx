import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export const SimulationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    debtAmount: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.debtAmount) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Simular envio
    setSubmitted(true);
    toast({
      title: "Simulação enviada!",
      description: "Em breve nossa equipe entrará em contato.",
    });

    // Abrir WhatsApp direto
    window.open('https://wa.me/5515997882156?text=Olá,%20vim%20pelo%20site%20e%20quero%20fazer%20a%20triagem%20grátis', '_blank');
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto border-2 border-success shadow-xl">
        <CardContent className="pt-12 pb-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Simulação Enviada!
          </h3>
          <p className="text-muted-foreground">
            Nossa equipe entrará em contato em breve pelo WhatsApp.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto border-2 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-2xl font-bold">
          Simulação Gratuita
        </CardTitle>
        <CardDescription className="text-base">
          Preencha os dados abaixo e receba uma análise sem compromisso
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Nome Completo
            </Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Telefone/WhatsApp
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Qual o valor aproximado das suas negativações hoje?
            </Label>
            <RadioGroup
              value={formData.debtAmount}
              onValueChange={(value) => setFormData({ ...formData, debtAmount: value })}
              className="grid gap-3"
              required
            >
              <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="Até R$ 5.000" id="debt1" />
                <Label htmlFor="debt1" className="text-base cursor-pointer flex-1">
                  Até R$ 5.000
                </Label>
              </div>
              <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="De R$ 5.001 a R$ 15.000" id="debt2" />
                <Label htmlFor="debt2" className="text-base cursor-pointer flex-1">
                  De R$ 5.001 a R$ 15.000
                </Label>
              </div>
              <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="Acima de R$ 15.000" id="debt3" />
                <Label htmlFor="debt3" className="text-base cursor-pointer flex-1">
                  Acima de R$ 15.000
                </Label>
              </div>
              <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="Não sei exatamente" id="debt4" />
                <Label htmlFor="debt4" className="text-base cursor-pointer flex-1">
                  Não sei exatamente
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold bg-success hover:bg-success/90"
            size="lg"
          >
            Enviar Simulação Grátis
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Seus dados estão protegidos e não serão compartilhados
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
