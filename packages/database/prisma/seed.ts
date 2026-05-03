import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Admin
  const adminPassword = await bcrypt.hash('Admin@2026!', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@conneqtcar.com.br' },
    update: {},
    create: {
      email: 'admin@conneqtcar.com.br',
      passwordHash: adminPassword,
      name: 'Admin Conneqt',
      type: 'ADMIN',
      kycStatus: 'APPROVED',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Admin criado: ${admin.email}`);

  // Vendedor PF (Carlos)
  const carlosPassword = await bcrypt.hash('Senha@2026', 12);
  const carlos = await prisma.user.upsert({
    where: { email: 'carlos@exemplo.com.br' },
    update: {},
    create: {
      email: 'carlos@exemplo.com.br',
      passwordHash: carlosPassword,
      name: 'Carlos Souza',
      phone: '+5511999998888',
      type: 'PF',
      kycStatus: 'APPROVED',
      status: 'ACTIVE',
      cpf: '123.456.789-00',
    },
  });
  console.log(`✅ Vendedor PF criado: ${carlos.email}`);

  // Compradora (Amanda)
  const amandaPassword = await bcrypt.hash('Senha@2026', 12);
  const amanda = await prisma.user.upsert({
    where: { email: 'amanda@exemplo.com.br' },
    update: {},
    create: {
      email: 'amanda@exemplo.com.br',
      passwordHash: amandaPassword,
      name: 'Amanda Lima',
      phone: '+5511988887777',
      type: 'PF',
      kycStatus: 'APPROVED',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Compradora criada: ${amanda.email}`);

  // Lojista (Rogério)
  const rogerioPassword = await bcrypt.hash('Senha@2026', 12);
  const rogerio = await prisma.user.upsert({
    where: { email: 'rogerio@autocenter.com.br' },
    update: {},
    create: {
      email: 'rogerio@autocenter.com.br',
      passwordHash: rogerioPassword,
      name: 'Rogério Mendes',
      phone: '+5511977776666',
      type: 'PJ',
      kycStatus: 'APPROVED',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Lojista criado: ${rogerio.email}`);

  // Dealer para Rogério
  const dealer = await prisma.dealer.upsert({
    where: { userId: rogerio.id },
    update: {},
    create: {
      userId: rogerio.id,
      companyName: 'Auto Center Rogério',
      cnpj: '12.345.678/0001-90',
      plan: 'PRO',
      status: 'ACTIVE',
      commissionRate: 0.03,
    },
  });
  console.log(`✅ Dealer criado: ${dealer.companyName}`);

  // Veículo de Carlos
  const vehicle = await prisma.vehicle.create({
    data: {
      ownerId: carlos.id,
      plate: 'ABC1D23',
      brand: 'Toyota',
      model: 'Corolla 2.0 Altis',
      year: 2021,
      color: 'Branco',
      mileage: 45000,
      fuelType: 'FLEX',
      transmission: 'AUTOMATIC',
      fipeCode: '001004-9',
      fipePrice: 118000,
      status: 'LISTED',
    },
  });
  console.log(`✅ Veículo criado: ${vehicle.brand} ${vehicle.model}`);

  // Inspeção aprovada para o veículo
  const inspection = await prisma.inspection.create({
    data: {
      vehicleId: vehicle.id,
      type: 'REMOTE',
      status: 'APPROVED',
      score: 92,
      reviewerId: admin.id,
      reviewedAt: new Date(),
      reviewNotes: 'Veículo em excelente estado. Aprovado automaticamente pela IA.',
    },
  });
  console.log(`✅ Inspeção criada com score ${inspection.score}`);

  // Anúncio ativo
  const listing = await prisma.listing.create({
    data: {
      vehicleId: vehicle.id,
      sellerId: carlos.id,
      price: 115000,
      description: 'Toyota Corolla 2021 em excelente estado. Único dono, IPVA pago, revisões em dia.',
      acceptsFinancing: true,
      acceptsTrade: false,
      status: 'ACTIVE',
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    },
  });
  console.log(`✅ Anúncio criado: R$ ${listing.price.toLocaleString('pt-BR')}`);

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('\n📋 Credenciais de acesso:');
  console.log('  Admin:      admin@conneqtcar.com.br   | Admin@2026!');
  console.log('  Vendedor:   carlos@exemplo.com.br      | Senha@2026');
  console.log('  Comprador:  amanda@exemplo.com.br      | Senha@2026');
  console.log('  Lojista:    rogerio@autocenter.com.br  | Senha@2026');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
