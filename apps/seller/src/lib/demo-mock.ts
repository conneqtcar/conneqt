import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// ─── PUBLIC LISTINGS (para possível uso futuro) ───────────────────────────────
export const MOCK_LISTINGS = [
  {
    id: 'mock-1',
    price: 89900,
    acceptsFinancing: true,
    status: 'ACTIVE',
    title: 'Toyota Corolla 2022 — 32.000 km',
    vehicle: {
      id: 'v1',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      mileage: 32000,
      fipePrice: 91000,
    },
  },
];

// ─── SELLER MOCK DATA ────────────────────────────────────────────────────────

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
    message: 'Olá! Tenho interesse no veículo. Poderia me dar mais detalhes sobre o histórico de manutenção? Tenho o valor em mãos para fechar rapidamente.',
    createdAt: '2026-04-21T09:00:00Z',
    buyer: { id: 'b1', name: 'Rafael Souza', avatar: 'https://picsum.photos/seed/buyer-rafael/100/100', phone: '(11) 97777-8888' },
    listing: { id: 'mock-1', title: 'Toyota Corolla 2022 — 32.000 km', price: 89900 },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
  },
  {
    id: 'prop-2',
    status: 'PENDING',
    amount: 87500,
    message: 'Tenho interesse. Aceita parcelamento no cartão ou é somente à vista e financiamento?',
    createdAt: '2026-04-20T15:30:00Z',
    buyer: { id: 'b2', name: 'Fernanda Melo', avatar: 'https://picsum.photos/seed/buyer-fernanda/100/100', phone: '(21) 96666-5555' },
    listing: { id: 'mock-1', title: 'Toyota Corolla 2022 — 32.000 km', price: 89900 },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
  },
  {
    id: 'prop-3',
    status: 'ACCEPTED',
    amount: 89900,
    message: 'Topei o valor pedido! Quando podemos fazer a vistoria presencial?',
    createdAt: '2026-04-18T11:00:00Z',
    buyer: { id: 'b3', name: 'Lucas Pereira', avatar: 'https://picsum.photos/seed/buyer-lucas/100/100', phone: '(31) 95555-4444' },
    listing: { id: 'mock-1', title: 'Toyota Corolla 2022 — 32.000 km', price: 89900 },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
  },
  {
    id: 'prop-4',
    status: 'REJECTED',
    amount: 72000,
    message: 'Tenho 72 mil à vista, pago hoje.',
    createdAt: '2026-04-16T08:00:00Z',
    buyer: { id: 'b4', name: 'Juliana Castro', avatar: 'https://picsum.photos/seed/buyer-juliana/100/100', phone: '(85) 94444-3333' },
    listing: { id: 'mock-1', title: 'Toyota Corolla 2022 — 32.000 km', price: 89900 },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
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
  { id: 'act-1', type: 'NEW_PROPOSAL', title: 'Nova proposta recebida', description: 'Rafael Souza fez uma proposta de R$ 85.000 no seu Toyota Corolla', createdAt: '2026-04-21T09:00:00Z', link: '/propostas' },
  { id: 'act-2', type: 'NEW_PROPOSAL', title: 'Nova proposta recebida', description: 'Fernanda Melo fez uma proposta de R$ 87.500', createdAt: '2026-04-20T15:30:00Z', link: '/propostas' },
  { id: 'act-3', type: 'VIEW_SPIKE', title: 'Pico de visualizações', description: 'Seu anúncio do Corolla recebeu 47 visualizações hoje', createdAt: '2026-04-20T08:00:00Z', link: '/meus-veiculos' },
  { id: 'act-4', type: 'PROPOSAL_ACCEPTED', title: 'Proposta aceita com sucesso', description: 'Você aceitou a proposta de Lucas Pereira por R$ 89.900', createdAt: '2026-04-18T11:30:00Z', link: '/propostas' },
  { id: 'act-5', type: 'INSPECTION_APPROVED', title: 'Inspeção aprovada ✓', description: 'Toyota Corolla 2022 recebeu score 92/100 da IA Conneqt', createdAt: '2026-03-17T10:00:00Z', link: '/meus-veiculos' },
  { id: 'act-6', type: 'LISTING_PUBLISHED', title: 'Anúncio publicado', description: 'Toyota Corolla 2022 está no ar e visível para compradores', createdAt: '2026-03-18T14:00:00Z', link: '/meus-veiculos' },
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
  kycStatus: 'APPROVED',
};

// ─── MOCK ROUTER ─────────────────────────────────────────────────────────────

function getMockData(url: string, method: string): unknown {
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
  if (url.includes('/vehicles') && method === 'post') {
    return { id: 'my-v-new', brand: 'Demo', model: 'Veículo', year: 2024, status: 'DRAFT' };
  }

  // Chat
  if (url.includes('/chat/conversations') && method === 'get') {
    return [
      {
        listingId: 'mock-1',
        price: 89900,
        status: 'ACTIVE',
        vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
        lastMessage: {
          content: 'Quando podemos fazer a vistoria presencial?',
          createdAt: '2026-04-18T11:05:00Z',
          sender: { id: 'b3', name: 'Lucas Pereira' },
        },
      },
      {
        listingId: 'mock-2',
        price: 89900,
        status: 'ACTIVE',
        vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022 },
        lastMessage: {
          content: 'Aceita parcelamento no cartão?',
          createdAt: '2026-04-20T15:35:00Z',
          sender: { id: 'b2', name: 'Fernanda Melo' },
        },
      },
    ];
  }

  // Proposals
  if (url.match(/\/proposals\/([^/?]+)\/respond/) && method === 'patch') return { success: true };
  if (url.includes('/proposals/mine') && method === 'get') return MOCK_MY_PROPOSALS;

  // Inspections
  if (url.includes('/inspections') && method === 'post') {
    return { id: 'ins-demo', vehicleId: 'my-v-new', status: 'PENDING', type: 'REMOTE' };
  }
  if (url.match(/\/inspections\/([^/?]+)\/upload-url/) && method === 'post') {
    return { uploadUrl: 'https://example.com/upload', key: 'demo-key', publicUrl: 'https://picsum.photos/seed/upload/400/300' };
  }
  if (url.match(/\/inspections\/([^/?]+)\/media/) && method === 'post') return { success: true };

  // Listings
  if (url.includes('/listings') && method === 'post') {
    return { id: 'listing-demo-1' };
  }
  const listingByIdMatch = url.match(/\/listings\/([^/?]+)/);
  if (listingByIdMatch && method === 'get') {
    return MOCK_LISTINGS[0];
  }

  // FIPE
  if (url.includes('/fipe') && method === 'get') {
    return { brand: 'Demo', model: 'Veículo', year: 2024, price: 'R$ 48.000' };
  }

  return {};
}

export function demoAdapter(
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> {
  const url = config.url ?? '';
  const method = (config.method ?? 'get').toLowerCase();
  const data = getMockData(url, method);

  return Promise.resolve({
    data,
    status: 200,
    statusText: 'OK',
    headers: { 'content-type': 'application/json' },
    config,
  } as AxiosResponse);
}
