# Conneqt — Plataforma de Intermediação de Veículos

> **"O Uber dos veículos"** — Conecta compradores e vendedores com inspeção obrigatória, laudo digital e chat em tempo real para negociação direta.

---

## Estrutura do Projeto (Monorepo — Turborepo)

```
conneqt/
├── apps/
│   ├── api/          # Backend NestJS (porta 3001) — REST + WebSocket
│   ├── web/          # Portal público + comprador (Next.js 15, porta 3000) — PWA
│   ├── seller/       # Painel do vendedor (Next.js 15, porta 5001) — PWA
│   └── admin/        # Painel administrativo (Next.js 15, porta 3002)
├── packages/
│   ├── database/     # Prisma schema + cliente compartilhado
│   ├── types/        # Tipos e DTOs compartilhados
│   └── ui/           # Componentes UI compartilhados
├── docker/
│   └── docker-compose.yml
├── turbo.json
└── pnpm-workspace.yaml
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9
- Conta [Supabase](https://supabase.com) (banco de dados + storage)

## Início Rápido

```bash
# 1. Instalar dependências
pnpm install

# 2. Configurar variáveis de ambiente
# Edite apps/api/.env com suas credenciais (Supabase, JWT, FIPE, etc.)

# 3. Gerar Prisma Client
cd packages/database && npx prisma generate

# 4. Compilar packages/database
npx tsc --project tsconfig.json

# 5. Build da API
cd ../../apps/api && pnpm exec nest build

# 6. Iniciar a API
node dist/main.js
```

## Apps disponíveis

| App | URL | Descrição |
|-----|-----|-----------|
| `api` | http://localhost:3001 | REST API + Swagger (`/api/docs`) |
| `web` | http://localhost:3000 | Portal público + comprador (PWA) |
| `seller` | http://localhost:5001 | Painel do vendedor (PWA) |
| `admin` | http://localhost:3002 | Painel administrativo |

---

## Endpoints da API (v1)

### Auth
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/v1/auth/register` | Cadastro de usuário |
| POST | `/api/v1/auth/login` | Login (retorna access + refresh token) |
| POST | `/api/v1/auth/logout` | Encerrar sessão |
| POST | `/api/v1/auth/refresh` | Renovar access token |
| GET | `/api/v1/auth/me` | Dados do usuário autenticado |

### Usuários
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/users/me` | Perfil do usuário autenticado |
| PATCH | `/api/v1/users/me` | Atualizar perfil |
| POST | `/api/v1/users/me/kyc` | Submeter verificação KYC |
| GET | `/api/v1/users/:id` | Perfil público de um usuário |

### Veículos
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/v1/vehicles` | Cadastrar veículo |
| GET | `/api/v1/vehicles/mine` | Meus veículos |
| GET | `/api/v1/vehicles/fipe?plate=` | Consultar FIPE por placa |
| GET | `/api/v1/vehicles/:id` | Detalhes do veículo |
| PATCH | `/api/v1/vehicles/:id` | Atualizar veículo |

### Inspeções
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/v1/inspections` | Iniciar inspeção |
| POST | `/api/v1/inspections/:id/upload-url` | Obter URL pré-assinada (S3) |
| POST | `/api/v1/inspections/:id/media` | Registrar mídias enviadas |
| GET | `/api/v1/inspections/queue` | Fila de inspeções (admin) |
| GET | `/api/v1/inspections/:id` | Detalhes da inspeção |
| PATCH | `/api/v1/inspections/:id/review` | Aprovar / reprovar (admin) |

### Anúncios
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/listings` | Marketplace público (com filtros) |
| GET | `/api/v1/listings/:id` | Detalhes do anúncio + laudo |
| POST | `/api/v1/listings` | Publicar anúncio |
| DELETE | `/api/v1/listings/:id` | Desativar anúncio |

### Propostas
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/v1/proposals` | Enviar proposta de compra |
| GET | `/api/v1/proposals/mine` | Minhas propostas (comprador) |
| GET | `/api/v1/proposals/listing/:id` | Propostas recebidas (vendedor) |
| PATCH | `/api/v1/proposals/:id/respond` | Aceitar / recusar / contra-proposta |

### Lojistas
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/v1/dealers` | Cadastrar como lojista |
| GET | `/api/v1/dealers/me` | Perfil do lojista autenticado |
| GET | `/api/v1/dealers/:id` | Detalhes de um lojista |

### FIPE
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/fipe/brands?type=cars` | Listar marcas (cars/motorcycles/trucks) |
| GET | `/api/v1/fipe/brands/:brandCode/models` | Modelos por marca |
| GET | `/api/v1/fipe/brands/:brandCode/models/:modelCode/years` | Anos do modelo |
| GET | `/api/v1/fipe/brands/:brandCode/models/:modelCode/years/:yearCode/price` | Preço FIPE |

### Admin
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/admin/dashboard` | KPIs e métricas |
| GET | `/api/v1/admin/users` | Listar usuários |
| PATCH | `/api/v1/admin/users/:id/block` | Bloquear usuário |
| PATCH | `/api/v1/admin/users/:id/kyc/approve` | Aprovar KYC |
| PATCH | `/api/v1/admin/users/:id/kyc/reject` | Reprovar KYC |

