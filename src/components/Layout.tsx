import { useEffect, useState, type ReactNode } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { LANDING_LINKS } from '@/lib/constants'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(Math.max(scrolled, 0), 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] font-sans antialiased selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      {/* 1. Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[9999] pointer-events-none transition-[width] duration-100 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00ff88, #38bdf8)',
          boxShadow: '0 0 8px rgba(0, 255, 136, 0.5)',
        }}
        aria-hidden="true"
      />

      {/* 2. Tech Grid Background Overlay Suavizado */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundSize: '48px 48px',
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Ambient background glows suaves e equilibrados */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.08), transparent),
            radial-gradient(circle 600px at 80% 20%, rgba(0, 255, 136, 0.05), transparent),
            radial-gradient(circle 500px at 10% 80%, rgba(56, 189, 248, 0.05), transparent)
          `,
        }}
        aria-hidden="true"
      />

      {/* Floating Sticky WhatsApp Pill (Always visible) */}
      <a
        href={LANDING_LINKS.whatsappGroup}
        target="_blank"
        rel="noopener noreferrer"
        id="floatingCta"
        aria-label="Suporte gratuito no WhatsApp"
        className="fixed bottom-6 right-6 z-[999] inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-extrabold text-[0.95rem] text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_8px_30px_rgba(0,255,136,0.5),0_0_20px_rgba(0,255,136,0.4)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,255,136,0.8),0_0_30px_rgba(0,229,255,0.6)] animate-pulse-float"
      >
        <WhatsAppIcon size={22} className="shrink-0" />
        <span>Suporte gratuito</span>
      </a>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 sm:px-5">{children}</main>

        {/* Footer / Aviso Legal */}
        <footer className="w-full border-t border-white/10 bg-[#040608] py-10 px-4 text-[#64748b] text-[0.85rem] mt-12">
          <div className="max-w-[780px] mx-auto text-center space-y-3">
            <p className="text-[0.82rem] leading-relaxed text-[#94a3b8]">
              Página criada por Rayssa Nascimento Renda Extra © <span>{currentYear}</span> — Todos
              os direitos reservados. Mimix é uma plataforma parceira. Esta página não garante
              ganhos; os valores citados vêm das matérias de notícias vinculadas e variam conforme
              plataforma, região e volume aprovado.
            </p>
            <p className="text-xs text-[#64748b]">
              Mimix é uma plataforma parceira · Dúvidas? O suporte gratuito te ajuda.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Layout
