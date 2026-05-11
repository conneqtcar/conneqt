import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const MOCK_LISTINGS = [
  {
    id: 'mock-1',
    price: 89900,
    acceptsFinancing: true,
    status: 'ACTIVE',
    createdAt: '2026-04-10T10:00:00Z',
    seller: { name: 'Carlos Mendes', email: 'carlos@email.com' },
    vehicle: { brand: 'Toyota', model: 'Corolla', year: 2022, plate: 'BRA2E19' },
  },
  {
    id: 'mock-2',
    price: 145000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    createdAt: '2026-04-12T10:00:00Z',
    seller: { name: 'Ana Lima', email: 'ana@email.com' },
    vehicle: { brand: 'Honda', model: 'Civic', year: 2023, plate: 'RJO3F47' },
  },
  {
    id: 'mock-3',
    price: 62500,
    acceptsFinancing: false,
    status: 'SOLD',
    createdAt: '2026-04-15T10:00:00Z',
    seller: { name: 'Pedro Santos', email: 'pedro@email.com' },
    vehicle: { brand: 'Volkswagen', model: 'Polo', year: 2021, plate: 'MGO1K82' },
  },
  {
    id: 'mock-4',
    price: 195000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    createdAt: '2026-04-16T10:00:00Z',
    seller: { name: 'AutoCenter Premium', email: 'vendas@autocenter.com.br' },
    vehicle: { brand: 'Jeep', model: 'Compass', year: 2024, plate: 'SPO4L91' },
  },
  {
    id: 'mock-5',
    price: 75000,
    acceptsFinancing: true,
    status: 'ACTIVE',
    createdAt: '2026-04-17T10:00:00Z',
    seller: { name: 'Mariana Costa', email: 'mariana@email.com' },
    vehicle: { brand: 'Hyundai', model: 'HB20', year: 2023, plate: 'CEM5M23' },
  },
  {
    id: 'mock-6',
    price: 118000,
    acceptsFinancing: true,
    status: 'INACTIVE',
    createdAt: '2026-04-18T10:00:00Z',
    seller: { name: 'Roberto Alves', email: 'roberto@email.com' },
    vehicle: { brand: 'Fiat', model: 'Pulse', year: 2023, plate: 'CWB6N55' },
  },
];

const MOCK_INSPECTIONS = [
  {
    id: 'ins-1',
    type: 'REMOTE',
    aiScore: 92,
    aiFlags: [],
    createdAt: '2026-04-22T08:30:00Z',
    vehicle: {
      id: 'v1',
      plate: 'BRA2E19',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      owner: { name: 'Carlos Mendes', email: 'carlos@email.com' },
    },
    _count: { media: 18 },
  },
  {
    id: 'ins-2',
    type: 'REMOTE',
    aiScore: 74,
    aiFlags: ['MINOR_SCRATCH_BUMPER', 'WINDSHIELD_CHIP'],
    createdAt: '2026-04-22T09:15:00Z',
    vehicle: {
      id: 'v2',
      plate: 'MGO1K82',
      brand: 'Volkswagen',
      model: 'Polo',
      year: 2021,
      owner: { name: 'Pedro Santos', email: 'pedro@email.com' },
    },
    _count: { media: 12 },
  },
  {
    id: 'ins-3',
    type: 'REMOTE',
    aiScore: 88,
    aiFlags: [],
    createdAt: '2026-04-22T10:00:00Z',
    vehicle: {
      id: 'v3',
      plate: 'CEM5M23',
      brand: 'Hyundai',
      model: 'HB20',
      year: 2023,
      owner: { name: 'Mariana Costa', email: 'mariana@email.com' },
    },
    _count: { media: 15 },
  },
  {
    id: 'ins-4',
    type: 'PRESENTIAL',
    aiScore: 95,
    aiFlags: [],
    createdAt: '2026-04-22T10:45:00Z',
    vehicle: {
      id: 'v4',
      plate: 'SPO4L91',
      brand: 'Jeep',
      model: 'Compass',
      year: 2024,
      owner: { name: 'AutoCenter Premium', email: 'vendas@autocenter.com.br' },
    },
    _count: { media: 22 },
  },
  {
    id: 'ins-5',
    type: 'REMOTE',
    aiScore: null,
    aiFlags: [],
    createdAt: '2026-04-22T11:20:00Z',
    vehicle: {
      id: 'v5',
      plate: 'CWB6N55',
      brand: 'Fiat',
      model: 'Pulse',
      year: 2023,
      owner: { name: 'Roberto Alves', email: 'roberto@email.com' },
    },
    _count: { media: 8 },
  },
];

