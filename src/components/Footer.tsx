import { Shield } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Araújo Soluções Financeiras</h3>
            <p className="text-white/80 leading-relaxed">
              Serviços especializados em limpeza de nome e recuperação de crédito com apoio jurídico.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-white/80">
              <p>WhatsApp: (15) 99788-2156
            </p>
              <p>Email: arjsolucoesfinanceiras@gmail.com</p>
              <p>Horário: Seg-Sex 8h-18h</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Legal</h4>
            <div className="space-y-2 text-white/80">
              <p>CNPJ: 64.028.141/0001-03</p>
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Serviço 100% Legal e Seguro</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 Araújo Soluções Financeiras. Todos os direitos reservados.</p>
          <p>Jesus é rei.</p>
        </div>
      </div>
    </footer>;
};