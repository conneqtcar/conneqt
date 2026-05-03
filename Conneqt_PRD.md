# PRD — Conneqt: Plataforma de Intermediação de Veículos

> **Versão:** 1.0.0  
> **Status:** Draft  
> **Data:** Abril 2026  
> **Classificação:** Confidencial

---

## 1. Visão Geral do Produto

### 1.1 Problema

O mercado de compra e venda de veículos no Brasil é marcado por:

- **Desconfiança estrutural**: Compradores não confiam em vendedores particulares e vice-versa
- **Fraudes e adulterações**: Hodômetros adulterados, histórico de sinistros omitido, chassis irregulares
- **Intermediação cara e ineficiente**: Lojistas cobram margens de 15–30% sem agregar valor real ao processo
- **Processo lento e burocrático**: Tempo médio de venda de um veículo no Brasil: 45–90 dias
- **Falta de transparência**: Ausência de dados objetivos para precificação e tomada de decisão

### 1.2 Solução

**AutoBridge** é uma plataforma asset-light de intermediação veicular — o "Uber dos veículos". A empresa não possui, não estoca e não financia veículos. Conecta vendedores (pessoa física e lojistas) a compradores, validando a autenticidade e condição real de cada veículo por meio de **inspeção obrigatória via mídia em tempo real (fotos + vídeo ao vivo)**, análise por IA e verificação humana certificada.

### 1.3 Proposta de Valor

| Público | Proposta de Valor |
|---|---|
| Comprador | Segurança de comprar um veículo verificado, com laudo digital e histórico completo |
| Vendedor PF | Alcance nacional, precificação inteligente, venda em até 15 dias |
| Lojista | Vitrine digital com credibilidade + CRM integrado + leads qualificados |
| Plataforma | Receita recorrente sem imobilização de capital ou estoque |

---

## 2. Objetivos de Negócio

### 2.1 Missão
Tornar a compra e venda de veículos no Brasil 100% confiável, digital e sem fricção.

### 2.2 OKRs — Ano 1

**Objetivo 1: Estabelecer mercado**
- KR1: 10.000 veículos inspecionados e publicados
- KR2: R$ 50M em GMV (Gross Merchandise Value) intermediado
- KR3: NPS ≥ 70 (compradores e vendedores)

**Objetivo 2: Validar modelo de confiança**
- KR1: Taxa de fraude pós-venda < 0,5%
- KR2: 95% das inspeções concluídas em menos de 24h
- KR3: 80% dos laudos emitidos sem revisão humana (IA autônoma)

**Objetivo 3: Escalar parceiros**
- KR1: 500 lojistas ativos na plataforma
- KR2: 20 cidades com cobertura de inspeção presencial

---

## 3. Usuários e Personas

### 3.1 Persona 1 — Carlos (Vendedor PF)
- 42 anos, CLT, quer trocar de carro
- Tem medo de golpe no PIX, não sabe precificar o veículo
- Quer praticidade e segurança jurídica
- **Jobs-to-be-done**: Vender seu carro com segurança, sem perder dinheiro e sem complicação

### 3.2 Persona 2 — Amanda (Compradora)
- 29 anos, primeira compra de seminovo
- Medo de comprar "gato por lebre", não entende de mecânica
- Quer confiança e garantia mínima
- **Jobs-to-be-done**: Comprar um carro sem surpresas desagradáveis

### 3.3 Persona 3 — Rogério (Lojista)
- Dono de loja com 30–80 veículos em estoque
- Frustrações com Webmotors/OLX: leads frios, concorrência de preço
- Quer leads quentes, processo ágil e diferenciação
- **Jobs-to-be-done**: Vender mais rápido com menos esforço de qualificação

### 3.4 Persona 4 — Administrador da Plataforma
- Equipe interna: analistas, revisores de inspeção, suporte, financeiro
- Necessita de dashboards em tempo real, controle de fraudes e gestão de parceiros

---

## 4. Módulos da Plataforma

### 4.1 Portal Público (Marketplace)

**Funcionalidades Core:**
- Busca avançada com filtros inteligentes (make, model, year, price, mileage, city, inspection score)
- Listagem de veículos com badge de verificação (Ouro / Prata / Bronze)
- Página de detalhe do veículo com laudo digital interativo
- Galeria imersiva: fotos 360°, vídeo de inspeção, vídeo do motor em funcionamento
- Comparador de veículos (até 3 simultâneos)
- Calculadora de financiamento integrada (simulação via Open Finance)
- Histórico do veículo: DETRAN, Recall, Score de Manutenção, FIPE histórica
- Sistema de favoritos e alertas de preço
- Chat em tempo real comprador ↔ vendedor (auditado pela plataforma)
- Integração com agendamento de test drive

### 4.2 Painel do Vendedor PF

