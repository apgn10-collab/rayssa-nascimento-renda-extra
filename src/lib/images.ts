/**
 * Mapeamento permanente das imagens da landing page Mimix (Geração Alpha × Mimix).
 * As imagens foram salvas na coleção PocketBase `landing_images` e possuem URLs permanentes
 * públicas no formato `/api/files/:collectionIdOrName/:recordId/:filename`.
 */

export interface LandingImageItem {
  id: string
  name: string
  recordId: string
  filename: string
  url: string
  thumbUrl?: string
}

// Fallback para o endpoint do backend caso VITE_POCKETBASE_URL não esteja definido
const DEFAULT_PB_URL = 'https://revisao-de-landing-page-d7b6a.shrd00.internal.goskip.dev'

/**
 * Resolve a URL base absoluta do PocketBase.
 * No ambiente de browser ou preview, VITE_POCKETBASE_URL aponta para a URL do backend.
 * Uma URL relativa "/api/files/..." falha quando o frontend é servido de outro host/CDN (como o preview goskip.app).
 */
export function getBackendBaseUrl(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> })?.env
    ?.VITE_POCKETBASE_URL
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.replace(/\/+$/, '')
  }
  return DEFAULT_PB_URL
}

/**
 * Monta a URL completa e absoluta para um arquivo da coleção PocketBase landing_images.
 */
export function getFileUrl(recordId: string, filename: string, thumb?: string): string {
  const baseUrl = getBackendBaseUrl()
  const path = `/api/files/landing_images/${recordId}/${encodeURIComponent(filename)}`
  const base = `${baseUrl}${path}`
  return thumb ? `${base}?thumb=${thumb}` : base
}

/**
 * 17 registros confirmados na coleção landing_images
 */
// Capas de notícias reais fornecidas pelo usuário
import cnnCoverImg from '../assets/captura-de-tela-2026-10-07-191838-cdf91.png'
import tecmundoEstadaoCoverImg from '../assets/captura-de-tela-2026-10-07-191956-93749.png'
import diarioNordesteCoverImg from '../assets/captura-de-tela-2026-10-07-192027-116b2.png'

export const LANDING_IMAGES = {
  newsCovers: {
    cnn: cnnCoverImg,
    tecmundoEstadao: tecmundoEstadaoCoverImg,
    diarioNordeste: diarioNordesteCoverImg,
  },
  logo: {
    recordId: 'ezupxqgn9idesxp',
    filename: 'logo_fpf5eun48d.jpg',
    url: getFileUrl('ezupxqgn9idesxp', 'logo_fpf5eun48d.jpg'),
    // Avatar / Logo circular no header (~70x70)
    thumb: getFileUrl('ezupxqgn9idesxp', 'logo_fpf5eun48d.jpg', '160x160'),
  },
  // Hero Original: Arte sci-fi neon (imagemgerada1791407667490-15f6d.png)
  heroBg: {
    recordId: 'makqmcwi65rllwk',
    filename: 'imagemgerada1791407667490-15f6d.png',
    url: new URL('../assets/imagemgerada1791407667490-15f6d.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791407667490-15f6d.png', import.meta.url).href,
    fallbackUrl: getFileUrl('makqmcwi65rllwk', 'hero_bg_6iqeoy4vnk.png'),
  },
  // Foto Realista 1: Mãos dobrando camiseta azul ("Sua rotina pode treinar o futuro" - tarefas reais / IA física)
  foldingClothes: {
    recordId: 'folding_clothes_routine',
    filename: 'imagemgerada1791409240317-0c20d.png',
    url: new URL('../assets/imagemgerada1791409240317-0c20d.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791409240317-0c20d.png', import.meta.url).href,
    altUrl: new URL('../assets/imagemgerada1791409240317-1b3c0.png', import.meta.url).href,
  },
  // Foto Realista 2: POV passeio com cachorro Border Collie ("Sua rotina ajuda a IA física a entender o mundo real")
  dogWalkRoutine: {
    recordId: 'dog_walk_routine_local',
    filename: 'imagemgerada1791409238291-3de3b.png',
    url: new URL('../assets/imagemgerada1791409238291-3de3b.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791409238291-3de3b.png', import.meta.url).href,
    altUrl: new URL('../assets/imagemgerada1791409238291-239b7.png', import.meta.url).href,
  },
  // Foto Realista 3: Hotelaria / Camareiras ("Hotelaria: Sua equipe pode participar")
  hotelHospitality: {
    recordId: 'hotel_hospitality_local',
    filename: 'imagemgerada1791409236463-aaec7.png',
    url: new URL('../assets/imagemgerada1791409236463-aaec7.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791409236463-aaec7.png', import.meta.url).href,
  },
  // Slot reservado 1: Arte "DO BRIEFING AO DADO REAL" com mãos manipulando cabos, blocos e organizadores
  slotUpcoming1: {
    recordId: 'slot_briefing_dado_real',
    filename: 'imagemgerada1791412107846-049ab.png',
    url: new URL('../assets/imagemgerada1791412107846-049ab.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791412107846-049ab.png', import.meta.url).href,
  },
  // Slot reservado 2: Arte "PET SHOP: BANHO E TOSA — O TRABALHO DA SUA EQUIPE EM AÇÃO" com tosadora e cachorro
  slotUpcoming2: {
    recordId: 'slot_petshop_banho_tosa',
    filename: 'imagemgerada1791412105950-47fdb.png',
    url: new URL('../assets/imagemgerada1791412105950-47fdb.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791412105950-47fdb.png', import.meta.url).href,
  },
  step1: {
    recordId: 'g5ckaj4e4ncu2q7',
    filename: 'step_1_6pi44d40v6.png',
    url: getFileUrl('g5ckaj4e4ncu2q7', 'step_1_6pi44d40v6.png'),
    thumb: getFileUrl('g5ckaj4e4ncu2q7', 'step_1_6pi44d40v6.png', '720x0'),
  },
  step2Minute: {
    recordId: 'zc8kr2rthf97ytd',
    filename: 'step_2_minute_2fyav24mvq.jpg',
    url: getFileUrl('zc8kr2rthf97ytd', 'step_2_minute_2fyav24mvq.jpg'),
    thumb: getFileUrl('zc8kr2rthf97ytd', 'step_2_minute_2fyav24mvq.jpg', '720x0'),
  },
  step3Payout: {
    recordId: 'qaqdk3hteozqt7y',
    filename: 'step_3_y14wb02jdh.png',
    url: getFileUrl('qaqdk3hteozqt7y', 'step_3_y14wb02jdh.png'),
    thumb: getFileUrl('qaqdk3hteozqt7y', 'step_3_y14wb02jdh.png', '720x0'),
  },
  robotPhoto: {
    recordId: 'robot_holograms_office',
    filename: 'imagemgerada1791412272862-516ed.png',
    url: new URL('../assets/imagemgerada1791412272862-516ed.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791412272862-516ed.png', import.meta.url).href,
    fallbackUrl: getFileUrl('9zp2gi2fkuctf2j', 'robot_ivp4xnsig8.png'),
  },
  finalBg: {
    recordId: '755o11p04hxg7gl',
    filename: 'final_bg_h8i2j2cotv.png',
    url: getFileUrl('755o11p04hxg7gl', 'final_bg_h8i2j2cotv.png'),
    thumb: getFileUrl('755o11p04hxg7gl', 'final_bg_h8i2j2cotv.png', '1200x0'),
  },
} as const
