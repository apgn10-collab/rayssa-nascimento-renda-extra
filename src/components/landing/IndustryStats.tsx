import { useState, useEffect, useRef } from 'react'
import { ScrollReveal } from '../ScrollReveal'

export const IndustryStats = () => {
  const [animated, setAnimated] = useState(false)
  const [countValues, setCountValues] = useState({
    stat3: 0,
    stat4: 0,
    stat5: 0,
    stat6: 0,
  })
  const statsSectionRef = useRef<HTMLDivElement>(null)

  // Counter animation on IntersectionObserver
  useEffect(() => {
    // If reduced motion is preferred, jump straight to target values
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCountValues({
        stat3: 4000,
        stat4: 100000,
        stat5: 50,
        stat6: 30,
      })
      setAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)

          const duration = 1600
          const startTime = performance.now()

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)

            setCountValues({
              stat3: Math.round(4000 * eased),
              stat4: Math.round(100000 * eased),
              stat5: Math.round(50 * eased),
              stat6: Math.round(30 * eased),
            })

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCountValues({
                stat3: 4000,
                stat4: 100000,
                stat5: 50,
                stat6: 30,
              })
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 },
    )

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  return (
    <section className="py-14 bg-[#0a0f16]/60 -mx-4 sm:-mx-5 px-4 sm:px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[680px] mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00e5ff]/10 border border-[#00e5ff]/40 text-[#00e5ff] mb-3">
            <span>MÉTRICAS DO SETOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
            Os números que{' '}
            <span className="text-[#00e5ff] drop-shadow-[0_0_16px_rgba(0,229,255,0.5)]">
              comprovam o setor
            </span>
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg">
            Dados extraídos diretamente de reportagens da CNN e relatórios da indústria global.
          </p>
        </ScrollReveal>

        {/* 6 Stats Boxes Grid */}
        <div ref={statsSectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Stat 1: Imprensa Internacional (US$ 3 a 7) */}
          <ScrollReveal delay={1}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
                US$ 3 a 7
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                Por hora de vídeo aprovada
              </div>
              <div className="text-xs text-[#64748b]">Fonte: imprensa internacional</div>
            </div>
          </ScrollReveal>

          {/* Stat 2: Imprensa Internacional (R$ 5,3 mil) */}
          <ScrollReveal delay={2}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#fbbf24] hover:shadow-[0_0_20px_rgba(251,191,36,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#fbbf24]">
                R$ 5,3 mil
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                Faturados em 2 meses
              </div>
              <div className="text-xs text-[#64748b]">
                Por um gravador brasileiro (imprensa internacional)
              </div>
            </div>
          </ScrollReveal>

          {/* Stat 3: Diário do Nordeste (R$ 4 mil) */}
          <ScrollReveal delay={3}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#38bdf8]">
                {animated && countValues.stat3 >= 4000
                  ? 'R$ 4 mil'
                  : `R$ ${countValues.stat3.toLocaleString('pt-BR')}`}
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                Ganhos de cearenses com vídeos
              </div>
              <div className="text-xs text-[#64748b]">Fonte: Diário do Nordeste</div>
            </div>
          </ScrollReveal>

          {/* Stat 4: Tecmundo (100 mil+ horas) */}
          <ScrollReveal delay={1}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#34d399] hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#34d399]">
                {animated && countValues.stat4 >= 100000
                  ? '100 mil+ horas'
                  : `${countValues.stat4.toLocaleString('pt-BR')}+`}
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                De vídeo coletadas para treinar robôs
              </div>
              <div className="text-xs text-[#64748b]">Fonte: Tecmundo</div>
            </div>
          </ScrollReveal>

          {/* Stat 5: Tecmundo (50+ países) */}
          <ScrollReveal delay={2}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#00e5ff] drop-shadow-[0_0_16px_rgba(0,229,255,0.5)]">
                {countValues.stat5}+ países
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                Com gravadores contratados
              </div>
              <div className="text-xs text-[#64748b]">Fonte: Tecmundo</div>
            </div>
          </ScrollReveal>

          {/* Stat 6: Spectrum News (US$ 20-30 mil) */}
          <ScrollReveal delay={3}>
            <div className="bg-[#0f141c]/80 border border-[#1e293b]/80 rounded-2xl p-5 text-left transition-all duration-200 hover:border-[#a78bfa] hover:shadow-[0_0_20px_rgba(167,139,250,0.12)]">
              <div className="font-mono text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#a78bfa]">
                US$ 20-30 mil
              </div>
              <div className="font-semibold text-[#f1f5f9] text-sm sm:text-[0.95rem] mb-1">
                Preço estimado dos robôs humanoides
              </div>
              <div className="text-xs text-[#64748b]">Fonte: Spectrum News</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
