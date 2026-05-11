import Link from 'next/link';
import Image from 'next/image';
import { Shield, Gauge, Calendar, Heart } from 'lucide-react';

interface ListingCardProps {
  listing: Record<string, unknown>;
}

function getInspectionBadge(score: number | undefined) {
  if (!score) return null;
  if (score >= 90) return { label: 'Ouro', class: 'bg-yellow-400/90 text-yellow-900' };
  if (score >= 75) return { label: 'Prata', class: 'bg-gray-200/90 text-gray-800' };
  return { label: 'Bronze', class: 'bg-amber-400/90 text-amber-900' };
}

// Extrai a primeira foto da inspeção; cai para placeholder se não houver
function getPhotoUrl(vehicle: Record<string, unknown>, listingId: string): string {
  const inspections = vehicle?.inspections as Array<{ media?: Array<{ type: string; url: string }> }> | undefined;
  const media = inspections?.[0]?.media;
  const photo = media?.find((m) => m.type === 'PHOTO');
  if (photo?.url) return photo.url;
  // Placeholder genérico de carro (não depende de serviço externo)
  return `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=640&q=60&seed=${listingId}`;
}

export function ListingCard({ listing }: ListingCardProps) {
  const vehicle = listing.vehicle as Record<string, unknown>;
  const inspections = (vehicle?.inspections as Array<{ score: number }> | undefined) ?? [];
  const latestScore = inspections[0]?.score;
  const badge = getInspectionBadge(latestScore);
  const photoUrl = getPhotoUrl(vehicle, listing.id as string);

  return (
    <Link href={`/veiculo/${listing.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:border-gray-200">

        {/* Foto em destaque */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={photoUrl}
            alt={`${vehicle?.brand as string} ${vehicle?.model as string}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            unoptimized={photoUrl.includes('unsplash.com')}
          />
          {/* Gradiente base */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Badge verificação */}
          {badge && (
            <div className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold backdrop-blur-sm ${badge.class}`}>
              ✦ {badge.label}
            </div>
          )}

          {/* Score + favoritar */}
          <div className="absolute right-2 top-2 flex items-center gap-1.5">
            {latestScore && (
              <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                <Shield className="h-2.5 w-2.5 text-emerald-400" />
                {latestScore}
              </span>
            )}
            <button
              onClick={(e) => e.preventDefault()}
              className="rounded-full bg-white/20 p-1 text-white backdrop-blur-sm transition hover:bg-white/40"
            >
              <Heart className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Preço sobre a foto */}
          <div className="absolute bottom-2 left-2">
            <span className="text-base font-extrabold text-white drop-shadow">
              R$&nbsp;{(listing.price as number).toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        {/* Info compacta */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-gray-900 transition-colors group-hover:text-brand-gold">
              {vehicle?.brand as string} {vehicle?.model as string}
            </h3>
            <div className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-400">
              <span className="flex items-center gap-0.5">
                <Calendar className="h-3 w-3" />
                {vehicle?.year as number}
              </span>
              <span className="flex items-center gap-0.5">
                <Gauge className="h-3 w-3" />
                {((vehicle?.mileage as number) ?? 0).toLocaleString('pt-BR')} km
              </span>
            </div>
          </div>
          {listing.acceptsFinancing && (
            <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-brand-gold ring-1 ring-amber-100">
              Financia
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}