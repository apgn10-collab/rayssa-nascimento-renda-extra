import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'

export const GlobalPress = () => {
  const internationalArticles = [
    {
      outlet: 'MIT TECH REVIEW',
      badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/40',
      date: '01/04/2026',
      title: '"The gig workers who are training humanoid robots at home"',
      desc: 'Estudante na Nigéria prende o iPhone na testa e grava tarefas de casa para plataformas venderem dados essenciais a empresas de robótica.',
      link: LANDING_LINKS.news.mit,
      ariaLabel: 'Ler reportagem no MIT Technology Review em nova aba',
    },
    {
      outlet: 'BUSINESS INSIDER',
      badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/40',
      date: '10/10/2025',
      title: '"You can now get paid to fold your laundry — as long as you film it"',
      desc: 'Startups de inteligência artificial pagam pessoas para filmar tarefas como dobrar roupa, lavar pratos e preparar café em suas próprias residências.',
      link: LANDING_LINKS.news.businessInsider,
      ariaLabel: 'Ler reportagem no Business Insider em nova aba',
    },
    {
      outlet: 'YAHOO FINANCE',
      badgeClass: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/40',
      date: '26/08/2026',
      title: '"Figure\'s Billion-Dollar Bet: Gig Platform for Humans"',
      desc: 'A Figure, gigante avaliada em bilhões no mercado de robôs humanoides, lançou plataforma para remunerar pessoas na coleta de dados cotidianos.',
      link: LANDING_LINKS.news.yahoo,
      ariaLabel: 'Ler reportagem no Yahoo Finance em nova aba',
    },
    {
      outlet: 'GIZ BRASIL • UOL',
      badgeClass: 'bg-pink-500/15 text-pink-400 border-pink-500/40',
      date: 'TECH BRASIL',
      title: '"Você filmaria sua casa para treinar robôs?"',
      desc: 'Análise mostra como o treinamento de inteligência artificial espacial está abrindo oportunidades diretas para faxina, cozinha e lavanderia.',
      link: LANDING_LINKS.news.gizmodo,
      ariaLabel: 'Ler reportagem no Giz Brasil UOL em nova aba',
    },
  ]

  return (
    <section id="imprensa-global" className="py-12">
      <ScrollReveal className="text-center max-w-[760px] mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fbbf24]/10 border border-[#fbbf24]/40 text-[#fbbf24] mb-3">
          <span>COBERTURA INTERNACIONAL & PORTAIS GLOBAIS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
          Uma tendência que já se espalhou{' '}
          <span className="text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
            pelo mundo inteiro.
          </span>
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg">
          Os veículos de maior relevância em tecnologia e negócios acompanham essa revolução dia a
          dia.
        </p>
      </ScrollReveal>

      {/* Grid de 4 Artigos Globais em 2 ou 4 colunas perfeitamente alinhadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
        {internationalArticles.map((article, index) => (
          <ScrollReveal
            key={article.outlet}
            delay={((index % 4) + 1) as 1 | 2 | 3}
            className="h-full flex"
          >
            <div className="w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#121824] to-[#0c1017] border border-[#1e293b] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[#00ff88]/45 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_25px_rgba(0,255,136,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#00ff88]/40 before:to-transparent before:opacity-50">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`inline-flex items-center text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${article.badgeClass}`}
                  >
                    {article.outlet}
                  </span>
                  <span className="text-xs text-[#64748b] font-mono">{article.date}</span>
                </div>

                <h3 className="text-base font-bold leading-snug mb-2.5 text-[#f8fafc]">
                  {article.title}
                </h3>

                <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">{article.desc}</p>
              </div>

              <div className="border-t border-white/10 pt-3.5 flex justify-end mt-auto">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#e2e8f0] bg-[#0f172a]/70 border border-[#00e5ff]/45 transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
                  aria-label={article.ariaLabel}
                >
                  <span>Ler matéria</span>
                  <svg
                    width="13"
                    height="13"
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
        ))}
      </div>
    </section>
  )
}
