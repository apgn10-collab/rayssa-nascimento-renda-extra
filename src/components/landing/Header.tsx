import { useState } from 'react'
import { siteConfig } from '@/config/site'

interface HeaderProps {
  logoUrl?: string
}

export const Header = ({ logoUrl = siteConfig.images.avatarImage }: HeaderProps) => {
  const [logoError, setLogoError] = useState(false)
  const { partner, images } = siteConfig

  return (
    <header className="sticky top-0 z-[900] bg-[#07090e]/90 backdrop-blur-md border-b border-[#00ff88]/20 shadow-[0_4px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(0,255,136,0.05)] transition-all duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-5">
        <nav
          className="flex items-center justify-between py-3.5 sm:py-5"
          aria-label="Navegação principal"
        >
          {/* ESQUERDA: Logo circular + Texto em duas linhas */}
          <div className="flex items-center gap-3 sm:gap-4.5">
            <div
              className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full border-2 border-[#fbbf24]/85 shadow-[0_0_18px_rgba(251,191,36,0.45),0_0_26px_rgba(0,255,136,0.25)] overflow-hidden flex items-center justify-center bg-[#090e18] shrink-0 transition-transform duration-200 hover:scale-105"
              title={partner.brandName}
            >
              {!logoError ? (
                <img
                  src={logoUrl}
                  alt={images.avatarImageAlt}
                  className="w-full h-full object-cover object-[center_20%] block rounded-full"
                  loading="eager"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#162030] to-[#090e18] text-[#fbbf24] font-mono text-xl sm:text-2xl font-extrabold tracking-wider shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                  aria-hidden="true"
                >
                  {partner.monogramFallback}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="text-lg sm:text-2xl font-extrabold tracking-[1.8px] sm:tracking-[2.5px] leading-tight flex items-center gap-1.5">
                <span className="text-white">{partner.logoLine1}</span>
                <span className="text-[#fbbf24] drop-shadow-[0_0_14px_rgba(251,191,36,0.45)]">
                  {partner.logoLine2}
                </span>
              </div>
              <div className="text-xs sm:text-[0.95rem] font-semibold text-[#00ff88] tracking-wide leading-tight drop-shadow-[0_0_10px_rgba(0,255,136,0.35)]">
                em parceria com a Mimix
              </div>
            </div>
          </div>

          {/* DIREITA: Chip indicador de parceria oficial */}
          <div className="hidden sm:flex items-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e1520]/85 border border-[#00ff88]/35 rounded-full text-[0.9rem] font-semibold text-[#e2e8f0] shadow-[0_0_14px_rgba(0,255,136,0.12)] transition-all duration-200 hover:border-[#00ff88] hover:text-white hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:-translate-y-0.5 whitespace-nowrap cursor-default"
              title={partner.partnershipLabel}
            >
              <span aria-hidden="true">🤝</span>
              <span>{partner.partnershipLabel}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