const MOCK_DEALERS = [
  {
    id: 'd1',
    companyName: 'AutoCenter Premium Ltda',
    cnpj: '12.345.678/0001-99',
    plan: 'ENTERPRISE',
    status: 'ACTIVE',
    createdAt: '2025-06-01T10:00:00Z',
    user: { name: 'Rogério Silva', email: 'rogerio@autocenter.com.br' },
    _count: { listings: 45 },
  },
  {
    id: 'd2',
    companyName: 'Mega Veículos SP',
    cnpj: '98.765.432/0001-11',
    plan: 'PREMIUM',
    status: 'ACTIVE',
    createdAt: '2025-08-15T10:00:00Z',
    user: { name: 'Fernanda Rocha', email: 'fernanda@megaveiculo.com.br' },
    _count: { listings: 28 },
  },
  {
    id: 'd3',
    companyName: 'Sul Motors',
    cnpj: '55.111.222/0001-33',
    plan: 'BASIC',
    status: 'ACTIVE',
    createdAt: '2025-11-20T10:00:00Z',
    user: { name: 'Bruno Machado', email: 'bruno@sulmotors.com.br' },
    _count: { listings: 14 },
  },
  {
    id: 'd4',
    companyName: 'Bahia Carros',
    cnpj: '44.333.555/0001-77',
    plan: 'PREMIUM',
    status: 'ACTIVE',
    createdAt: '2026-01-10T10:00:00Z',
    user: { name: 'Larissa Brito', email: 'larissa@bahiacarros.com.br' },
    _count: { listings: 19 },
  },
];

const MOCK_USERS = [
  {
    id: 'u1',
    name: 'Carlos Mendes',
    email: 'carlos@email.com',
    type: 'SELLER',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    createdAt: '2025-12-01T10:00:00Z',
  },
  {
    id: 'u2',
    name: 'Amanda Ferreira',
    email: 'amanda@email.com',
    type: 'BUYER',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    createdAt: '2026-01-15T10:00:00Z',
  },
  {
    id: 'u3',
    name: 'Pedro Santos',
    email: 'pedro@email.com',
    type: 'SELLER',
    status: 'ACTIVE',
    kycStatus: 'PENDING',
    createdAt: '2026-02-20T10:00:00Z',
  },
  {
    id: 'u4',
    name: 'Mariana Costa',
    email: 'mariana@email.com',
    type: 'SELLER',
    status: 'ACTIVE',
    kycStatus: 'APPROVED',
    createdAt: '2026-03-05T10:00:00Z',
  },
  {
    id: 'u5',
    name: 'João Oliveira',
    email: 'joao@email.com',
    type: 'BUYER',
    status: 'ACTIVE',
    kycStatus: 'NOT_SUBMITTED',
    createdAt: '2026-04-01T10:00:00Z',
  },
];

