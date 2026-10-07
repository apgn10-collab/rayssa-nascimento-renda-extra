import { useState } from 'react'
import { LANDING_LINKS } from '@/lib/constants'
import { ScrollReveal } from '../ScrollReveal'
import { WhatsAppIcon } from '../WhatsAppIcon'

interface RealTasksSegmentsProps {
  dogWalkImg: string
  hotelImg: string
  slot1Img?: string
  slot2Img?: string
}

export const RealTasksSegments = ({
  dogWalkImg,
  hotelImg,
  slot1Img,
  slot2Img,
}: RealTasksSegmentsProps) => {
  const [dogError, setDogError] = useState(false)
  const [hotelError, setHotelError] = useState(false)
  const [slot1Error, setSlot1Error] = useState(false)
  const [slot2Error, setSlot2Error] = useState(false)

  return (
    <section id="tarefas-reais" className="py-14">
      {/* Cabeçalho da Seção */}
      <ScrollReveal className="text-center max-w-[740px] mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#38bdf8]/10 border border-[#38bdf8]/40 text-[#38bdf8] mb-3">
          <span>TAREFAS REAIS • DADOS PARA IA FÍSICA</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
          Sua rotina ajuda a IA física a{' '}
          <span className="text-[#00ff88]">entender o mundo real</span>
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
          De passear com o cachorro a organizar camas de hotel: robôs humanoides não aprendem com
          simulações, mas sim com <strong>pessoas de verdade executando afazeres reais</strong>.
        </p>
      </ScrollReveal>

      {/* Grid das Atividades em Destaque */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* BLOCO 1 (Foto 2): Tarefas do Dia a Dia — Dog Walk & Movimentos Naturais */}
        <ScrollReveal delay={1} className="h-full">
          <div className="group h-full flex flex-col bg-[#0b111a] border border-[#38bdf8]/30 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#38bdf8]/60 hover:-translate-y-1">
            {/* Visual Container */}
            <div className="relative w-full aspect-[4/4] sm:aspect-[4/3] bg-[#05080e] overflow-hidden flex items-center justify-center">
              {!dogError ? (
                <img
                  src={dogWalkImg}
                  alt="Sua rotina ajuda a IA física a entender o mundo real — POV passeio de cachorro com anotações de IA"
                  className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={() => setDogError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#38bdf8]">
                  <span className="text-5xl mb-2">🐕</span>
                  <span className="font-bold">Movimentos Reais do Dia a Dia</span>
                </div>
              )}
              {/* Badge de Categoria */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#38bdf8]/40 text-xs font-semibold text-[#38bdf8]">
                Passo a passo rotineiro
              </div>
            </div>

            {/* Conteúdo Explicativo */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow bg-[#0c121c]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#00ff88]">
                <span>POV EM PRIMEIRA PESSOA</span>
                <span>•</span>
                <span>CELULAR NO SUPORTE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Passeios, caminhadas e tarefas domésticas
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed mb-4">
                Pessoas reais gerando dados de navegação espacial, obstáculos na calçada e reações
                físicas. A sua rotina tem alto valor para os modelos de robótica mundial.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#94a3b8] mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">✔</span> Gravação mãos-livres com suporte de
                  cabeça
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">✔</span> Roteiros simples explicados passo a
                  passo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">✔</span> Pagamento por lote de minutos aprovados
                </li>
              </ul>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#64748b]">Remuneração via Pix / Dólar</span>
                <a
                  href={LANDING_LINKS.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00ff88] hover:underline"
                >
                  <span>Ver requisitos no grupo</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* BLOCO 2 (Foto 3): Setor Hoteleiro & Organização de Enxoval */}
        <ScrollReveal delay={2} className="h-full">
          <div className="group h-full flex flex-col bg-[#0b111a] border border-[#fbbf24]/35 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#fbbf24]/65 hover:-translate-y-1">
            {/* Visual Container */}
            <div className="relative w-full aspect-[4/4] sm:aspect-[4/3] bg-[#05080e] overflow-hidden flex items-center justify-center">
              {!hotelError ? (
                <img
                  src={hotelImg}
                  alt="Hotelaria: sua equipe pode participar — arrumar camas, organizar enxoval com gravação das mãos no suporte de cabeça"
                  className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={() => setHotelError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#fbbf24]">
                  <span className="text-5xl mb-2">🏨</span>
                  <span className="font-bold">Setor Hoteleiro &amp; Equipes</span>
                </div>
              )}
              {/* Badge de Categoria */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#fbbf24]/40 text-xs font-semibold text-[#fbbf24]">
                Equipes &amp; Hotelaria
              </div>
            </div>

            {/* Conteúdo Explicativo */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow bg-[#0c121c]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#fbbf24]">
                <span>HOTELARIA &amp; POUSADAS</span>
                <span>•</span>
                <span>RENDA EXTRA PARA EQUIPES</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Arrumar camas, organizar enxoval e dobras
              </h3>
              <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed mb-4">
                Empresas, camareiras e funcionários de hotelaria podem participar registrando suas
                tarefas diárias com celular no suporte de cabeça, transformando o expediente em
                remuneração adicional.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#94a3b8] mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#fbbf24]">✔</span> Perfeito para rotinas de arrumação e
                  organização
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#fbbf24]">✔</span> Tarefas padronizadas já solicitadas na
                  Minute
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#fbbf24]">✔</span> Participação individual ou de equipe
                  completa
                </li>
              </ul>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#64748b]">Apoio institucional no WhatsApp</span>
                <a
                  href={LANDING_LINKS.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#fbbf24] hover:underline"
                >
                  <span>Cadastrar equipe</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* BLOCO DE EXPANSÃO: ESTRUTURA PREPARADA PARA AS PRÓXIMAS 2 FOTOS DO USUÁRIO */}
      <ScrollReveal className="mt-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090d15] border border-dashed border-white/15">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">📸</span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Próximas categorias em expansão (Novas tarefas chegando)
              </span>
            </div>
            <span className="text-xs text-[#94a3b8] font-mono">
              2 novos segmentos em homologação
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Slot Futuro 1: Cozinha / Gastronomia / Lavanderia */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0e141f] border border-white/10 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="inline-block text-[0.7rem] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] mb-1">
                    Slot Reservado 1
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Culinária, Lavanderia &amp; Utensílios
                  </h4>
                </div>
                <span className="text-2xl opacity-60">🍳</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] mb-3">
                {slot1Img && !slot1Error
                  ? 'Foto adicionada e pronta para publicação.'
                  : 'Espaço preparado para receber a próxima foto do usuário mostrando tarefas na cozinha, corte de alimentos, lavagem ou dobra de toalhas.'}
              </p>
              {slot1Img && !slot1Error ? (
                <img
                  src={slot1Img}
                  alt="Segmento de Culinária e Lavanderia"
                  className="w-full h-44 object-cover rounded-lg border border-white/10"
                  onError={() => setSlot1Error(true)}
                />
              ) : (
                <div className="h-28 rounded-lg bg-[#070a10] border border-dashed border-[#00ff88]/30 flex flex-col items-center justify-center text-center p-3 text-xs text-[#64748b]">
                  <span className="text-[#00ff88] font-medium mb-0.5">
                    Aguardando 4ª foto do usuário
                  </span>
                  <span>(Encaixe automático neste slot)</span>
                </div>
              )}
            </div>

            {/* Slot Futuro 2: Comércio / Estoque / Organização comercial */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0e141f] border border-white/10 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="inline-block text-[0.7rem] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] mb-1">
                    Slot Reservado 2
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Estoque, Lojas &amp; Organização
                  </h4>
                </div>
                <span className="text-2xl opacity-60">📦</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] mb-3">
                {slot2Img && !slot2Error
                  ? 'Foto adicionada e pronta para publicação.'
                  : 'Espaço preparado para receber a 5ª foto do usuário retratando reposição de prateleiras, manuseio de caixas ou catalogação.'}
              </p>
              {slot2Img && !slot2Error ? (
                <img
                  src={slot2Img}
                  alt="Segmento de Estoque e Comércio"
                  className="w-full h-44 object-cover rounded-lg border border-white/10"
                  onError={() => setSlot2Error(true)}
                />
              ) : (
                <div className="h-28 rounded-lg bg-[#070a10] border border-dashed border-[#38bdf8]/30 flex flex-col items-center justify-center text-center p-3 text-xs text-[#64748b]">
                  <span className="text-[#38bdf8] font-medium mb-0.5">
                    Aguardando 5ª foto do usuário
                  </span>
                  <span>(Encaixe automático neste slot)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Chamada para o WhatsApp logo após os segmentos */}
      <ScrollReveal className="text-center mt-10">
        <a
          href={LANDING_LINKS.whatsappGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-200 hover:-translate-y-1 hover:scale-105"
        >
          <WhatsAppIcon size={20} className="shrink-0" />
          <span>Quero treinar IA com minhas tarefas</span>
        </a>
      </ScrollReveal>
    </section>
  )
}
export default RealTasksSegments