**Onboarding:**
- Cadastro com validação de CPF + Selfie liveness (biometria facial)
- Verificação de proprietário via RENAVAM + Documento do Veículo
- Aceite de termos e política anti-fraude

**Fluxo de Publicação:**
1. Dados básicos do veículo (placa → consulta automática FIPE/DETRAN)
2. Sugestão de preço por IA (baseado em FIPE + mercado local + condição estimada)
3. Agendamento de inspeção (remota ou presencial)
4. Publicação automática após aprovação do laudo
5. Painel de performance: visualizações, interesse, propostas recebidas

**Inspeção Remota (fluxo guiado):**
- App mobile com guia step-by-step de fotos obrigatórias (60+ ângulos padronizados)
- Gravação de vídeo ao vivo com detecção de liveness (anti-replay, anti-deepfake)
- Checklist interativo: documentos, lataria, interior, motor, rodas, chassi
- Validação por IA em tempo real com feedback imediato ao usuário
- Revisão humana para casos de baixa confiança (score < 85%)

**Negociação e Venda:**
- Recebimento de propostas com contra-proposta automatizada sugerida por IA
- Assinatura digital do contrato de compra e venda (ICP-Brasil)
- Transferência segura via escrow (liberação após confirmação de entrega)
- Notificação de obrigações pós-venda (DETRAN, seguro, etc.)

### 4.3 Painel do Lojista

**Gestão de Estoque:**
- Cadastro em massa via planilha ou integração com DMS (dealer management systems)
- Publicação instantânea com inspeção simplificada (lojistas certificados)
- Gestão de preços dinâmica (sugestão baseada em demanda e concorrência)
- Controle de validade dos anúncios e renovação automática

**CRM e Leads:**
- Fila de leads com score de qualificação
- Histórico completo de interações por lead
- Agendamento de test drive integrado à agenda da loja
- Funil de conversão com benchmarks do mercado

**Financeiro:**
- Dashboard de comissões e repasses
- Notas fiscais automáticas
- Relatório de performance por veículo e por período

**Planos de Parceria:**
| Plano | Anúncios | Destaque | Leads qualificados | Taxa de sucesso |
|---|---|---|---|---|
| Starter | 10 | Não | Não | 3,5% sobre venda |
| Pro | 50 | Sim | Básico | 3,0% sobre venda |
| Enterprise | Ilimitado | Premium | Avançado | 2,5% sobre venda |

### 4.4 Painel Admin da Plataforma

**Visão Operacional:**
- Dashboard em tempo real: GMV, anúncios ativos, inspeções pendentes, conversões
- Fila de revisão de inspeções com ferramentas de análise de imagem/vídeo
- Gestão de usuários, lojistas e permissões
- Monitor de fraudes com alertas automáticos

**Gestão de Conteúdo:**
- Aprovação/rejeição de anúncios com justificativa
- Gestão de categorias, marcas e modelos
- Precificação de planos e promoções

**Financeiro:**
- Conciliação de pagamentos (gateway + escrow)
- Repasse para vendedores e lojistas
- Relatórios contábeis e fiscais

**Analytics e BI:**
- Funil completo de conversão por canal
- Heat map geográfico de demanda
- Análise de churn de lojistas
- Previsão de GMV por ML

---

## 5. Sistema de Inspeção — Diferencial Competitivo

### 5.1 Visão Geral

A inspeção é o coração do produto. É o que transforma a AutoBridge de um classificado em uma plataforma de confiança. Todo veículo publicado **obrigatoriamente** passa por inspeção antes de ser exibido.

### 5.2 Tipos de Inspeção

**Tipo A — Inspeção Remota Guiada (PF)**
- Realizada pelo próprio vendedor via app
- 60+ fotos obrigatórias em ângulos padronizados
- 5 vídeos obrigatórios: exterior 360°, motor ligado, painel, chassi, interior
- Detecção de liveness em tempo real para anti-fraude
- Análise por IA: < 10 minutos para score preliminar
- Revisão humana: quando score < 85% ou flags de anomalia

**Tipo B — Inspeção Presencial (Lojistas e PF Premium)**
- Vistoriador certificado se desloca até o veículo
- Uso de equipamentos: espessímetro (pintura), scanner OBD-II, lanternas UV
- Laudo técnico completo em 150+ itens
- Integrado com o app para upload em tempo real

**Tipo C — Inspeção via Parceiros Credenciados**
- Rede de oficinas e centros automotivos parceiros
- Veículo levado ao parceiro credenciado
- Protocolo padronizado AutoBridge

### 5.3 Laudo Digital

O laudo é um documento digital imutável (blockchain-anchored) que contém:

- Score geral de condição (0–100)
- Scorecard por categoria: Lataria, Mecânica, Interior, Documentação, Segurança
- Mapa visual de danos identificados (overlay na silhueta do veículo)
- Fotos e vídeos com metadados (GPS, timestamp, hash anti-adulteração)
- Histórico de sinistros (quando disponível via parceiros de seguro)
- QR Code verificável publicamente

