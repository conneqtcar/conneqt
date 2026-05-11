import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export const MOCK_LISTINGS = [
  {
    id: 'mock-1',
    price: 89900,
    acceptsFinancing: true,
    status: 'ACTIVE',
    description:
      'Toyota Corolla em excelente estado. Único dono, revisões em dia na concessionária Toyota. IPVA 2026 pago. Aceita financiamento.',
    createdAt: '2026-04-10T10:00:00Z',
    seller: {
      id: 's1',
      name: 'Carlos Mendes',
      email: 'carlos@email.com',
      phone: '(11) 98765-4321',
    },
    vehicle: {
      id: 'v1',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      mileage: 32000,
      plate: 'BRA2E19',
      color: 'Branco Pérola',
      fuelType: 'Flex',
      transmission: 'Automático',
      inspections: [
        {
          id: 'ins1',
          score: 92,
          aiScore: 91,
          aiFlags: [],
          createdAt: '2026-04-08T10:00:00Z',
        },
      ],
    },
  },
  {
    id: 'mock-2',
    price: 145000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    description:
      'Honda Civic EXL completo. IPVA 2026 pago. Multimídia, câmera de ré, controle de cruzeiro adaptativo.',
    createdAt: '2026-04-12T10:00:00Z',
    seller: {
      id: 's2',
      name: 'Ana Lima',
      email: 'ana@email.com',
      phone: '(21) 91234-5678',
    },
    vehicle: {
      id: 'v2',
      brand: 'Honda',
      model: 'Civic',
      year: 2023,
      mileage: 18500,
      plate: 'RJO3F47',
      color: 'Preto',
      fuelType: 'Flex',
      transmission: 'CVT',
      inspections: [
        {
          id: 'ins2',
          score: 88,
          aiScore: 87,
          aiFlags: [],
          createdAt: '2026-04-11T10:00:00Z',
        },
      ],
    },
  },
  {
    id: 'mock-3',
    price: 62500,
    acceptsFinancing: false,
    status: 'ACTIVE',
    description:
      'Volkswagen Polo Track. Ótimo para cidade, econômico e ágil. Pequenas marcas de uso, devidamente documentadas na inspeção.',
    createdAt: '2026-04-15T10:00:00Z',
    seller: {
      id: 's3',
      name: 'Pedro Santos',
      email: 'pedro@email.com',
      phone: '(31) 99988-7766',
    },
    vehicle: {
      id: 'v3',
      brand: 'Volkswagen',
      model: 'Polo',
      year: 2021,
      mileage: 47000,
      plate: 'MGO1K82',
      color: 'Cinza Platinum',
      fuelType: 'Flex',
      transmission: 'Manual',
      inspections: [
        {
          id: 'ins3',
          score: 78,
          aiScore: 77,
          aiFlags: ['MINOR_SCRATCH_DOOR'],
          createdAt: '2026-04-13T10:00:00Z',
        },
      ],
    },
  },
  {
    id: 'mock-4',
    price: 195000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    description:
      'Jeep Compass Limited. SUV premium com teto solar panorâmico, couro, sistema Uconnect, 4x4 automático.',
    createdAt: '2026-04-16T10:00:00Z',
    seller: {
      id: 's4',
      name: 'AutoCenter Premium',
      email: 'vendas@autocenter.com.br',
      phone: '(11) 3344-5566',
    },
    vehicle: {
      id: 'v4',
      brand: 'Jeep',
      model: 'Compass',
      year: 2024,
      mileage: 12000,
      plate: 'SPO4L91',
      color: 'Azul Bering',
      fuelType: 'Flex',
      transmission: 'Automático',
      inspections: [
        {
          id: 'ins4',
          score: 95,
          aiScore: 94,
          aiFlags: [],
          createdAt: '2026-04-14T10:00:00Z',
        },
      ],
    },
  },
  {
    id: 'mock-5',
    price: 75000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    description:
      'Hyundai HB20 1.0 Turbo Platinum. Completo, central multimídia 8", Android Auto/Apple CarPlay.',
    createdAt: '2026-04-17T10:00:00Z',
    seller: {
      id: 's5',
      name: 'Mariana Costa',
      email: 'mariana@email.com',
      phone: '(85) 97654-3210',
    },
    vehicle: {
      id: 'v5',
      brand: 'Hyundai',
      model: 'HB20',
      year: 2023,
      mileage: 24500,
      plate: 'CEM5M23',
      color: 'Vermelho Chili',
      fuelType: 'Flex',
      transmission: 'Automático',
      inspections: [
        {
          id: 'ins5',
          score: 84,
          aiScore: 83,
          aiFlags: [],
          createdAt: '2026-04-15T10:00:00Z',
        },
      ],
    },
  },
  {
    id: 'mock-6',
    price: 118000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    description:
      'Fiat Pulse Impetus 1.0 Turbo. Crossover moderno, eficiente, com conectividade total e design diferenciado.',
    createdAt: '2026-04-18T10:00:00Z',
    seller: {
      id: 's6',
      name: 'Roberto Alves',
      email: 'roberto@email.com',
      phone: '(41) 98888-1111',
    },
    vehicle: {
      id: 'v6',
      brand: 'Fiat',
      model: 'Pulse',
      year: 2023,
      mileage: 31000,
      plate: 'CWB6N55',
      color: 'Branco Artico',
      fuelType: 'Flex',
      transmission: 'CVT',
      inspections: [
        {
          id: 'ins6',
          score: 90,
          aiScore: 89,
          aiFlags: [],
          createdAt: '2026-04-16T10:00:00Z',
        },
      ],
    },
  },
];

