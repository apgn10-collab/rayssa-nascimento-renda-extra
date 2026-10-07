export const NewsTicker = () => {
  const items = [
    { tag: 'TECMUNDO:', text: 'trabalhadores filmando empregos para treinar IA' },
    { tag: 'DIÁRIO DO NORDESTE:', text: 'cearenses ganham até R$ 4 mil' },
    { tag: 'MIT:', text: 'gig workers treinando robôs em casa' },
    { tag: 'CNN:', text: 'robôs mordomos do futuro' },
  ]

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap bg-[#0a0f18]/85 border-y border-[#00ff88]/20 border-b-[#00e5ff]/20 py-3 my-4"
      aria-label="Notícias da imprensa sobre treinamento de IA"
    >
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="inline-flex gap-8 animate-ticker">
        {/* Set 1 */}
        {items.map((item, idx) => (
          <div key={`s1-${idx}`} className="inline-flex items-center gap-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#cbd5e1] font-mono">
              <span className="text-[#00ff88] font-bold">{item.tag}</span>
              <span>{item.text}</span>
            </div>
            <span className="text-[#00e5ff] opacity-60">•</span>
          </div>
        ))}

        {/* Set 2 (Exact duplication for seamless loop) */}
        {items.map((item, idx) => (
          <div key={`s2-${idx}`} className="inline-flex items-center gap-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#cbd5e1] font-mono">
              <span className="text-[#00ff88] font-bold">{item.tag}</span>
              <span>{item.text}</span>
            </div>
            <span className="text-[#00e5ff] opacity-60">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
