import Link from 'next/link';
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

export function ListingCard({ listing }: ListingCardProps) {
  const vehicle = listing.vehicle as Record<string, unknown>;
  const inspections = (vehicle?.inspections as Array<{ score: number }> | undefined) ?? [];
  const latestScore = inspections[0]?.score;
  const badge = getInspectionBadge(latestScore);
  const imgSeed = listing.id as string;

  return (
    <Link href={`/veiculo/${listing.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">

        {/* Imagem */}
        <div className="relative h-52 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${imgSeed}/640/360`}
            alt={`${vehicle?.brand as string} ${vehicle?.model as string}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Badge verificação */}
          {badge && (
            <div className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm ${badge.class}`}>
              ✦ {badge.label}
            </div>
          )}

          {/* Score */}
          {latestScore && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
              <Shield className="h-3 w-3 text-emerald-400" />
              {latestScore}/100
            </div>
          )}

          {/* Salvar */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute bottom-3 right-3 rounded-full bg-white/20 p-1.5 text-white backdrop-blur-sm transition hover:bg-white/40"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 transition-colors group-hover:text-brand-gold">
            {vehicle?.brand as string} {vehicle?.model as string}
          </h3>
          <p className="mt-0.5 text-xs text-gray-400">
            {vehicle?.color as string} &bull; {vehicle?.fuelType as string}
          </p>

          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-gray-300" />
              {vehicle?.year as number}
            </span>
            <span className="flex items-center gap-1">
              <Gauge className="h-3.5 w-3.5 text-gray-300" />
              {((vehicle?.mileage as number) ?? 0).toLocaleString('pt-BR')} km
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Preço</p>
              <span className="text-xl font-extrabold text-gray-900">
                R$&nbsp;{(listing.price as number).toLocaleString('pt-BR')}
              </span>
            </div>
            {listing.acceptsFinancing && (
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-brand-gold ring-1 ring-blue-100">
                Financia
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