### Chat (WebSocket)
| Evento | Descrição |
|--------|-----------|
| `join_room` | Entrar no chat de um anúncio |
| `send_message` | Enviar mensagem |
| `get_messages` | Buscar histórico |

---

## Roadmap

### ✅ Fase 0 — Infraestrutura (Concluída)
- [x] Monorepo Turborepo + pnpm workspaces
- [x] Schema Prisma com 11 tabelas (User, Vehicle, Inspection, Listing, Proposal, Chat, Dealer, etc.)
- [x] Banco de dados Supabase (PostgreSQL) — tabelas criadas + RLS habilitado
- [x] Storage Supabase — buckets `inspection-media`, `avatars`, `documents` com políticas RLS
- [x] Build da API NestJS funcionando (TypeScript compilado, sem erros)
- [x] API rodando em `http://localhost:3001` com Swagger em `/api/docs`
- [x] Prisma Client gerado e hoisted para o root `node_modules`

### ✅ Fase 1 — Backend Core (Concluída)
- [x] Autenticação JWT + Refresh Token (register, login, logout, refresh, me)
- [x] Guards e estratégias Passport (jwt, jwt-refresh, local)
- [x] Rate limiting em 3 níveis (short/medium/long) via Throttler
- [x] Segurança global: Helmet, CORS configurado para 3 domínios
- [x] Versionamento de API URI-based (`/v1`)
- [x] Validação global (ValidationPipe, whitelist, forbidNonWhitelisted)
- [x] Cache Redis via Keyv / `@nestjs/cache-manager`
- [x] EventEmitter para comunicação intra-modular
- [x] Scheduled Jobs com `@nestjs/schedule`
- [x] CRUD de Veículos (create, list mine, get, update) + status machine
- [x] Módulo de Inspeções com upload via presigned URL (S3), fila, revisão admin, IA stub
- [x] Marketplace de Anúncios com filtros, contagem de views, expiração
- [x] Fluxo de Propostas (envio, aceite, recusa, contra-proposta)
- [x] Módulo de Lojistas (planos STARTER/PRO/ENTERPRISE, comissão)
- [x] Chat real-time via WebSocket (Socket.io Gateway)
- [x] Notificações (eventos: proposal.created, inspection.reviewed) — providers pendentes
- [x] Storage Service (S3 presigned URLs + CloudFront CDN)
- [x] Admin endpoints (dashboard, gestão de usuários, KYC, fila de inspeções)
- [x] **Integração FIPE** — marcas, modelos, anos e preços via `fipe.parallelum.com.br/api/v2`
  - Cache de 24h em memória (tabela atualiza mensalmente)
  - Token de assinatura configurável (`FIPE_SUBSCRIPTION_TOKEN`)
  - Tratamento de erros HTTP (404 → NotFoundException)

### ✅ Fase 2 — Frontend (Estrutura Criada)
- [x] App `web` (comprador/visitante) — páginas: home, buscar, detalhe veículo, cadastro, login, vender
- [x] App `seller` (vendedor) — páginas: dashboard, cadastrar veículo, meus veículos, inspeção, publicar, propostas, perfil
- [x] App `admin` — páginas: dashboard, usuários, lojistas, anúncios, fila de inspeções, login
- [x] Componentes PWA (câmera, install prompt, service worker) em `web` e `seller`
- [x] Chat real-time (Socket.io client) em `web` e `seller` (chat entre comprador e vendedor, estilo OLX)
- [x] Navegação bottom mobile em `web`
- [x] Hooks `useChat` e `useInView` (lazy loading)
- [x] Clients HTTP para API (fetch wrapper com autenticação) em todos os apps

### 🔲 Fase 3 — Integrações Externas (Próximos Passos)
- [ ] **KYC real** — Integrar Unico (biometria + liveness) no fluxo de `/users/me/kyc`
- [ ] **Consulta por placa** — Integrar Pegaki ou ConsultaKM no `vehicles.service.ts` (hoje retorna mock)
- [ ] **Notificações** — Implementar SendGrid (email), Twilio (SMS), Firebase (push) no `notifications.service.ts`
- [ ] **Pagamento** — Implementar Stripe ou Pagar.me para fluxo de escrow *(fora do escopo desta fase)*
- [ ] **Assinatura digital** — Integrar D4Sign para contrato de venda
- [ ] **Storage AWS** — Substituir stub S3 por chamadas reais (`aws-sdk`) no `storage.service.ts`
- [ ] **IA de inspeção** — Implementar `inspection-ai.service.ts` (hoje apenas stub com score aleatório)
- [ ] **Monitoramento** — Configurar Sentry DSN no `.env`

### 🔲 Fase 4 — Qualidade & Produção
- [ ] Testes unitários (Jest) nos services críticos (auth, listings, proposals)
- [ ] Testes e2e (Supertest) nos endpoints da API
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Variáveis de ambiente de produção (Supabase prod, domínios reais)
- [ ] Redis em produção (Upstash ou Redis Cloud)
- [ ] Deploy API (Railway, Render ou EC2)
- [ ] Deploy frontends (Vercel)
- [ ] Configurar domínio + SSL
- [ ] LGPD: política de privacidade, consentimento, exclusão de dados
