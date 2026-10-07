import { LANDING_LINKS } from '@/lib/constants'

interface HeroProps {
  heroBgUrl: string
}

export const Hero = ({ heroBgUrl }: HeroProps) => {
  return (
    <section className="pt-6 pb-12">
      <div className="relative rounded-3xl overflow-hidden border border-[#00ff88]/25 bg-[#0a0f17] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(0,255,136,0.1)]">
        {/* Background Image */}
        <img
          src={heroBgUrl}
          alt="Mulher filmando tarefas do cotidiano na cozinha com celular acoplado na cabeça"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-30 saturate-110 contrast-110 pointer-events-none"
          loading="eager"
        />

        {/* Content with Gradient Overlay */}
        <div className="relative z-10 px-4 sm:px-8 py-12 sm:py-16 text-center max-w-[860px] mx-auto bg-gradient-to-b from-[#07090e]/80 via-[#07090e]/92 to-[#07090e]/98">
          {/* Selos / Badges */}
          <div className="mb-5 flex items-center justify-center gap-2.5 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] shadow-[0_0_16px_rgba(0,255,136,0.35)]">
              <span>✅ Isso está nas notícias</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse-dot" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-[#00e5ff]/5 border border-[#00e5ff]/35 text-[#94a3b8] shadow-[0_0_10px_rgba(0,229,255,0.12)]">
              <span className="text-[#00e5ff]">✦</span>
              <span>Uma iniciativa Geração Alpha</span>
            </div>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[3.3rem] font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
            Ganhe dinheiro extra <br />
            <span className="text-[#00ff88] drop-shadow-[0_0_16px_rgba(0,255,136,0.5)]">
              gravando o seu dia a dia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#cbd5e1] leading-relaxed mb-8 max-w-[650px] mx-auto">
            Big techs pagam para você filmar afazeres simples com o smartphone para treinar robôs
            humanoides.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center flex-wrap mb-3">
            <a
              href={LANDING_LINKS.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,255,136,0.9),0_0_70px_rgba(0,229,255,0.5)] animate-glow-pulse"
              aria-label="Quero participar pelo suporte gratuito no WhatsApp"
            >
              <span>Quero participar</span>
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#e2e8f0] bg-[#0f172a]/70 border border-[#00e5ff]/45 backdrop-blur-md transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
            >
              <span>Ver comprovação</span>
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

          <p className="text-xs sm:text-sm text-[#94a3b8] mb-6">
            Suporte gratuito no WhatsApp — receba os vídeos ensinando a se cadastrar passo a passo
          </p>

          {/* Micro-dados visuais */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-black/45 border border-[#00ff88]/20 text-xs sm:text-sm text-[#94a3b8]">
            <span className="text-[#00ff88] font-bold">● Vagas abertas</span>
            <span className="opacity-40">|</span>
            <span>Atendimento via WhatsApp</span>
            <span className="opacity-40">|</span>
            <span className="text-[#00e5ff]">Brasil e 70+ países</span>
          </div>
        </div>
      </div>
    </section>
  )
}
