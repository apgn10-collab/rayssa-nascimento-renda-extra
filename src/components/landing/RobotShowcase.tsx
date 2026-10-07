import { useState } from 'react'
import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'

interface RobotShowcaseProps {
  robotPhotoUrl: string
}

export const RobotShowcase = ({ robotPhotoUrl }: RobotShowcaseProps) => {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section className="py-8">
      <ScrollReveal>
        <div className="group rounded-3xl overflow-hidden border border-[#00e5ff]/30 bg-[#080d14] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.15)]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Robot Photo */}
            <div className="relative h-full min-h-[260px] sm:min-h-[380px] overflow-hidden bg-[#060a10]">
              {!photoError ? (
                <img
                  src={robotPhotoUrl}
                  alt="Robô humanoide futurista aprendendo a dobrar roupas"
                  className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="w-full h-full min-h-[280px] flex flex-col items-center justify-center gap-3 bg-[#080d14] text-[#00e5ff] p-8 text-center">
                  <span className="text-5xl">🤖</span>
                  <span className="text-sm font-semibold">Robôs humanoides aprendendo tarefas</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-12 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00e5ff]/10 border border-[#00e5ff]/50 text-[#00e5ff] mb-4">
                <span>REVOLUÇÃO DA ROBÓTICA</span>
              </div>

              <h2 className="text-2xl sm:text-3.5xl font-extrabold text-white leading-snug mb-4">
                Enquanto você lê isso, robôs estão aprendendo a dobrar roupa.
              </h2>

              <p className="text-lg sm:text-xl font-bold text-[#00ff88] mb-3">
                Quem ensinou? Pessoas comuns com celular.
              </p>

              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6">
                Redes neurais precisam de milhões de ângulos reais. Seus vídeos geram os dados de
                treino mais valiosos do mundo hoje.
              </p>

              <a
                href={LANDING_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all duration-200 hover:-translate-y-1 hover:scale-105"
                aria-label="Quero ser treinador de IA — suporte gratuito no WhatsApp"
              >
                <span>Quero ser treinador de IA</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
