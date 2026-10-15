/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DA LANDING PAGE — PARA CRIAR UMA CÓPIA NOVA:
 * ============================================================================
 * Para criar uma cópia nova, duplique o projeto no painel e altere apenas este
 * arquivo (e as metatags equivalentes no index.html).
 *
 * Todas as partes que variam entre cópias (Hero, links, nomes, parceiro e fotos)
 * estão centralizadas aqui de forma tipada.
 *
 * Checklist ao duplicar o projeto:
 * 1. Altere o nome do parceiro/projeto em `partner` e `brand`.
 * 2. Atualize o `whatsappGroup` com o link do grupo do novo parceiro.
 * 3. Atualize o código `ref` do cadastro Mimix (ex.: "equipedesucesso").
 * 4. (Opcional) Troque a foto do Hero (`heroImage`) e a foto de perfil (`avatarImage`).
 * 5. Abra `index.html` e replique o <title> e as metatags <meta property="og:...">
 *    e <meta name="twitter:..."> com os mesmos textos definidos em `meta` abaixo.
 * ============================================================================
 */

import defaultHeroArt from '@/assets/imagemgerada1791407667490-15f6d.png'
import defaultPortraitImg from '@/assets/4-6c579.jpeg'

export interface SiteConfig {
  /** Dados da marca e do parceiro titular desta página */
  partner: {
    /** Nome completo do parceiro (ex.: "Rayssa Nascimento") */
    name: string
    /** Nome da marca / iniciativa exibida no topo e no rodapé (ex.: "Rayssa Nascimento Renda Extra") */
    brandName: string
    /** Primeira linha do logotipo (ex.: "RAYSSA NASCIMENTO") */
    logoLine1: string
    /** Segunda linha em destaque dourado do logotipo (ex.: "RENDA EXTRA") */
    logoLine2: string
    /** Monograma / iniciais para fallback caso a foto não carregue (ex.: "RN") */
    monogramFallback: string
    /** Texto curto de parceria com a Mimix (ex.: "Parceria Rayssa Nascimento / Mimix") */
    partnershipLabel: string
    /** Texto da badge do Hero (ex.: "Iniciativa Rayssa Nascimento / Mimix") */
    heroBadgeLabel: string
    /** Texto de crédito no rodapé */
    footerCredit: string
    /** Texto de indicação do bloco de indicação/cadastro */
    referralCredit: string
  }

  /** Imagens principais que costumam variar por cópia */
  images: {
    /**
     * Imagem principal do Hero (arte sci-fi neon centralizada).
     * Pode ser um import de imagem local (ex.: de src/assets) ou uma URL pública.
     */
    heroImage: string
    /** Texto alternativo da imagem do Hero */
    heroImageAlt: string
    /**
     * Foto de retrato/avatar do parceiro exibida no cabeçalho circular.
     */
    avatarImage: string
    /** Texto alternativo do avatar */
    avatarImageAlt: string
    /** Caminho da imagem de compartilhamento Open Graph (em public/) */
    ogImage: string
    /** Caminho do favicon (em public/) */
    favicon: string
  }

  /** Links de conversão da landing page */
  links: {
    /**
     * Link do grupo oficial do WhatsApp do parceiro.
     * Usado em TODOS os botões de WhatsApp da página (Hero, cabeçalho, botão flutuante, seções, rodapé).
     */
    whatsappGroup: string

    /**
     * Cadastro Mimix com referência do parceiro:
     * O campo `ref` é o código de indicação do parceiro (ex.: "equipedesucesso").
     * A URL final `mimixRegister` é gerada automaticamente combinando a baseUrl com o ref.
     */
    mimix: {
      baseUrl: string
      ref: string
      get registerUrl(): string
    }

    /** Links de matérias jornalísticas de comprovação (CNN, TecMundo, Estadão, etc.) */
    news: {
      cnn: string
      tecmundo: string
      estadao: string
      diarioNordeste: string
      mit: string
      businessInsider: string
      yahoo: string
      gizmodo: string
    }
  }

  /** Metatags para SEO, redes sociais e compartilhamento via WhatsApp/Facebook/Twitter */
  meta: {
    /** Título da aba do navegador (<title>) */
    title: string
    /** Meta description para motores de busca */
    description: string
    /** Open Graph Title (WhatsApp / Facebook) */
    ogTitle: string
    /** Open Graph Description */
    ogDescription: string
    /** Open Graph Image Alt */
    ogImageAlt: string
    /** Twitter Card Title */
    twitterTitle: string
    /** Twitter Card Description */
    twitterDescription: string
    /** Palavras-chave */
    keywords: string
    /** URL canônica de produção desta cópia */
    canonicalUrl: string
  }
}