// ─── SELLER MOCK DATA ───────────────────────────────────────────────────────

export const MOCK_MY_VEHICLES = [
  {
    id: 'my-v1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    mileage: 32000,
    plate: 'BRA2E19',
    color: 'Branco Pérola',
    fuelType: 'Flex',
    transmission: 'Automático',
    status: 'LISTED',
    fipePrice: 91000,
    createdAt: '2026-03-15T10:00:00Z',
    inspection: { id: 'ins-my-1', status: 'APPROVED', aiScore: 92, completedAt: '2026-03-17T10:00:00Z' },
    listing: { id: 'mock-1', status: 'ACTIVE', price: 89900, views: 247, proposalCount: 3 },
  },
  {
    id: 'my-v2',
    brand: 'Fiat',
    model: 'Argo',
    year: 2021,
    mileage: 51000,
    plate: 'MGA3D44',
    color: 'Vermelho',
    fuelType: 'Flex',
    transmission: 'Manual',
    status: 'INSPECTION_PENDING',
    fipePrice: 55000,
    createdAt: '2026-04-18T10:00:00Z',
    inspection: { id: 'ins-my-2', status: 'PENDING', aiScore: null, completedAt: null },
    listing: null,
  },
  {
    id: 'my-v3',
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2020,
    mileage: 73000,
    plate: 'SPO5J22',
    color: 'Prata',
    fuelType: 'Flex',
    transmission: 'Automático',
    status: 'SOLD',
    fipePrice: 62000,
    createdAt: '2026-01-10T10:00:00Z',
    inspection: { id: 'ins-my-3', status: 'APPROVED', aiScore: 81, completedAt: '2026-01-12T10:00:00Z' },
    listing: { id: 'sold-1', status: 'SOLD', price: 62500, views: 512, proposalCount: 8, soldAt: '2026-02-20T10:00:00Z', soldPrice: 61000 },
  },
  {
    id: 'my-v4',
    brand: 'Renault',
    model: 'Kwid',
    year: 2023,
    mileage: 8000,
    plate: 'RJO7K99',
    color: 'Laranja',
    fuelType: 'Flex',
    transmission: 'Manual',
    status: 'DRAFT',
    fipePrice: 48000,
    createdAt: '2026-04-20T10:00:00Z',
    inspection: null,
    listing: null,
  },
];

