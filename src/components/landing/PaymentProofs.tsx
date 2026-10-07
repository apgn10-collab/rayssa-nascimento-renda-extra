import { useState, useEffect } from 'react'
import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'

export interface ProofItem {
  id: number
  url: string
  thumbUrl?: string
  caption: string
  amount: string
  type: string
}

interface PaymentProofsProps {
  proofs: ProofItem[]
}

export const PaymentProofs = ({ proofs }: PaymentProofsProps) => {
  const [activeProof, setActiveProof] = useState<ProofItem | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Marquee chips repeating
  const marqueeValues = [
    'R$ 291,98 ✓',
    'R$ 279,00 ✓',
    'R$ 115,81 ✓',
    'R$ 70,61 ✓',
    'R$ 63,60 ✓',
    'R$ 63,60 ✓',
    'R$ 48,74 ✓',
    'R$ 33,25 ✓',
    'R$ 31,37 ✓',
  ]

  // Handle escape key and body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProof) {
        setActiveProof(null)
      }
    }

    if (activeProof) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProof])

  return (
    <section id="comprovantes" className="py-14">
      {/* Header */}
      <ScrollReveal className="text-center max-w-[780px] mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-3 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
          <span>🧾 Atualizado em outubro/2026</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
          Comprovantes reais.{' '}
          <span className="text-[#00ff88] animate-title-glow">Pagamentos de verdade.</span>
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg">
          Prints de Pix recebidos e saques feitos por quem já está gravando o dia a dia na Mimix.
        </p>
      </ScrollReveal>

      {/* Faixa de Valores Rolando (Marquee Infinito) */}
      <ScrollReveal className="mb-8">
        <div
          className="relative overflow-hidden whitespace-nowrap max-w-[960px] mx-auto rounded-full bg-[#0b1019]/85 border border-[#00ff88]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(0,255,136,0.05)] py-2.5 px-0"
          aria-label="Valores recentes transferidos via Pix"
        >
          {/* Side masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0b1019] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0b1019] to-transparent z-10 pointer-events-none" />

          <div className="inline-flex items-center gap-4 animate-proof-marquee">
            {/* Set 1 */}
            {marqueeValues.map((val, idx) => (
              <span key={`p1-${idx}`} className="inline-flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/35 px-3 py-1 rounded-full">
                  {val}
                </span>
                <span className="text-[#00e5ff] opacity-50 text-sm">·</span>
              </span>
            ))}
            {/* Set 2 (duplication for continuous loop) */}
            {marqueeValues.map((val, idx) => (
              <span key={`p2-${idx}`} className="inline-flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/35 px-3 py-1 rounded-full">
                  {val}
                </span>
                <span className="text-[#00e5ff] opacity-50 text-sm">·</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Faixa de Confiança (3 mini badges) */}
      <ScrollReveal className="mb-9">
        <div className="flex justify-center items-center flex-wrap gap-3 max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e141e]/85 border border-[#00ff88]/28 rounded-full text-xs sm:text-sm font-semibold text-[#e2e8f0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#00ff88] hover:text-white">
            <span className="text-base">📅</span>
            <span>Pagamentos todo dia 05 e 20</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e141e]/85 border border-[#00ff88]/28 rounded-full text-xs sm:text-sm font-semibold text-[#e2e8f0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#00ff88] hover:text-white">
            <span className="text-base text-[#00ff88]">⚡</span>
            <span>Pix direto na conta</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e141e]/85 border border-[#00ff88]/28 rounded-full text-xs sm:text-sm font-semibold text-[#e2e8f0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#00ff88] hover:text-white">
            <span className="text-base">🧾</span>
            <span>10 comprovantes publicados</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Proof Grid (10 Receipt Prints) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 mb-8">
        {proofs.map((proof, idx) => {
          const isOdd = idx % 2 === 0
          const rotationClass = isOdd ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'
          const hasError = imageErrors[proof.id]

          return (
            <ScrollReveal key={proof.id} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <div
                tabIndex={0}
                role="button"
                aria-label={`Abrir comprovante de ${proof.caption} ampliado`}
                onClick={() => setActiveProof(proof)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveProof(proof)
                  }
                }}
                className={`group relative bg-[#090e17] border border-[#00ff88]/35 rounded-2xl overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_18px_rgba(0,255,136,0.08)] cursor-pointer transition-all duration-300 hover:scale-[1.035] hover:rotate-0 hover:z-20 hover:border-[#00ff88] hover:shadow-[0_18px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,136,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] ${rotationClass}`}
              >
                {/* Overlay Chip */}
                <div className="absolute top-2.5 left-2.5 right-2.5 bg-[#070b12]/90 backdrop-blur-md border border-[#00ff88]/50 text-[#00ff88] text-[0.65rem] sm:text-xs font-bold font-mono px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(0,255,136,0.2)] pointer-events-none z-10 truncate">
                  <span>🧾</span>
                  <span className="truncate">{proof.caption}</span>
                </div>

                {/* Image Wrap */}
                <div className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] bg-[#06090e] flex items-center justify-center overflow-hidden">
                  {!hasError ? (
                    <img
                      src={proof.thumbUrl || proof.url}
                      alt={`Comprovante de pagamento ${proof.caption}`}
                      className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Se o thumb falhar, tenta a URL original antes de mostrar erro
                        const target = e.currentTarget
                        if (proof.thumbUrl && target.src.includes('?thumb=')) {
                          target.src = proof.url
                        } else {
                          setImageErrors((prev) => ({ ...prev, [proof.id]: true }))
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#080d14] p-4 text-center">
                      <span className="text-3xl sm:text-4xl">🧾</span>
                      <span className="font-bold text-[#00ff88] text-sm sm:text-base font-mono">
                        {proof.amount}
                      </span>
                      <span className="text-xs text-[#94a3b8]">{proof.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Bottom Note */}
      <ScrollReveal className="text-center mb-9">
        <p className="text-xs text-[#64748b] max-w-[680px] mx-auto leading-relaxed">
          Comprovantes reais de saques via Mises Pagamentos. Ganhos variam conforme o volume de
          vídeos aprovados.
        </p>
      </ScrollReveal>

      {/* CTA final da seção */}
      <ScrollReveal className="text-center">
        <a
          href={LANDING_LINKS.whatsappGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,255,136,0.9),0_0_70px_rgba(0,229,255,0.5)] cursor-pointer"
          aria-label="Quero receber também — entrar no suporte gratuito no WhatsApp"
        >
          <span>Quero receber também</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="text-xs sm:text-sm text-[#94a3b8] mt-3">
          Entre no suporte gratuito e aprenda a começar
        </p>
      </ScrollReveal>

      {/* Lightbox Modal */}
      {activeProof && (
        <div
          id="proofLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização do Comprovante"
          className="fixed inset-0 z-[10000] bg-[#04070c]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveProof(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center animate-[scale_0.25s_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProof(null)}
              aria-label="Fechar visualização"
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-[#0f172a]/90 border border-white/25 text-white text-xl flex items-center justify-center transition-all hover:bg-[#00ff88] hover:text-[#021a0e] hover:border-[#00ff88] hover:scale-110 cursor-pointer"
            >
              &times;
            </button>

            <img
              src={activeProof.url}
              alt={`Comprovante de pagamento ampliado: ${activeProof.caption}`}
              className="max-w-full max-h-[78vh] object-contain rounded-2xl border border-[#00ff88]/45 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,136,0.3)] bg-black"
            />

            <div className="mt-3.5 px-5 py-2 rounded-full bg-[#0f172a]/90 border border-[#00ff88]/40 text-[#00ff88] font-mono text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(0,255,136,0.2)]">
              {activeProof.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
