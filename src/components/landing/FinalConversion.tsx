import { WhatsAppIcon } from '../WhatsAppIcon'
import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'

interface FinalConversionProps {
  finalBgUrl: string
}

export const FinalConversion = ({ finalBgUrl }: FinalConversionProps) => {
  return (
    <section className="py-16 text-center relative max-w-[860px] mx-auto">
      <ScrollReveal>
        <div className="relative rounded-3xl overflow-hidden border border-[#00ff88]/40 bg-[#0b111a] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,136,0.2)]">
          {/* Background Image */}
          <img
            src={finalBgUrl}
            alt="Pessoa segurando celular com moedas de ouro"
            className="absolute inset-0 w-full h-full object-cover opacity-25 saturate-120 pointer-events-none"
            loading="lazy"
          />

          {/* Radial Overlay Content */}
          <div className="relative z-10 px-5 sm:px-10 py-12 sm:py-16 bg-radial-gradient from-[#0d141f]/85 to-[#07090e]/95 text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-5 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse-dot" />
              <span>INSCRIÇÃO GUIADA MIMIX</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              O futuro dos robôs começa <br />
              <span className="text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
                no seu celular
              </span>
            </h2>

            {/* Urgency Line */}
            <p className="text-base sm:text-xl font-semibold text-[#00e5ff] mb-2 drop-shadow-[0_0_16px_rgba(0,229,255,0.4)]">
              O mercado está crescendo agora — quem entra cedo grava mais.
            </p>

            <p className="text-sm sm:text-base text-[#94a3b8] max-w-[600px] mx-auto mb-8 leading-relaxed">
              Tire dúvidas e inicie seu cadastro com orientação direta em português.
            </p>

            {/* Giant Pulsing Primary CTA Button */}
            <div className="flex flex-col items-center gap-3.5">
              <a
                href={LANDING_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-extrabold text-base sm:text-xl text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_30px_rgba(0,255,136,0.6)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_55px_rgba(0,255,136,0.9),0_0_80px_rgba(0,229,255,0.6)] animate-glow-pulse"
                aria-label="Quero participar — suporte gratuito no WhatsApp"
              >
                <WhatsAppIcon size={24} className="shrink-0" />
                <span>Quero participar — suporte gratuito no WhatsApp</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#94a3b8] mt-4 mb-0">
              Atendimento e suporte gratuitos via WhatsApp
            </p>

            <div className="mt-3 text-xs text-[#64748b]">
              Grupo oficial • Suporte rápido • 100% em Português
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
