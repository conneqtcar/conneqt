import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Conneqt — Compra e Venda de Veículos',
    short_name: 'Conneqt',
    description:
      'Plataforma de intermediação veicular com inspeção obrigatória, laudo digital e pagamento seguro via escrow.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#D4A217',
    categories: ['automotive', 'shopping'],
    lang: 'pt-BR',
    icons: [
      {
        src: '/icons/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Buscar veículos',
        short_name: 'Buscar',
        url: '/buscar',
        icons: [{ src: '/icons/shortcut-search.svg', sizes: '96x96' }],
      },
      {
        name: 'Vender meu carro',
        short_name: 'Vender',
        url: '/vender',
        icons: [{ src: '/icons/shortcut-sell.svg', sizes: '96x96' }],
      },
    ],
    screenshots: [],
  };
}
