import { cache } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ListingDetail } from '@/components/listings/listing-detail';
import { apiServer } from '@/lib/api-server';
import { MOCK_LISTINGS } from '@/lib/demo-mock';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

interface ListingPageProps {
  params: Promise<{ id: string }>;
}

function getMockListing(id: string) {
  return MOCK_LISTINGS.find((l) => l.id === id) ?? MOCK_LISTINGS[0];
}

// React cache() deduplica chamadas com mesmo id dentro do mesmo request —
// generateMetadata e a página não fazem duas viagens à API
const getListing = cache((id: string) => apiServer.listings.findById(id));

export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const listing = IS_DEMO ? getMockListing(id) : await getListing(id);
    const v = listing.vehicle as Record<string, unknown>;
    return {
      title: `${v.brand} ${v.model} ${v.year} — R$ ${(listing.price as number).toLocaleString('pt-BR')}`,
      description: (listing.description as string) ?? `Compre com segurança: ${v.brand} ${v.model} verificado pela Conneqt.`,
    };
  } catch {
    return { title: 'Anúncio não encontrado' };
  }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { id } = await params;

  if (IS_DEMO) {
    const listing = getMockListing(id);
    return <ListingDetail listing={listing} />;
  }

  try {
    const listing = await getListing(id);
    return <ListingDetail listing={listing} />;
  } catch {
    notFound();
  }
}