### 5.4 Arquitetura de Confiança — IA

**Modelos de ML utilizados:**
- Computer Vision (YOLOv8 + ViT): Detecção de danos, pintura refeita, peças trocadas
- NLP: Análise de consistência entre descrição e evidências visuais
- Anomaly Detection: Comparação com histórico de fraudes e padrões suspeitos
- Price Intelligence: Regressão + ensemble baseado em 20+ variáveis
- Liveness Detection: Anti-spoofing com análise de fluxo óptico

---

## 6. Arquitetura Técnica

### 6.1 Stack Recomendado

**Frontend:**
- Web: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Mobile: React Native + Expo (iOS e Android)
- Admin Panels: Next.js + shadcn/ui + Recharts/Tremor

**Backend:**
- API Principal: Node.js com NestJS (TypeScript) — arquitetura modular
- Serviços de IA/ML: Python (FastAPI) — microserviços isolados
- Inspeção em Tempo Real: WebSockets (Socket.io) + WebRTC para vídeo ao vivo
- BFF (Backend for Frontend): GraphQL via Apollo Server

**Infraestrutura:**
- Cloud: AWS (primário) com multi-region para alta disponibilidade
- Container Orchestration: Kubernetes (EKS)
- CDN: CloudFront + S3 para mídia (fotos/vídeos)
- Database: PostgreSQL (RDS) + Redis (cache) + Elasticsearch (busca)
- Object Storage: S3 com lifecycle policies para mídia de inspeção
- Message Queue: AWS SQS/SNS para processamento assíncrono

**Serviços Externos:**
- Pagamentos: Stripe + Pagar.me (escrow nativo)
- Biometria/KYC: Unico Check ou Serpro / Denatran API
- Assinatura Digital: DocuSign ou D4Sign (ICP-Brasil)
- FIPE/DETRAN: API parceiros (Pegaki, Consulta KM)
- Open Finance: Pluggy ou Belvo
- Notificações: Firebase (push) + SendGrid (email) + Twilio (SMS/WhatsApp)
- Monitoramento: Datadog + Sentry

### 6.2 Modelo de Dados (Entidades Principais)

```
User (id, type[PF|PJ|ADMIN], status, kyc_status, created_at)
  └── Vehicle (id, owner_id, plate, chassis, status, fipe_code)
        └── Inspection (id, vehicle_id, type, score, status, inspector_id)
              └── InspectionMedia (id, inspection_id, type, url, hash, metadata)
              └── InspectionItem (id, inspection_id, category, result, notes)
        └── Listing (id, vehicle_id, price, status, expires_at, views, leads)
              └── Proposal (id, listing_id, buyer_id, amount, status)
              └── Transaction (id, listing_id, amount, escrow_id, status)

Dealer (id, user_id, cnpj, plan, status, commission_rate)
  └── DealerListing (id, dealer_id, listing_id)

Inspector (id, user_id, type[AI|HUMAN|PARTNER], certifications)
```

### 6.3 Fluxo de Dados — Inspeção Remota

```
App Mobile
  → Captura mídia (liveness check nativo)
  → Upload chunked para S3 (presigned URL)
  → Emite evento via WebSocket: "media_uploaded"

Backend (NestJS)
  → Recebe evento, publica em SQS queue "inspection-analysis"

ML Service (Python/FastAPI)
  → Consome da fila
  → Executa pipeline: liveness → damage detection → fraud scoring
  → Emite resultado: inspection_score + flags
  → Publica em SNS: "inspection_completed"

Backend
  → Recebe resultado
  → Se score >= 85: aprova automaticamente → publica anúncio
  → Se score < 85: cria task para revisor humano
  → Notifica usuário via push/email/WhatsApp
```

---

## 7. Modelo de Negócio e Monetização

### 7.1 Fontes de Receita

| Fonte | Modelo | Estimativa |
|---|---|---|
| Taxa de sucesso PF | 2,9% sobre o valor da venda | Principal |
| Taxa de sucesso Lojista | 2,5–3,5% (por plano) | Principal |
| Assinatura Lojista | R$ 299–R$ 1.499/mês | Recorrente |
| Inspeção Presencial | R$ 199–R$ 399/unidade | Transacional |
| Destaque / Boost | R$ 49–R$ 199/anúncio | Adicional |
| Dados e Inteligência | API B2B para seguradoras/financeiras | Futuro |
| AutoBridge Protect | Garantia estendida pós-venda | Futuro |

### 7.2 Unit Economics (estimativa ano 1)

- Ticket médio por veículo: R$ 45.000
- Taxa média de sucesso: 2,9%
- Receita por transação: ~R$ 1.305
- Meta de transações/mês (ano 1, fim): 500
- GMV mensal: R$ 22,5M
- Receita líquida estimada: ~R$ 650K/mês