export const MOCK_MY_PROPOSALS = [
  {
    id: 'prop-1',
    status: 'PENDING',
    amount: 85000,
    listingId: 'mock-1',
    message: 'Olá! Tenho interesse no veículo. Poderia me dar mais detalhes sobre o histórico de manutenção? Tenho o valor em mãos para fechar rapidamente.',
    createdAt: '2026-04-21T09:00:00Z',
    buyer: { id: 'b1', name: 'Rafael Souza', avatar: 'https://picsum.photos/seed/buyer-rafael/100/100', phone: '(11) 97777-8888' },
    listing: {
      id: 'mock-1',
      title: 'Toyota Corolla 2022 — 32.000 km',
      price: 89900,
      vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
      seller: { name: 'Carlos Mendes' },
    },
  },
  {
    id: 'prop-2',
    status: 'PENDING',
    amount: 87500,
    listingId: 'mock-2',
    message: 'Tenho interesse. Aceita parcelamento no cartão ou é somente à vista e financiamento?',
    createdAt: '2026-04-20T15:30:00Z',
    buyer: { id: 'b2', name: 'Fernanda Melo', avatar: 'https://picsum.photos/seed/buyer-fernanda/100/100', phone: '(21) 96666-5555' },
    listing: {
      id: 'mock-2',
      title: 'Honda Civic EXL 2021 — 41.000 km',
      price: 112000,
      vehicle: { brand: 'Honda', model: 'Civic', year: 2021 },
      seller: { name: 'Ana Paula' },
    },
  },
  {
    id: 'prop-3',
    status: 'ACCEPTED',
    amount: 89900,
    listingId: 'mock-1',
    message: 'Topei o valor pedido! Quando podemos fazer a vistoria presencial?',
    createdAt: '2026-04-18T11:00:00Z',
    buyer: { id: 'b3', name: 'Lucas Pereira', avatar: 'https://picsum.photos/seed/buyer-lucas/100/100', phone: '(31) 95555-4444' },
    listing: {
      id: 'mock-1',
      title: 'Toyota Corolla 2022 — 32.000 km',
      price: 89900,
      vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
      seller: { name: 'Carlos Mendes' },
    },
  },
  {
    id: 'prop-4',
    status: 'REJECTED',
    amount: 72000,
    listingId: 'mock-3',
    message: 'Tenho 72 mil à vista, pago hoje.',
    createdAt: '2026-04-16T08:00:00Z',
    buyer: { id: 'b4', name: 'Juliana Castro', avatar: 'https://picsum.photos/seed/buyer-juliana/100/100', phone: '(85) 94444-3333' },
    listing: {
      id: 'mock-3',
      title: 'Hyundai HB20 2023 — 12.000 km',
      price: 78000,
      vehicle: { brand: 'Hyundai', model: 'HB20', year: 2023 },
      seller: { name: 'Marcos Lima' },
    },
  },
  {
    id: 'prop-5',
    status: 'COUNTER',
    amount: 83000,
    counterAmount: 87000,
    message: 'Seria possível R$ 83.000? Meu limite de financiamento é esse.',
    createdAt: '2026-04-19T14:00:00Z',
    buyer: { id: 'b5', name: 'Marcos Ribeiro', avatar: 'https://picsum.photos/seed/buyer-marcos/100/100', phone: '(41) 93333-2222' },
    listing: { id: 'mock-1', title: 'Toyota Corolla 2022 — 32.000 km', price: 89900 },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
  },
];

export const MOCK_SELLER_STATS = {
  activeListings: 1,
  pendingProposals: 2,
  totalViews: 247,
  estimatedRevenue: 89900,
  totalSold: 1,
  rating: 4.8,
  ratingCount: 12,
};

export const MOCK_ACTIVITY_FEED = [
  { id: 'act-1', type: 'NEW_PROPOSAL', title: 'Nova proposta recebida', description: 'Rafael Souza fez uma proposta de R$ 85.000 no seu Toyota Corolla', createdAt: '2026-04-21T09:00:00Z', link: '/vender/propostas' },
  { id: 'act-2', type: 'NEW_PROPOSAL', title: 'Nova proposta recebida', description: 'Fernanda Melo fez uma proposta de R$ 87.500', createdAt: '2026-04-20T15:30:00Z', link: '/vender/propostas' },
  { id: 'act-3', type: 'VIEW_SPIKE', title: 'Pico de visualizações', description: 'Seu anúncio do Corolla recebeu 47 visualizações hoje', createdAt: '2026-04-20T08:00:00Z', link: '/veiculo/mock-1' },
  { id: 'act-4', type: 'PROPOSAL_ACCEPTED', title: 'Proposta aceita com sucesso', description: 'Você aceitou a proposta de Lucas Pereira por R$ 89.900', createdAt: '2026-04-18T11:30:00Z', link: '/vender/propostas' },
  { id: 'act-5', type: 'INSPECTION_APPROVED', title: 'Inspeção aprovada ✓', description: 'Toyota Corolla 2022 recebeu score 92/100 da IA Conneqt', createdAt: '2026-03-17T10:00:00Z', link: '/vender/meus-veiculos' },
  { id: 'act-6', type: 'LISTING_PUBLISHED', title: 'Anúncio publicado', description: 'Toyota Corolla 2022 está no ar e visível para compradores', createdAt: '2026-03-18T14:00:00Z', link: '/veiculo/mock-1' },
];

