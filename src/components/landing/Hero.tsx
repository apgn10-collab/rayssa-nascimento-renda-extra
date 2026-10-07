import { LANDING_LINKS } from '@/lib/constants'

interface HeroProps {
  heroBgUrl: string
}

export const Hero = ({ heroBgUrl }: HeroProps) => {
  return (
    <section className="pt-4 sm:pt-6 pb-10 sm:pb-12">
      {/* Top badges */}
      <div className="mb-4 sm:mb-5 flex items-center justify-center gap-2.5 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] shadow-[0_0_16px_rgba(0,255,136,0.35)]">
          <span>✅ Novidade em alta</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse-dot" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-[#00e5ff]/10 border border-[#00e5ff]/35 text-[#e2e8f0] shadow-[0_0_10px_rgba(0,229,255,0.18)]">
          <span className="text-[#00e5ff]">✦</span>
          <span>Iniciativa Geração Alpha × Mimix</span>
        </div>
      </div>

      {/* Main Hero Card with prominent Visual Art / Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#00ff88]/30 bg-[#080d15] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(0,255,136,0.15)]">
        {/* Ambient glow in background card */}
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00e5ff]/15 rounded-full blur-[100px] pointer-events-none"
        />

        {/* HERO IMAGE CONTAINER - Arte Sci-Fi Neon Original (imagemgerada1791407667490-15f6d.png) */}
        <div className="relative w-full overflow-hidden group rounded-t-3xl bg-[#030712]">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] max-h-[580px] flex items-center justify-center overflow-hidden">
            <img
              src={heroBgUrl}
              alt="Mimix — Ganhe gravando seu dia a dia. Arte sci-fi neon original."
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="eager"
              fetchPriority="high"
            />

            {/* Vinheta e iluminação neon atmosférica */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d15] via-transparent to-black/40 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#00ff88]/20 pointer-events-none" />

            {/* Badges flutuantes no topo da moldura neon */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#00ff88]/50 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88]">Vagas Abertas</span>
              <span className="text-white/70 text-xs hidden sm:inline">
                • Brasil &amp; 70+ Países
              </span>
            </div>

            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#00e5ff]/50 text-xs sm:text-sm font-semibold text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <span>✦ IA Física &amp; Robótica</span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Body: Explanation & High-converting CTA posicionados logo abaixo da imagem */}
        <div className="relative z-10 px-4 sm:px-8 pt-6 pb-8 sm:pb-10 text-center max-w-[860px] mx-auto bg-[#080d15] border-t border-white/5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-white">
            Sua rotina doméstica agora é{' '}
            <span className="text-[#00ff88]">remunerada em dólar e Pix</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#cbd5e1] leading-relaxed mb-6 max-w-[700px] mx-auto font-normal">
            A IA física precisa de <strong>movimentos humanos reais</strong> para aprender tarefas
            básicas. Grave suas atividades cotidianas com o suporte de cabeça no celular e receba
            até <strong>US$ 7 por hora</strong>.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center flex-wrap mb-4">
            <a
              href={LANDING_LINKS.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,255,136,0.9),0_0_70px_rgba(0,229,255,0.5)] animate-glow-pulse"
              aria-label="Quero participar pelo suporte gratuito no WhatsApp"
            >
              <span>Começar agora pelo WhatsApp</span>
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

            <a
              href="#comprovantes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#e2e8f0] bg-[#0f172a]/80 border border-[#00e5ff]/45 backdrop-blur-md transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
            >
              <span>Ver comprovantes de saque</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#94a3b8] mb-5">
            Suporte 100% gratuito no WhatsApp — passo a passo detalhado para cadastro e aprovação
          </p>

          {/* Micro-dados visuais */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-black/50 border border-[#00ff88]/20 text-xs sm:text-sm text-[#94a3b8] flex-wrap justify-center">
            <span className="text-[#00ff88] font-bold">● Vagas abertas</span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span>Atendimento via WhatsApp</span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="text-[#00e5ff]">Brasil e 70+ países</span>
          </div>
        </div>
      </div>
    </section>
  )
}