export const siteConfig: SiteConfig = {
  partner: {
    name: 'Rayssa Nascimento',
    brandName: 'Rayssa Nascimento Renda Extra',
    logoLine1: 'RAYSSA NASCIMENTO',
    logoLine2: 'RENDA EXTRA',
    monogramFallback: 'RN',
    partnershipLabel: 'Parceria Rayssa Nascimento / Mimix',
    heroBadgeLabel: 'Iniciativa Rayssa Nascimento / Mimix',
    footerCredit: 'Página criada por Rayssa Nascimento Renda Extra',
    referralCredit:
      'Cadastro gratuito pela plataforma parceira Mimix — indicação Rayssa Nascimento Renda Extra · Dúvidas? O suporte gratuito te ajuda.',
  },

  images: {
    // Arte Sci-Fi Neon original ("RENDA EXTRA") centralizada no Hero
    heroImage: defaultHeroArt,
    heroImageAlt: 'Mimix — Ganhe gravando seu dia a dia. Arte sci-fi neon original.',

    // Retrato do parceiro exibido no header
    avatarImage: defaultPortraitImg,
    avatarImageAlt: 'Rayssa Nascimento — Renda Extra',

    // Caminho da imagem de compartilhamento absoluta em public/ (preserva a visualização no WhatsApp sem cofrinho)
    ogImage: '/og-image.jpg',
    favicon: '/favicon.png',
  },

  links: {
    // Link do grupo de WhatsApp — replicado em TODOS os botões
    whatsappGroup: 'https://wa.me/qr/SWOGSDANSPUWF1?s=r',

    // Cadastro Mimix com o parâmetro 'ref' isolado para fácil substituição por cada parceiro
    mimix: {
      baseUrl: 'https://mimix-ai.xyz/register',
      ref: 'equipedesucesso',
      get registerUrl() {
        return `${this.baseUrl}?ref=${encodeURIComponent(this.ref)}`
      },
    },

    // Notícias reais de comprovação
    news: {
      cnn: 'https://www.cnnbrasil.com.br/economia/money/tecnologia/como-gravar-tarefas-domesticas-pode-treinar-robos-mordomos-no-futuro/',
      tecmundo:
        'https://www.tecmundo.com.br/ciencia/414223-como-trabalhadores-estao-filmando-empregos-para-treinar-ia-entenda.htm',
      estadao:
        'https://www.estadao.com.br/tecmundo/stem/414223-como-trabalhadores-estao-filmando-empregos-para-treinar-ia-entenda/',
      diarioNordeste:
        'https://diariodonordeste.verdesmares.com.br/negocios/cearenses-ganham-ate-r-4-mil-com-videos-para-treinar-robos-e-ias-entenda-tendencia-e-riscos-1.3790363',
      mit: 'https://www.technologyreview.com/2026/04/01/1134863/humanoid-data-training-gig-economy-2026-breakthrough-technology',
      businessInsider:
        'https://www.businessinsider.com/ai-startups-robotics-pay-film-chores-encord-micro1-scale-2025-10',
      yahoo:
        'https://finance.yahoo.com/technology/ai/articles/figure-launches-gig-platform-humans-174059209.html',
      gizmodo: 'https://gizbr.uol.com.br/treinamento-robos-ia-tarefas',
    },
  },

  meta: {
    title: 'Rayssa Nascimento Renda Extra — Parceria Rayssa Nascimento / Mimix',
    description:
      'Rayssa Nascimento / Mimix: ganhe uma renda extra gravando dados para treinar IA, dados Residencial e Comercial',
    ogTitle: 'Rayssa Nascimento Renda Extra',
    ogDescription:
      'Renda extra gravando tarefas do dia a dia para treinar IA física. Acesse o link e entre no suporte para fazer seu cadastro gratuito.',
    ogImageAlt: 'Rayssa Nascimento Renda Extra — Parceria Mimix e IA Física',
    twitterTitle: 'Rayssa Nascimento Renda Extra',
    twitterDescription:
      'Renda extra gravando tarefas do dia a dia para treinar IA física. Pagamentos via Pix e USDT todo dia 5 e dia 20 em parceria com Rayssa Nascimento e Mimix.',
    keywords: 'Renda Extra, Rayssa Nascimento, Mimix, IA Física, Pix, USDT, Gravação de Tarefas',
    canonicalUrl: 'https://revisao-de-landing-page-copy-83dcd.goskip.app',
  },
}
