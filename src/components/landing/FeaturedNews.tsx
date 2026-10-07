import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'

export const FeaturedNews = () => {
  return (
    <section id="noticias" className="py-12">
      <ScrollReveal className="text-center max-w-[680px] mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-3 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
          <span>FONTE OFICIAL & COMPROVAÇÃO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
          Não acredite em mim.{' '}
          <span className="text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
            Acredite na imprensa.
          </span>
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg">
          Reportagens reais mostram a demanda urgente por gravações domésticas.
        </p>
      </ScrollReveal>

      {/* Grid of 2 News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1060px] mx-auto">
        {/* Card 1: CNN Brasil */}
        <ScrollReveal delay={1} className="h-full">
          <div className="h-full flex flex-col justify-between bg-gradient-to-b from-[#121824] to-[#0c1017] border border-[#1e293b] rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:border-[#00ff88]/45 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_25px_rgba(0,255,136,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#00ff88]/40 before:to-transparent before:opacity-50">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-600/20 text-red-400 border border-red-600/40">
                  CNN BRASIL • ECONOMIA
                </span>
                <span className="text-xs text-[#64748b] font-mono">08/04/2026</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3 text-[#f8fafc]">
                "Como gravar tarefas domésticas pode treinar robôs 'mordomos' no futuro"
              </h3>

              <p className="text-[#94a3b8] text-sm sm:text-[0.95rem] leading-relaxed mb-5">
                Reportagem detalha pagamentos de{' '}
                <strong className="text-[#00ff88]">US$ 5 a US$ 20 por hora</strong> para gravar
                tarefas rotineiras e abastecer IAs.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
              <span className="text-xs text-[#64748b]">Matéria Completa</span>
              <a
                href={LANDING_LINKS.news.cnn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#e2e8f0] bg-[#0f172a]/70 border border-[#00e5ff]/45 transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
                aria-label="Ler a notícia na CNN Brasil em nova aba"
              >
                <span>Ler na CNN Brasil</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: OCorre News */}
        <ScrollReveal delay={2} className="h-full">
          <div className="h-full flex flex-col justify-between bg-gradient-to-b from-[#121824] to-[#0c1017] border border-[#1e293b] rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:border-[#00ff88]/45 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_25px_rgba(0,255,136,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#00ff88]/40 before:to-transparent before:opacity-50">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/40">
                  OCORRE NEWS • TECH
                </span>
                <span className="text-xs text-[#64748b] font-mono">16/07/2026</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3 text-[#f8fafc]">
                "Conheça a plataforma que paga por vídeos do cotidiano para treinar robôs"
              </h3>

              <p className="text-[#94a3b8] text-sm sm:text-[0.95rem] leading-relaxed mb-5">
                Mais de <strong className="text-[#00e5ff]">150 países, incluindo o Brasil</strong>,
                remunerando pessoas comuns com seus próprios celulares.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
              <span className="text-xs text-[#64748b]">Matéria Completa</span>
              <a
                href={LANDING_LINKS.news.ocorre}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#e2e8f0] bg-[#0f172a]/70 border border-[#00e5ff]/45 transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
                aria-label="Ler a notícia no OCorre News em nova aba"
              >
                <span>Ler no OCorre News</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
