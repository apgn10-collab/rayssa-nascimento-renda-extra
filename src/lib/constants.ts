import { siteConfig } from '@/config/site'

/**
 * Re-exporta os links de conversão a partir de `siteConfig` centralizado.
 * Para mudar qualquer link entre cópias, altere diretamente `src/config/site.ts`.
 */
export const LANDING_LINKS = {
  whatsappGroup: siteConfig.links.whatsappGroup,
  mimixRegister: siteConfig.links.mimix.registerUrl,
  news: siteConfig.links.news,
} as const