---

## 8. Diferenciais Competitivos vs Mercado

| Critério | AutoBridge | Webmotors | OLX Autos | iCarros |
|---|---|---|---|---|
| Inspeção obrigatória | ✅ Sim | ❌ Não | ❌ Não | Parcial |
| Laudo digital verificável | ✅ Sim | ❌ Não | ❌ Não | ❌ Não |
| Detecção de fraude por IA | ✅ Avançado | ❌ Não | ❌ Não | ❌ Não |
| Escrow integrado | ✅ Sim | ❌ Não | ❌ Não | ❌ Não |
| Contrato digital ICP-Brasil | ✅ Sim | ❌ Não | ❌ Não | ❌ Não |
| Preço sugerido por IA | ✅ Sim | Básico | ❌ Não | Básico |
| Asset-light (sem estoque) | ✅ Sim | ✅ Sim | ✅ Sim | ✅ Sim |
| Modelo Uber (match ativo) | ✅ Futuro | ❌ Não | ❌ Não | ❌ Não |

---

## 9. Roadmap

### Fase 1 — MVP (0–6 meses)
- [ ] Portal público com busca e listagens
- [ ] Cadastro e KYC de vendedor PF
- [ ] Fluxo de inspeção remota (app mobile guiado)
- [ ] Análise de inspeção por IA (V1 — detecção básica)
- [ ] Laudo digital simples
- [ ] Publicação de anúncio com aprovação humana
- [ ] Painel admin básico (fila de inspeção, aprovações)
- [ ] Chat entre comprador e vendedor
- [ ] Integração FIPE + DETRAN

### Fase 2 — Crescimento (6–12 meses)
- [ ] Painel lojista completo com CRM
- [ ] Planos de assinatura para lojistas
- [ ] Escrow integrado (pagamento seguro)
- [ ] Contrato digital com assinatura ICP-Brasil
- [ ] App mobile para comprador (busca + favoritos + alertas)
- [ ] Score de IA avançado (V2 — anomaly detection + liveness)
- [ ] Destaque e boost de anúncios
- [ ] Open Finance para financiamento

### Fase 3 — Expansão (12–24 meses)
- [ ] Rede de inspetores presenciais (20 cidades)
- [ ] Garantia pós-venda "AutoBridge Protect"
- [ ] API de dados para seguradoras e financeiras
- [ ] Matching ativo: comprador define perfil, IA busca veículos no mercado
- [ ] Internacionalização (América Latina)
- [ ] Blockchain-anchored laudos (imutabilidade verificável)

---

## 10. Riscos e Mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|---|---|---|---|
| Fraude sofisticada passando pela IA | Alto | Médio | Camada de revisão humana + melhoria contínua do modelo |
| Baixa adesão à inspeção remota (UX difícil) | Alto | Médio | UX testada extensamente + suporte ativo na jornada |
| Regulatório (DETRAN, LGPD, CVM) | Alto | Baixo | Equipe jurídica dedicada desde o início |
| Concorrência de incumbentes (Webmotors/OLX) | Médio | Alto | Diferenciação por confiança, não por volume |
| Escassez de inspetores humanos para revisão | Médio | Médio | Gamificação + parcerias com centros automotivos |

---

## 11. Métricas de Sucesso (KPIs Operacionais)

**Aquisição:**
- CAC (Custo de Aquisição de Cliente) por segmento
- Taxa de conversão landing → cadastro → primeira publicação

**Ativação:**
- Taxa de conclusão do fluxo de inspeção
- Tempo médio para publicação (da inspeção à listagem ativa)

**Retenção:**
- Taxa de retorno (vendedor que usa novamente)
- Churn de lojistas por plano

**Receita:**
- GMV mensal
- Receita por usuário (ARPU)
- Taxa de take rate efetiva

**Qualidade:**
- Taxa de disputas pós-venda
- Score médio de satisfação (NPS)
- Falsos positivos/negativos do modelo de IA

---

## 12. Considerações de Segurança e Conformidade

- **LGPD**: Dados pessoais e biométricos tratados com consentimento explícito, minimização de dados, direito ao esquecimento
- **PCI-DSS**: Dados de pagamento nunca trafegam pelos servidores próprios (tokenização via gateway)
- **KYC/AML**: Verificação de identidade para todos os usuários vendedores + monitoramento de transações suspeitas
- **Anti-fraude veicular**: Consulta obrigatória a bases de veículos roubados (SENATRAN), recall ativo, gravame
- **Segurança da mídia de inspeção**: Hash SHA-256 de cada arquivo, armazenamento imutável com versionamento S3, auditoria de acesso

---

*Documento gerado para fins de planejamento estratégico e técnico. Versão 1.0 — Sujeito a revisão.*