const MOCK_INSPECTION_DETAILS: Record<string, object> = {
  'ins-1': {
    id: 'ins-1',
    type: 'REMOTE',
    status: 'AWAITING_REVIEW',
    aiScore: 92,
    aiFlags: [],
    reviewNotes: null,
    createdAt: '2026-04-22T08:30:00Z',
    vehicle: {
      plate: 'BRA2E19',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      color: 'Prata',
      mileage: 32000,
      owner: { name: 'Carlos Mendes', email: 'carlos@email.com' },
    },
    media: [
      { id: 'm1', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-front/800/600', fileName: 'frente.jpg', createdAt: '2026-04-22T08:00:00Z' },
      { id: 'm2', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-side/800/600', fileName: 'lateral-dir.jpg', createdAt: '2026-04-22T08:01:00Z' },
      { id: 'm3', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-rear/800/600', fileName: 'traseira.jpg', createdAt: '2026-04-22T08:02:00Z' },
      { id: 'm4', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-interior/800/600', fileName: 'interior.jpg', createdAt: '2026-04-22T08:03:00Z' },
      { id: 'm5', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-engine/800/600', fileName: 'motor.jpg', createdAt: '2026-04-22T08:04:00Z' },
      { id: 'm6', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/corolla-dash/800/600', fileName: 'painel.jpg', createdAt: '2026-04-22T08:05:00Z' },
    ],
    items: [
      { id: 'i1', category: 'Carroceria', description: 'Sem amassados ou arranhões aparentes', passed: true, notes: null },
      { id: 'i2', category: 'Pneus', description: 'Desgaste uniforme, acima do limite legal', passed: true, notes: null },
      { id: 'i3', category: 'Motor', description: 'Sem vazamentos de óleo ou refrigerante', passed: true, notes: null },
      { id: 'i4', category: 'Freios', description: 'Discos e pastilhas em boas condições', passed: true, notes: null },
      { id: 'i5', category: 'Interior', description: 'Bancos, painel e teto em bom estado', passed: true, notes: null },
      { id: 'i6', category: 'Elétrica', description: 'Luzes, ar-condicionado e multimídia ok', passed: true, notes: null },
    ],
  },
  'ins-2': {
    id: 'ins-2',
    type: 'REMOTE',
    status: 'AWAITING_REVIEW',
    aiScore: 74,
    aiFlags: ['MINOR_SCRATCH_BUMPER', 'WINDSHIELD_CHIP'],
    reviewNotes: null,
    createdAt: '2026-04-22T09:15:00Z',
    vehicle: {
      plate: 'MGO1K82',
      brand: 'Volkswagen',
      model: 'Polo',
      year: 2021,
      color: 'Branco',
      mileage: 57400,
      owner: { name: 'Pedro Santos', email: 'pedro@email.com' },
    },
    media: [
      { id: 'm7', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/polo-front/800/600', fileName: 'frente.jpg', createdAt: '2026-04-22T09:00:00Z' },
      { id: 'm8', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/polo-bumper/800/600', fileName: 'parachoque.jpg', createdAt: '2026-04-22T09:01:00Z' },
      { id: 'm9', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/polo-windshield/800/600', fileName: 'parabrisa.jpg', createdAt: '2026-04-22T09:02:00Z' },
      { id: 'm10', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/polo-interior/800/600', fileName: 'interior.jpg', createdAt: '2026-04-22T09:03:00Z' },
    ],
    items: [
      { id: 'i7', category: 'Carroceria', description: 'Arranhão no para-choque traseiro', passed: false, notes: 'Risco superficial no canto direito do para-choque' },
      { id: 'i8', category: 'Vidros', description: 'Lascado no parabrisa', passed: false, notes: 'Chip de 3mm na área de visão do motorista' },
      { id: 'i9', category: 'Pneus', description: 'Desgaste uniforme', passed: true, notes: null },
      { id: 'i10', category: 'Motor', description: 'Sem anomalias', passed: true, notes: null },
      { id: 'i11', category: 'Freios', description: 'Condições normais', passed: true, notes: null },
      { id: 'i12', category: 'Interior', description: 'Boa conservação', passed: true, notes: null },
    ],
  },
  'ins-3': {
    id: 'ins-3',
    type: 'REMOTE',
    status: 'AWAITING_REVIEW',
    aiScore: 88,
    aiFlags: [],
    reviewNotes: null,
    createdAt: '2026-04-22T10:00:00Z',
    vehicle: {
      plate: 'CEM5M23',
      brand: 'Hyundai',
      model: 'HB20',
      year: 2023,
      color: 'Vermelho',
      mileage: 18500,
      owner: { name: 'Mariana Costa', email: 'mariana@email.com' },
    },
    media: [
      { id: 'm13', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/hb20-front/800/600', fileName: 'frente.jpg', createdAt: '2026-04-22T10:00:00Z' },
      { id: 'm14', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/hb20-side/800/600', fileName: 'lateral.jpg', createdAt: '2026-04-22T10:01:00Z' },
      { id: 'm15', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/hb20-rear/800/600', fileName: 'traseira.jpg', createdAt: '2026-04-22T10:02:00Z' },
      { id: 'm16', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/hb20-engine/800/600', fileName: 'motor.jpg', createdAt: '2026-04-22T10:03:00Z' },
      { id: 'm17', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/hb20-interior/800/600', fileName: 'interior.jpg', createdAt: '2026-04-22T10:04:00Z' },
    ],
    items: [
      { id: 'i13', category: 'Carroceria', description: 'Excelente conservação', passed: true, notes: null },
      { id: 'i14', category: 'Pneus', description: 'Pneus novos (< 5.000 km)', passed: true, notes: null },
      { id: 'i15', category: 'Motor', description: 'Sem vazamentos', passed: true, notes: null },
      { id: 'i16', category: 'Freios', description: 'Em ótimo estado', passed: true, notes: null },
      { id: 'i17', category: 'Interior', description: 'Como novo', passed: true, notes: null },
    ],
  },
  'ins-4': {
    id: 'ins-4',
    type: 'PRESENTIAL',
    status: 'AWAITING_REVIEW',
    aiScore: 95,
    aiFlags: [],
    reviewNotes: null,
    createdAt: '2026-04-22T10:45:00Z',
    vehicle: {
      plate: 'SPO4L91',
      brand: 'Jeep',
      model: 'Compass',
      year: 2024,
      color: 'Cinza',
      mileage: 8200,
      owner: { name: 'AutoCenter Premium', email: 'vendas@autocenter.com.br' },
    },
    media: [
      { id: 'm18', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-front/800/600', fileName: 'frente.jpg', createdAt: '2026-04-22T10:45:00Z' },
      { id: 'm19', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-side-l/800/600', fileName: 'lateral-esq.jpg', createdAt: '2026-04-22T10:46:00Z' },
      { id: 'm20', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-side-r/800/600', fileName: 'lateral-dir.jpg', createdAt: '2026-04-22T10:47:00Z' },
      { id: 'm21', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-rear/800/600', fileName: 'traseira.jpg', createdAt: '2026-04-22T10:48:00Z' },
      { id: 'm22', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-engine/800/600', fileName: 'motor.jpg', createdAt: '2026-04-22T10:49:00Z' },
      { id: 'm23', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-interior/800/600', fileName: 'interior.jpg', createdAt: '2026-04-22T10:50:00Z' },
      { id: 'm24', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/compass-dash/800/600', fileName: 'painel.jpg', createdAt: '2026-04-22T10:51:00Z' },
    ],
    items: [
      { id: 'i18', category: 'Carroceria', description: 'Sem defeitos, veículo seminovo', passed: true, notes: null },
      { id: 'i19', category: 'Pneus', description: 'Novos de fábrica', passed: true, notes: null },
      { id: 'i20', category: 'Motor', description: 'Perfeito estado', passed: true, notes: null },
      { id: 'i21', category: 'Freios', description: 'Originais de fábrica', passed: true, notes: null },
      { id: 'i22', category: 'Interior', description: 'Impecável', passed: true, notes: null },
      { id: 'i23', category: 'Documentação', description: 'IPVA em dia, sem multas', passed: true, notes: null },
    ],
  },
  'ins-5': {
    id: 'ins-5',
    type: 'REMOTE',
    status: 'AWAITING_REVIEW',
    aiScore: null,
    aiFlags: [],
    reviewNotes: null,
    createdAt: '2026-04-22T11:20:00Z',
    vehicle: {
      plate: 'CWB6N55',
      brand: 'Fiat',
      model: 'Pulse',
      year: 2023,
      color: 'Azul',
      mileage: 41200,
      owner: { name: 'Roberto Alves', email: 'roberto@email.com' },
    },
    media: [
      { id: 'm25', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/pulse-front/800/600', fileName: 'frente.jpg', createdAt: '2026-04-22T11:20:00Z' },
      { id: 'm26', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/pulse-side/800/600', fileName: 'lateral.jpg', createdAt: '2026-04-22T11:21:00Z' },
      { id: 'm27', mediaType: 'PHOTO', url: 'https://picsum.photos/seed/pulse-interior/800/600', fileName: 'interior.jpg', createdAt: '2026-04-22T11:22:00Z' },
    ],
    items: [
      { id: 'i24', category: 'Carroceria', description: 'Aguardando análise IA', passed: null, notes: null },
      { id: 'i25', category: 'Pneus', description: 'Aguardando análise IA', passed: null, notes: null },
      { id: 'i26', category: 'Motor', description: 'Aguardando análise IA', passed: null, notes: null },
    ],
  },
};

function getMockData(url: string, method: string, body?: Record<string, unknown>): unknown {
  if (url.includes('/admin/dashboard') && method === 'get') {
    return {
      totalUsers: 1247,
      activeListings: 384,
      awaitingReviewInspections: 12,
      totalDealers: 87,
    };
  }
  if (url.includes('/inspections/queue') && method === 'get') {
    return MOCK_INSPECTIONS;
  }
  // GET /inspections/:id — detalhe de uma inspeção específica
  const inspectionDetailMatch = url.match(/\/inspections\/(ins-\d+)$/);
  if (inspectionDetailMatch && method === 'get') {
    const detail = MOCK_INSPECTION_DETAILS[inspectionDetailMatch[1]];
    return detail ?? MOCK_INSPECTION_DETAILS['ins-1'];
  }
  if (url.includes('/inspections/') && (method === 'patch' || method === 'post')) {
    return { success: true, message: 'Operação realizada com sucesso.' };
  }
  if (url.includes('/admin/listings') && method === 'post') {
    const newListing = {
      id: `l-${Date.now()}`,
      status: 'ACTIVE',
      price: (body?.price as number) ?? 0,
      createdAt: new Date().toISOString(),
      vehicle: {
        brand: (body?.brand as string) ?? 'Marca',
        model: (body?.model as string) ?? 'Modelo',
        year: (body?.year as number) ?? new Date().getFullYear(),
        plate: (body?.plate as string) ?? '',
      },
      seller: { name: 'Admin', email: 'admin@conneqtcar.com.br' },
    };
    MOCK_LISTINGS.push(newListing as typeof MOCK_LISTINGS[0]);
    return newListing;
  }
  if (url.includes('/listings') && method === 'get') {
    return { data: MOCK_LISTINGS, total: MOCK_LISTINGS.length };
  }
  if (url.includes('/listings') && method === 'delete') {
    return { success: true };
  }
  if (url.includes('/dealers') && method === 'get') {
    return { data: MOCK_DEALERS, total: MOCK_DEALERS.length };
  }
  if (url.includes('/admin/dealers') && method === 'post') {
    return {
      id: `d-${Date.now()}`,
      companyName: 'Nova Loja Demo',
      cnpj: '00.000.000/0000-00',
      plan: 'STARTER',
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      user: { name: 'Responsável Demo', email: 'demo@loja.com' },
      _count: { listings: 0 },
    };
  }
  if (url.includes('/admin/users') && method === 'get') {
    return { data: MOCK_USERS, total: MOCK_USERS.length };
  }
  if ((url.includes('/admin/users/') || url.includes('/admin/')) && method === 'patch') {
    return { success: true };
  }
  return {};
}

export function demoAdapter(
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> {
  const url = config.url ?? '';
  const method = (config.method ?? 'get').toLowerCase();
  let body: Record<string, unknown> | undefined;
  try {
    body = config.data
      ? typeof config.data === 'string'
        ? JSON.parse(config.data)
        : config.data
      : undefined;
  } catch { body = undefined; }
  const data = getMockData(url, method, body);

  return Promise.resolve({
    data,
    status: 200,
    statusText: 'OK',
    headers: { 'content-type': 'application/json' },
    config,
  } as AxiosResponse);
}
