import { useState } from 'react'
import { ScrollReveal } from '../ScrollReveal'

interface HowItWorksProps {
  step1Img: string
  step2Img: string
  step3Img: string
  step1Thumb?: string
  step2Thumb?: string
  step3Thumb?: string
}

export const HowItWorks = ({
  step1Img,
  step2Img,
  step3Img,
  step1Thumb,
  step2Thumb,
  step3Thumb,
}: HowItWorksProps) => {
  const [err1, setErr1] = useState(false)
  const [err2, setErr2] = useState(false)
  const [err3, setErr3] = useState(false)

  return (
    <section id="como-funciona" className="py-14 scroll-mt-20">
      <ScrollReveal className="text-center max-w-[680px] mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-3 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
          <span>3 PASSOS SIMPLES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Como funciona</h2>
        <p className="text-[#94a3b8] text-base sm:text-lg">
          Ordem lógica e transparente: escolha a tarefa no app, grave em primeira pessoa e receba.
        </p>
      </ScrollReveal>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-5">
        {/* Step 1: Escolha uma tarefa no app Mimix */}
        <ScrollReveal delay={1} className="h-full">
          <div className="group h-full flex flex-col bg-[#141b26] border border-[#00ff88]/28 rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_18px_rgba(0,255,136,0.08)] transition-all duration-300 hover:border-[#00ff88]/60 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,136,0.22)]">
            <div className="relative w-[calc(100%-20px)] mx-[10px] mt-[10px] aspect-[9/16] max-h-[480px] md:max-h-none rounded-2xl overflow-hidden bg-[#080c14] border border-[#00ff88]/28 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)] flex items-center justify-center">
              {!err1 ? (
                <img
                  src={step1Thumb || step1Img}
                  alt="Tela do aplicativo Mimix mostrando lista de tarefas disponíveis para gravar"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (step1Thumb && target.src !== step1Img) {
                      target.src = step1Img
                    } else {
                      setErr1(true)
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#080e18] text-[#00ff88]">
                  <span className="text-4xl">📱</span>
                  <span className="text-xs text-[#94a3b8]">Passo 1</span>
                </div>
              )}
              <span
                className="absolute top-3.5 left-3.5 w-10 h-10 rounded-full bg-[#070c13]/90 border-2 border-[#00ff88] text-[#00ff88] font-mono text-lg font-extrabold flex items-center justify-center shadow-[0_0_18px_rgba(0,255,136,0.65)] backdrop-blur-md z-10"
                aria-label="Passo 1"
              >
                1
              </span>
              <div className="absolute bottom-3 left-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-[#00ff88]/30 text-[0.72rem] text-center text-[#94a3b8] font-mono">
                App Mimix • Lista de tarefas ativas
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <div className="text-[0.75rem] font-mono text-[#00ff88] mb-1 font-semibold uppercase tracking-wider">
                Etapa 1 • No Aplicativo
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Escolha uma tarefa no app
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-[0.93rem] leading-relaxed mb-3">
                Abra o aplicativo Mimix e selecione a tarefa do seu dia a dia (limpeza, aplicação de
                etiquetas, cabeamento, culinária e rotinas da casa).
              </p>
              <div className="mt-auto pt-3 border-t border-white/5 text-xs text-[#94a3b8] flex items-center gap-1.5">
                <span className="text-[#00ff88]">✔</span>
                <span>Filtro por categoria e instruções na tela</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Arrow 1 -> 2 */}
        <div
          className="hidden md:flex items-center justify-center text-[#00e5ff] text-3xl font-extrabold animate-arrow-flow px-1 select-none"
          aria-hidden="true"
        >
          →
        </div>

        {/* Step 2: Grave com o suporte de cabeça (head-mount) */}
        <ScrollReveal delay={2} className="h-full">
          <div className="group h-full flex flex-col bg-[#141b26] border border-[#00ff88]/28 rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_18px_rgba(0,255,136,0.08)] transition-all duration-300 hover:border-[#00ff88]/60 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,136,0.22)]">
            <div className="relative w-[calc(100%-20px)] mx-[10px] mt-[10px] aspect-[9/16] max-h-[480px] md:max-h-none rounded-2xl overflow-hidden bg-[#080c14] border border-[#00ff88]/28 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)] flex items-center justify-center">
              {!err2 ? (
                <img
                  src={step2Thumb || step2Img}
                  alt="Mulher gravando tarefa com celular acoplado na faixa de cabeça (head-mount) em primeira pessoa"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (step2Thumb && target.src !== step2Img) {
                      target.src = step2Img
                    } else {
                      setErr2(true)
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#080e18] text-[#00ff88]">
                  <span className="text-4xl">📹</span>
                  <span className="text-xs text-[#94a3b8]">Passo 2</span>
                </div>
              )}
              <span
                className="absolute top-3.5 left-3.5 w-10 h-10 rounded-full bg-[#070c13]/90 border-2 border-[#00ff88] text-[#00ff88] font-mono text-lg font-extrabold flex items-center justify-center shadow-[0_0_18px_rgba(0,255,136,0.65)] backdrop-blur-md z-10"
                aria-label="Passo 2"
              >
                2
              </span>
              <div className="absolute bottom-3 left-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-[#00ff88]/30 text-[0.72rem] text-center text-[#94a3b8] font-mono">
                Captura POV • Ângulo em 1ª pessoa
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <div className="text-[0.75rem] font-mono text-[#00e5ff] mb-1 font-semibold uppercase tracking-wider">
                Etapa 2 • Gravação POV
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Prenda o celular e execute
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-[0.93rem] leading-relaxed mb-3">
                Com o suporte de cabeça (head-mount), posicione a câmera na altura dos olhos e
                execute a tarefa com naturalidade — mãos livres gravando o movimento real.
              </p>
              <div className="mt-auto pt-3 border-t border-white/5 text-xs text-[#94a3b8] flex items-center gap-1.5">
                <span className="text-[#00e5ff]">✔</span>
                <span>Sem complicações, direto pelo seu smartphone</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Arrow 2 -> 3 */}
        <div
          className="hidden md:flex items-center justify-center text-[#00e5ff] text-3xl font-extrabold animate-arrow-flow px-1 select-none"
          aria-hidden="true"
        >
          →
        </div>

        {/* Step 3 - Highlight: Recebimento Pix / USDT */}
        <ScrollReveal delay={3} className="h-full">
          <div className="group h-full flex flex-col bg-[#141b26] border-2 border-[#00ff88] rounded-[18px] overflow-hidden shadow-[0_0_25px_rgba(0,255,136,0.4),0_10px_30px_rgba(0,0,0,0.7)] animate-neon-step3-glow transition-all duration-300 hover:-translate-y-1">
            <div className="relative w-[calc(100%-20px)] mx-[10px] mt-[10px] aspect-[9/16] max-h-[480px] md:max-h-none rounded-2xl overflow-hidden bg-[#080c14] border border-[#00ff88]/28 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)] flex items-center justify-center">
              {/* Badge oficial */}
              <div className="absolute top-3.5 right-3.5 z-20 bg-gradient-to-br from-[#00ff88] to-[#00d26a] text-[#021a0e] text-[0.72rem] font-extrabold px-2.5 py-1 rounded-lg border border-[#a7f3d0] shadow-[0_0_15px_rgba(0,255,136,0.5),0_4px_10px_rgba(0,0,0,0.6)] whitespace-nowrap">
                PIX OU USDT
              </div>

              {!err3 ? (
                <img
                  src={step3Thumb || step3Img}
                  alt="Regras de pagamento oficial: Pagamento via Pix ou USDT mediante vídeos aprovados todo dia 08 e 20"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (step3Thumb && target.src !== step3Img) {
                      target.src = step3Img
                    } else {
                      setErr3(true)
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#080e18] text-[#00ff88]">
                  <span className="text-4xl">💰</span>
                  <span className="text-xs text-[#94a3b8]">Passo 3</span>
                </div>
              )}
              <span
                className="absolute top-3.5 left-3.5 w-10 h-10 rounded-full bg-[#070c13]/90 border-2 border-[#00ff88] text-[#00ff88] font-mono text-lg font-extrabold flex items-center justify-center shadow-[0_0_18px_rgba(0,255,136,0.65)] backdrop-blur-md z-10"
                aria-label="Passo 3"
              >
                3
              </span>
              <div className="absolute bottom-3 left-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-[#fbbf24]/50 text-[0.72rem] text-center text-[#fde047] font-semibold">
                Pagamentos dia 08 e dia 20 de cada mês
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <div className="text-[0.75rem] font-mono text-[#fbbf24] mb-1 font-semibold uppercase tracking-wider">
                Etapa 3 • Pagamento Garantido
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Receba via Pix ou USDT
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-[0.93rem] leading-relaxed mb-3">
                Pagamento mediante vídeos aprovados. Os repasses acontecem pontualmente no{' '}
                <strong className="text-[#00ff88] font-bold">dia 08 e dia 20 de cada mês</strong>{' '}
                diretamente na sua chave Pix ou carteira USDT.
              </p>
              <div className="mt-auto pt-3 border-t border-white/5 text-xs text-[#94a3b8] flex items-center justify-between">
                <span className="text-[#00ff88] font-semibold">Até US$ 7 / hora aprovada</span>
                <span className="text-[#cbd5e1]">Transparência total</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Honest & Transparent Notice */}
      <ScrollReveal className="mt-8">
        <div className="p-5 sm:p-6 bg-red-500/5 border border-red-500/25 rounded-xl flex items-start gap-4">
          <div className="text-red-400 text-2xl leading-none" aria-hidden="true">
            ⚠️
          </div>
          <div>
            <strong className="text-red-300 text-xs sm:text-sm uppercase tracking-wider block mb-1">
              Critérios Importantes de Qualidade
            </strong>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed m-0">
              Nem todo vídeo é aprovado — qualidade importa. Exige celular próprio compatível.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
