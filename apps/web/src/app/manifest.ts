import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Conneqt — Compra e Venda de Veículos',
    short_name: 'Conneqt',
    description:
      'Plataforma de intermediação veicular com inspeção obrigatória, laudo digital e negociação segura.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#D4A217',
    categories: ['automotive', 'shopping'],
    lang: 'pt-BR',
    icons: [
      {
        src: '/icons/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/logo.svg',
        sizes: 'any',
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
