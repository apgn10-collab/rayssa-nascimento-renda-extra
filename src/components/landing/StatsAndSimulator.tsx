import { useState, useEffect, useRef } from 'react'
import { ScrollReveal } from '../ScrollReveal'

export const StatsAndSimulator = () => {
  const [hours, setHours] = useState(10)
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

  // Calculation for the simulator
  const minUsd = hours * 5 * 4
  const maxUsd = hours * 20 * 4
  const rateBrl = 5.5
  const minBrl = Math.round(minUsd * rateBrl)
  const maxBrl = Math.round(maxUsd * rateBrl)

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
            Dados extraídos diretamente de reportagens da CNN e relatórios da indústria.
          </p>
        </ScrollReveal>

        {/* 6 Stats Boxes Grid */}
        <div
          ref={statsSectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
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

        {/* Simulador Interativo */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#141b26]/90 to-[#0d131d]/95 border border-[#1e293b] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-[#00ff88]/45 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_25px_rgba(0,255,136,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#00ff88]/40 before:to-transparent before:opacity-50">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-1">
                    Simulador Educativo
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    Simule com base nos valores da CNN Brasil
                  </h3>
                </div>
                <span className="text-xs sm:text-sm text-[#94a3b8] font-mono">
                  Faixa: US$ 5 a US$ 20 / hora
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mt-2">
                <div>
                  <div className="flex justify-between items-center text-sm sm:text-base mb-2">
                    <span className="text-[#94a3b8]">Horas gravadas por semana:</span>
                    <strong className="text-[#00ff88] font-mono text-base sm:text-lg">
                      {hours} {hours === 1 ? 'hora' : 'horas'} / semana
                    </strong>
                  </div>

                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value, 10))}
                    aria-label="Horas gravadas por semana"
                    className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#00ff88]"
                  />
                </div>

                <div className="text-right bg-black/40 p-4 sm:p-5 rounded-xl border border-[#00ff88]/25">
                  <div className="text-[0.75rem] text-[#94a3b8] uppercase tracking-wider mb-1">
                    Estimativa Mensal (US$)
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00ff88]">
                    US$ {minUsd} – {maxUsd}
                  </div>
                  <div className="text-sm sm:text-base text-[#38bdf8] font-mono">
                    aprox. R$ {minBrl.toLocaleString('pt-BR')} – {maxBrl.toLocaleString('pt-BR')}*
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
                *Estimativa matemática fictícia baseada nas faixas divulgadas pela reportagem da CNN
                Brasil (cotação estimada US$ 1 = R$ 5,50). Os ganhos dependem exclusivamente de
                aprovação e disponibilidade técnica na plataforma parceira.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
