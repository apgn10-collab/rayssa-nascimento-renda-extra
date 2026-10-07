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
export const LANDING_IMAGES = {
  logo: {
    recordId: 'ezupxqgn9idesxp',
    filename: 'logo_fpf5eun48d.jpg',
    url: getFileUrl('ezupxqgn9idesxp', 'logo_fpf5eun48d.jpg'),
    // Avatar / Logo circular no header (~70x70)
    thumb: getFileUrl('ezupxqgn9idesxp', 'logo_fpf5eun48d.jpg', '160x160'),
  },
  heroBg: {
    recordId: 'makqmcwi65rllwk',
    filename: 'hero_bg_6iqeoy4vnk.png',
    url: new URL('../assets/imagemgerada1791407667490-15f6d.png', import.meta.url).href,
    thumb: new URL('../assets/imagemgerada1791407667490-15f6d.png', import.meta.url).href,
    fallbackUrl: getFileUrl('makqmcwi65rllwk', 'hero_bg_6iqeoy4vnk.png'),
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
    recordId: '9zp2gi2fkuctf2j',
    filename: 'robot_ivp4xnsig8.png',
    url: getFileUrl('9zp2gi2fkuctf2j', 'robot_ivp4xnsig8.png'),
    thumb: getFileUrl('9zp2gi2fkuctf2j', 'robot_ivp4xnsig8.png', '960x0'),
  },
  finalBg: {
    recordId: '755o11p04hxg7gl',
    filename: 'final_bg_h8i2j2cotv.png',
    url: getFileUrl('755o11p04hxg7gl', 'final_bg_h8i2j2cotv.png'),
    thumb: getFileUrl('755o11p04hxg7gl', 'final_bg_h8i2j2cotv.png', '1200x0'),
  },
} as const

export interface ProofImageDef {
  id: number
  recordId: string
  filename: string
  url: string
  thumbUrl: string
  caption: string
  amount: string
  type: string
}

/**
 * 10 comprovantes reais de saque / Pix salvos permanentemente
 */
export const LANDING_PROOFS: ProofImageDef[] = [
  {
    id: 1,
    recordId: 'v15zuzaph62vjgs',
    filename: 'proof_1_ef3rmig07h.jpg',
    url: getFileUrl('v15zuzaph62vjgs', 'proof_1_ef3rmig07h.jpg'),
    thumbUrl: getFileUrl('v15zuzaph62vjgs', 'proof_1_ef3rmig07h.jpg', '600x0'),
    caption: 'R$ 291,98 · Pix recebido',
    amount: 'R$ 291,98',
    type: 'Pix recebido',
  },
  {
    id: 2,
    recordId: 'lfgxuv0wpzkgt5y',
    filename: 'proof_2_po0a5gkfyc.jpg',
    url: getFileUrl('lfgxuv0wpzkgt5y', 'proof_2_po0a5gkfyc.jpg'),
    thumbUrl: getFileUrl('lfgxuv0wpzkgt5y', 'proof_2_po0a5gkfyc.jpg', '600x0'),
    caption: 'R$ 279,00 · Pix recebido',
    amount: 'R$ 279,00',
    type: 'Pix recebido',
  },
  {
    id: 3,
    recordId: '0vv9hpn1q97j2j5',
    filename: 'proof_3_yixiooyv32.jpg',
    url: getFileUrl('0vv9hpn1q97j2j5', 'proof_3_yixiooyv32.jpg'),
    thumbUrl: getFileUrl('0vv9hpn1q97j2j5', 'proof_3_yixiooyv32.jpg', '600x0'),
    caption: 'R$ 115,81 · Pix recebido',
    amount: 'R$ 115,81',
    type: 'Pix recebido',
  },
  {
    id: 4,
    recordId: '85ka10h1j5mkyvg',
    filename: 'proof_4_tfkh9dly80.jpg',
    url: getFileUrl('85ka10h1j5mkyvg', 'proof_4_tfkh9dly80.jpg'),
    thumbUrl: getFileUrl('85ka10h1j5mkyvg', 'proof_4_tfkh9dly80.jpg', '600x0'),
    caption: 'Saque Pix · Sicredi · 05/10',
    amount: 'Saque Pix',
    type: 'Sicredi 05/10',
  },
  {
    id: 5,
    recordId: 'p2gnpr7kd6z3hbe',
    filename: 'proof_5_rx53w96qwb.jpg',
    url: getFileUrl('p2gnpr7kd6z3hbe', 'proof_5_rx53w96qwb.jpg'),
    thumbUrl: getFileUrl('p2gnpr7kd6z3hbe', 'proof_5_rx53w96qwb.jpg', '600x0'),
    caption: 'R$ 70,61 · Pix recebido 05/10',
    amount: 'R$ 70,61',
    type: 'Pix recebido 05/10',
  },
  {
    id: 6,
    recordId: '5bz7u4ddh04yryd',
    filename: 'proof_6_8z2c4hhz3l.jpg',
    url: getFileUrl('5bz7u4ddh04yryd', 'proof_6_8z2c4hhz3l.jpg'),
    thumbUrl: getFileUrl('5bz7u4ddh04yryd', 'proof_6_8z2c4hhz3l.jpg', '600x0'),
    caption: 'R$ 63,60 · Pix recebido',
    amount: 'R$ 63,60',
    type: 'Pix recebido',
  },
  {
    id: 7,
    recordId: 'fzw5n90459sv372',
    filename: 'proof_7_krldw7xaim.jpg',
    url: getFileUrl('fzw5n90459sv372', 'proof_7_krldw7xaim.jpg'),
    thumbUrl: getFileUrl('fzw5n90459sv372', 'proof_7_krldw7xaim.jpg', '600x0'),
    caption: 'R$ 63,60 · Pix Sicredi',
    amount: 'R$ 63,60',
    type: 'Pix Sicredi',
  },
  {
    id: 8,
    recordId: '248jn8ghmu5fpun',
    filename: 'proof_8_rtnbuyms0y.jpg',
    url: getFileUrl('248jn8ghmu5fpun', 'proof_8_rtnbuyms0y.jpg'),
    thumbUrl: getFileUrl('248jn8ghmu5fpun', 'proof_8_rtnbuyms0y.jpg', '600x0'),
    caption: 'R$ 48,74 · Pix recebido 05/10',
    amount: 'R$ 48,74',
    type: 'Pix recebido 05/10',
  },
  {
    id: 9,
    recordId: 'jlljh6f3qnjjo16',
    filename: 'proof_9_y7na8j1q08.jpg',
    url: getFileUrl('jlljh6f3qnjjo16', 'proof_9_y7na8j1q08.jpg'),
    thumbUrl: getFileUrl('jlljh6f3qnjjo16', 'proof_9_y7na8j1q08.jpg', '600x0'),
    caption: 'R$ 33,25 · Pix recebido',
    amount: 'R$ 33,25',
    type: 'Pix recebido',
  },
  {
    id: 10,
    recordId: '3xhq3duigssqxt6',
    filename: 'proof_10_5puvqz1ny3.jpg',
    url: getFileUrl('3xhq3duigssqxt6', 'proof_10_5puvqz1ny3.jpg'),
    thumbUrl: getFileUrl('3xhq3duigssqxt6', 'proof_10_5puvqz1ny3.jpg', '600x0'),
    caption: 'R$ 31,37 · Pix recebido',
    amount: 'R$ 31,37',
    type: 'Saque via Pix aprovado',
  },
]
