import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ListingDetail } from '@/components/listings/listing-detail';
import { apiServer } from '@/lib/api-server';

interface ListingPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const listing = await apiServer.listings.findById(id);
    return {
      title: `${listing.vehicle.brand} ${listing.vehicle.model} ${listing.vehicle.year} — R$ ${listing.price.toLocaleString('pt-BR')}`,
      description: listing.description ?? `Compre com segurança: ${listing.vehicle.brand} ${listing.vehicle.model} verificado pela Conneqt.`,
    };
  } catch {
    return { title: 'Anúncio não encontrado' };
  }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { id } = await params;

  try {
    const listing = await apiServer.listings.findById(id);
    return <ListingDetail listing={listing} />;
  } catch {
    notFound();
  }
}