export const MOCK_SELLER_PROFILE = {
  id: 'seller-demo',
  name: 'Carlos Mendes',
  email: 'carlos@email.com',
  phone: '(11) 98765-4321',
  city: 'São Paulo',
  state: 'SP',
  avatar: 'https://picsum.photos/seed/seller-carlos/200/200',
  memberSince: '2025-08-01T00:00:00Z',
  verified: true,
  totalSold: 3,
  rating: 4.8,
  ratingCount: 12,
  avgSaleDays: 18,
};

// ─── MOCK ROUTER ────────────────────────────────────────────────────────────

function getMockData(url: string, method: string, body?: Record<string, unknown>): unknown {
  // Auth
  if (url.includes('/auth/register') && method === 'post') {
    const role = (body?.role as string) ?? 'BUYER';
    const kycStatus = role === 'SELLER' ? 'PENDING' : 'NOT_SUBMITTED';
    const userId = `demo-${Date.now()}`;
    return {
      accessToken: 'demo-access-token-' + userId,
      refreshToken: 'demo-refresh-token-' + userId,
      user: {
        id: userId,
        name: body?.name ?? 'Usuário Demo',
        email: body?.email ?? 'demo@conneqt.com',
        type: 'PF',
        kycStatus,
        status: 'ACTIVE',
      },
    };
  }
  if (url.includes('/auth/login') && method === 'post') {
    return {
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
      user: { id: 'demo-user', name: 'Usuário Demo', email: body?.email ?? 'demo@conneqt.com', type: 'PF', kycStatus: 'NOT_SUBMITTED', status: 'ACTIVE' },
    };
  }

  // Seller endpoints
  if (url.includes('/seller/profile') && method === 'get') return MOCK_SELLER_PROFILE;
  if (url.includes('/seller/profile') && method === 'patch') return { success: true };
  if (url.includes('/seller/stats') && method === 'get') return MOCK_SELLER_STATS;
  if (url.includes('/seller/activity') && method === 'get') return MOCK_ACTIVITY_FEED;

  // Vehicles
  if (url.includes('/vehicles/mine') && method === 'get') return MOCK_MY_VEHICLES;
  const vehicleByIdMatch = url.match(/\/vehicles\/([^/?]+)/);
  if (vehicleByIdMatch && method === 'get') {
    const found = MOCK_MY_VEHICLES.find((v) => v.id === vehicleByIdMatch[1]);
    return found ?? MOCK_MY_VEHICLES[0];
  }

  // Proposals
  if (url.match(/\/proposals\/([^/?]+)\/respond/) && method === 'patch') return { success: true };
  if (url.includes('/proposals/mine') && method === 'get') return MOCK_MY_PROPOSALS;
  if (url.includes('/proposals') && method === 'post') return { id: 'prop-demo-1', status: 'PENDING', message: 'Proposta enviada!' };

  // Listings
  const listingByIdMatch = url.match(/\/listings\/([^/?]+)/);
  if (listingByIdMatch && method === 'get') {
    const found = MOCK_LISTINGS.find((l) => l.id === listingByIdMatch[1]);
    return found ?? MOCK_LISTINGS[0];
  }
  if (url.includes('/listings') && method === 'get') {
    return { data: MOCK_LISTINGS, total: MOCK_LISTINGS.length };
  }

  // FIPE
  if (url.includes('/fipe') && method === 'get') return { brands: [], models: [], years: [] };

  return {};
}

export function demoAdapter(
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> {
  const url = config.url ?? '';
  const method = (config.method ?? 'get').toLowerCase();
  let body: Record<string, unknown> | undefined;
  try {
    body = config.data ? (typeof config.data === 'string' ? JSON.parse(config.data) : config.data) : undefined;
  } catch {
    body = undefined;
  }
  const data = getMockData(url, method, body);

  return Promise.resolve({
    data,
    status: 200,
    statusText: 'OK',
    headers: { 'content-type': 'application/json' },
    config,
  } as AxiosResponse);
}
