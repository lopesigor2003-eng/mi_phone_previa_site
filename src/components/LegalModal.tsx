import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-orange-500" />
            ) : (
              <FileText className="w-5 h-5 text-orange-500" />
            )}
            <h3 id="legal-modal-title" className="font-heading font-bold text-lg text-white">
              {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fechar janela modal de termos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-zinc-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-zinc-200 font-medium">
                Última atualização: Ano 2026. A Miphone Santa Maria valoriza sua privacidade e a segurança de seus dados.
              </p>
              <h4 className="font-heading font-bold text-white text-base">1. Coleta de Informações</h4>
              <p>
                Coletamos apenas as informações voluntariamente fornecidas por você (nome, telefone/WhatsApp, e-mail) ao entrar em contato conosco para orçamentos, aquisição de aparelhos ou serviços de assistência técnica.
              </p>
              <h4 className="font-heading font-bold text-white text-base">2. Uso dos Dados</h4>
              <p>
                Seus dados são utilizados exclusivamente para responder às suas solicitações, enviar propostas comerciais, fornecer atualizações de ordens de serviço e prestar suporte pós-venda. Não comercializamos dados de clientes.
              </p>
              <h4 className="font-heading font-bold text-white text-base">3. Segurança e Confidencialidade</h4>
              <p>
                Na assistência técnica, adotamos procedimentos rigorosos para salvaguardar a integridade dos dados armazenados em aparelhos entregues para conserto. Recomendamos sempre a realização prévia de backup pelo cliente.
              </p>
              <h4 className="font-heading font-bold text-white text-base">4. Seus Direitos (LGPD)</h4>
              <p>
                Você pode a qualquer momento solicitar a confirmação, correção ou exclusão de seus dados de nossa base de contato através do WhatsApp (55) 99178-5062.
              </p>
            </>
          ) : (
            <>
              <p className="text-zinc-200 font-medium">
                Última atualização: Ano 2026. Termos e Condições Comerciais da Miphone.
              </p>
              <h4 className="font-heading font-bold text-white text-base">1. Garantia Exclusiva de 6 Meses nos Seminovos</h4>
              <p>
                Todos os smartphones seminovos comercializados pela Miphone acompanham 6 (seis) meses de garantia contratual contra defeitos de funcionamento, superando a exigência legal de 90 dias do Código de Defesa do Consumidor. A garantia cobre reparo ou substituição do aparelho conforme laudo técnico, excluindo danos por mau uso, quedas, contato com líquidos ou intervenções de terceiros não autorizados.
              </p>
              <h4 className="font-heading font-bold text-white text-base">2. Aparelhos Novos e Lacrados</h4>
              <p>
                Aparelhos novos possuem garantia oficial de fábrica (1 ano com o fabricante, como Apple ou Samsung), além do suporte e assessoria contínua da equipe Miphone.
              </p>
              <h4 className="font-heading font-bold text-white text-base">3. Condições de Parcelamento</h4>
              <p>
                Parcelamentos em até 12 vezes no cartão ou em até 24 vezes no boleto bancário estão sujeitos às condições da operadora de cartão e análise de crédito individual junto à instituição financeira conveniada.
              </p>
              <h4 className="font-heading font-bold text-white text-base">4. Avaliação de Aparelhos na Troca</h4>
              <p>
                A avaliação de aparelhos usados para abatimento de valor na compra é realizada presencialmente em nossa loja física após checagem funcional e estética minuciosa.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
            aria-label="Fechar termos"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
