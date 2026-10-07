import { LANDING_LINKS } from '@/lib/constants'
import { LANDING_IMAGES } from '@/lib/images'
import { ScrollReveal } from '../ScrollReveal'

interface NewsItem {
  id: string
  outlet: string
  badgeLabel: string
  badgeClass: string
  date: string
  author?: string
  title: string
  summary: string
  keyHighlight: string
  coverImage: string
  coverAlt: string
  link: string
  buttonText: string
  ariaLabel: string
}

export const FeaturedNews = () => {
  const newsItems: NewsItem[] = [
    {
      id: 'cnn-brasil',
      outlet: 'CNN BRASIL MONEY',
      badgeLabel: 'CNN BRASIL • MONEY',
      badgeClass: 'bg-red-600/20 text-red-400 border-red-600/40',
      date: '08/04/2026',
      author: 'Stephanie Yang',
      title: 'Como gravar tarefas domésticas pode treinar robôs "mordomos" no futuro',
      summary:
        'Empresas contratam trabalhadores para filmar atividades domésticas e gerar dados que ajudam a treinar robôs com inteligência artificial.',
      keyHighlight:
        'Remunerações de US$ 5 a US$ 20/hora para abastecer IAs físicas com rotinas cotidianas.',
      coverImage: LANDING_IMAGES.newsCovers.cnn,
      coverAlt:
        'Capa da reportagem na CNN Brasil Money sobre gravação de tarefas domésticas para treinar robôs humanoides',
      link: LANDING_LINKS.news.cnn,
      buttonText: 'Ler na CNN Brasil',
      ariaLabel: 'Ler a notícia original na CNN Brasil Money em nova aba',
    },
    {
      id: 'tecmundo-estadao',
      outlet: 'TECMUNDO / ESTADÃO',
      badgeLabel: 'TECMUNDO • ESTADÃO',
      badgeClass: 'bg-blue-600/20 text-blue-400 border-blue-500/40',
      date: '21/07/2026',
      title: 'Como trabalhadores estão filmando empregos para treinar IA; entenda',
      summary:
        'Entenda por que trabalhadores estão gravando suas tarefas e como esses vídeos alimentam o aprendizado de robôs e sistemas autônomos.',
      keyHighlight:
        'Startups globais e montadoras investem em milhares de horas de tarefas gravadas.',
      coverImage: LANDING_IMAGES.newsCovers.tecmundoEstadao,
      coverAlt:
        'Capa da matéria do TecMundo e Estadão sobre trabalhadores filmando tarefas para treinar IA',
      link: LANDING_LINKS.news.tecmundo,
      buttonText: 'Ler no TecMundo',
      ariaLabel: 'Ler a reportagem no TecMundo / Estadão em nova aba',
    },
    {
      id: 'diario-do-nordeste',
      outlet: 'DIÁRIO DO NORDESTE',
      badgeLabel: 'DIÁRIO DO NORDESTE • NEGÓCIOS',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      date: '18/09/2026',
      author: 'Mariana Lemos',
      title:
        'Cearenses ganham até R$ 4 mil com vídeos para treinar robôs e IAs; entenda tendência e riscos',
      summary:
        'Uma das plataformas já tem 3 mil brasileiros em sua base gravando rotinas como lavar louça e arrumar a casa com o celular.',
      keyHighlight: 'Renda extra de até R$ 1 mil por semana realizando tarefas domésticas normais.',
      coverImage: LANDING_IMAGES.newsCovers.diarioNordeste,
      coverAlt:
        'Capa da matéria do Diário do Nordeste mostrando pessoa com suporte de celular gravando atividades de cozinha',
      link: LANDING_LINKS.news.diarioNordeste,
      buttonText: 'Ler no Diário do Nordeste',
      ariaLabel: 'Ler a reportagem no Diário do Nordeste em nova aba',
    },
  ]

  return (
    <section id="noticias" className="py-14 sm:py-16 scroll-mt-20">
      <ScrollReveal className="text-center max-w-[760px] mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-3 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span>IMPRENSA & COMPROVAÇÃO OFICIAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
          Não acredite em promessas.{' '}
          <span className="text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
            Acredite nas notícias reais.
          </span>
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg max-w-[660px] mx-auto">
          Veja com os seus próprios olhos as reportagens publicadas pelos maiores veículos de
          jornalismo do Brasil e do mundo.
        </p>
      </ScrollReveal>

      {/* Grid harmônico de 3 colunas em desktop, 1 coluna em mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto items-stretch">
        {newsItems.map((item, index) => (
          <ScrollReveal
            key={item.id}
            delay={((index % 3) + 1) as 1 | 2 | 3}
            className="h-full flex"
          >
            <article className="w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#121824] to-[#0a0e16] border border-[#1e293b] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ff88]/50 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(0,255,136,0.15)] group">
              {/* Capa da Notícia com aspecto visual profissional e link clicável */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="relative block w-full aspect-[16/10] overflow-hidden bg-[#070a10] border-b border-[#1e293b]/80 group/img"
              >
                <img
                  src={item.coverImage}
                  alt={item.coverAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105 group-hover:scale-105"
                />
                {/* Overlay de gradiente suave no rodapé da foto para integrar com o card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/20 pointer-events-none" />

                {/* Badge flutuante do veículo sobre a capa */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`inline-flex items-center text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-md shadow-md border ${item.badgeClass}`}
                  >
                    {item.badgeLabel}
                  </span>
                </div>

                {/* Data flutuante */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center text-[0.68rem] font-mono text-[#cbd5e1] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    {item.date}
                  </span>
                </div>
              </a>

              {/* Corpo do Card */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {item.author && (
                    <div className="text-[0.72rem] text-[#64748b] mb-1.5 font-medium">
                      Por <span className="text-[#94a3b8]">{item.author}</span>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg font-bold leading-snug mb-2.5 text-[#f8fafc] group-hover:text-white transition-colors line-clamp-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-2 decoration-[#00ff88]/60"
                    >
                      "{item.title}"
                    </a>
                  </h3>

                  <p className="text-[#94a3b8] text-xs sm:text-[0.85rem] leading-relaxed mb-3 line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="p-2.5 rounded-lg bg-[#070b12]/80 border border-[#1e293b] text-[0.75rem] text-[#cbd5e1] leading-relaxed mb-4">
                    <span className="text-[#00ff88] font-bold mr-1">Destaque:</span>
                    {item.keyHighlight}
                  </div>
                </div>

                {/* Botão de Ação Direta para a Matéria */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
                  <span className="text-[0.72rem] text-[#64748b] font-medium uppercase tracking-wider">
                    Fonte Verificada
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#e2e8f0] bg-[#0f172a] border border-[#00e5ff]/50 transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_18px_rgba(0,229,255,0.35)] hover:-translate-y-0.5"
                    aria-label={item.ariaLabel}
                  >
                    <span>{item.buttonText}</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="shrink-0"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
