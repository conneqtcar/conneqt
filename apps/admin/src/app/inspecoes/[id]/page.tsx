'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ArrowLeft,
  Loader2,
  CheckCircle,
  XCircle,
  Image as ImageIcon,
  FileText,
  Video,
  Car,
  User,
  Gauge,
  Calendar,
  AlertTriangle,
  Shield,
  ShieldCheck,
  ShieldX,
} from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface InspectionMedia {
  id: string;
  type: string;
  url: string;
  createdAt: string;
}

interface InspectionItem {
  id: string;
  category: string;
  item: string;
  result: 'OK' | 'NOK' | 'NA';
  notes: string | null;
}

interface InspectionDetail {
  id: string;
  type: string;
  status: string;
  score: number | null;
  aiFlags: string[];
  reviewNotes: string | null;
  createdAt: string;
  vehicle: {
    plate: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    owner: { name: string; email: string };
  };
  media: InspectionMedia[];
  items: InspectionItem[];
}

const statusConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  PENDING: { label: 'Pendente', bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' },
  IN_PROGRESS: { label: 'Em andamento', bg: 'bg-amber-50', text: 'text-brand-gold', dot: 'bg-brand-gold' },
  AWAITING_REVIEW: { label: 'Aguardando revisao', bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  APPROVED: { label: 'Aprovada', bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  REJECTED: { label: 'Rejeitada', bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const mediaIconFn = (type: string) => {
  if (type === 'VIDEO') return <Video className="h-5 w-5 text-gray-400" />;
  if (type === 'DOCUMENT') return <FileText className="h-5 w-5 text-gray-400" />;
  return <ImageIcon className="h-5 w-5 text-gray-400" />;
};

function ScoreRing({ score }: { score: number | null }) {
  if (score === null) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-gray-100 bg-gray-50">
          <Loader2 className="h-8 w-8 text-gray-300" />
        </div>
        <p className="text-xs text-gray-400">Processando...</p>
      </div>
    );
  }
  const color = score >= 85 ? 'text-emerald-600' : score >= 60 ? 'text-amber-500' : 'text-red-500';
  const borderColor = score >= 85 ? 'border-emerald-200' : score >= 60 ? 'border-amber-200' : 'border-red-200';
  const bg = score >= 85 ? 'bg-emerald-50' : score >= 60 ? 'bg-amber-50' : 'bg-red-50';
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 ${borderColor} ${bg}`}>
        <span className={`text-3xl font-extrabold leading-none ${color}`}>{score}</span>
        <span className="text-[10px] font-medium text-gray-400">/ 100</span>
      </div>
      <p className="text-xs font-medium text-gray-500">Score IA</p>
    </div>
  );
}

export default function InspectionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();
  const [notes, setNotes] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const { data, isLoading } = useQuery<InspectionDetail>({
    queryKey: ['inspection', id],
    queryFn: async () => {
      const { data } = await api.get(`/inspections/${id}`);
      return data;
    },
  });

  const reviewMutation = useMutation({
    mutationFn: (decision: 'APPROVED' | 'REJECTED') =>
      api.patch(`/inspections/${id}/review`, { approved: decision === 'APPROVED', notes }),
    onSuccess: (_, decision) => {
      toast.success(decision === 'APPROVED' ? 'Inspecao aprovada!' : 'Inspecao rejeitada.');
      qc.invalidateQueries({ queryKey: ['inspection', id] });
      qc.invalidateQueries({ queryKey: ['inspection-queue'] });
      qc.invalidateQueries({ queryKey: ['admin-inspections-all'] });
      qc.invalidateQueries({ queryKey: ['admin-dashboard'] });
    },
    onError: () => toast.error('Erro ao processar revisao.'),
  });

  if (isLoading || !data) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
    );
  }

  const s = statusConfig[data.status] ?? statusConfig.PENDING;
  const canReview = data.status === 'AWAITING_REVIEW';
  const photos = data.media.filter((m) => m.type === 'PHOTO');
  const selectedMedia = data.media.find((m) => m.id === selected) ?? photos[0];
  const passedItems = data.items.filter((i) => i.result === 'OK').length;
  const failedItems = data.items.filter((i) => i.result === 'NOK').length;

  return (
    <div className="min-h-full bg-gray-50/50">
      <div className="border-b border-gray-100 bg-white px-8 py-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
          <div className="h-5 w-px bg-gray-200" />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-gray-900">
                {data.vehicle.brand} {data.vehicle.model} {data.vehicle.year}
              </h1>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${s.bg} ${s.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {s.label}
              </span>
              <span className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${data.type === 'REMOTE' ? 'bg-amber-50 text-brand-gold' : 'bg-violet-50 text-violet-600'}`}>
                {data.type === 'REMOTE' ? 'Remota' : 'Presencial'}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-gray-400">
              Placa <span className="font-mono font-medium text-gray-600">{data.vehicle.plate}</span>
              {' '}&middot;{' '}{data.vehicle.owner.name}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-sm font-semibold text-gray-900">Galeria de midias</h2>
                <p className="text-xs text-gray-400">{data.media.length} arquivo(s) enviado(s)</p>
              </div>
              <div className="p-5">
                <div className="overflow-hidden rounded-xl bg-gray-100 aspect-video flex items-center justify-center">
                  {selectedMedia ? (
                    selectedMedia.type === 'VIDEO' ? (
                      <video src={selectedMedia.url} controls className="h-full w-full object-contain" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={selectedMedia.url} alt="" className="h-full w-full object-cover" />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-gray-300">
                      <ImageIcon className="h-14 w-14" />
                      <span className="text-sm">Sem midias enviadas</span>
                    </div>
                  )}
                </div>
                {data.media.length > 0 && (
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {data.media.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelected(m.id)}
                        className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition ${
                          (selected ?? photos[0]?.id) === m.id
                            ? 'border-brand-gold ring-2 ring-amber-200'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        {m.type === 'PHOTO' ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={m.url} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-100">
                            {mediaIconFn(m.type)}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {data.items.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">Itens avaliados</h2>
                    <p className="text-xs text-gray-400">{data.items.length} categorias inspecionadas</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {passedItems > 0 && (
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {passedItems} ok
                      </span>
                    )}
                    {failedItems > 0 && (
                      <span className="flex items-center gap-1 text-xs font-medium text-red-500">
                        <ShieldX className="h-3.5 w-3.5" />
                        {failedItems} falhas
                      </span>
                    )}
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {data.items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 px-6 py-3.5 hover:bg-gray-50/60">
                      <div className="mt-0.5 flex-shrink-0">
                        {item.result === 'OK' && <CheckCircle className="h-4 w-4 text-emerald-500" />}
                        {item.result === 'NOK' && <XCircle className="h-4 w-4 text-red-500" />}
                        {item.result === 'NA' && <Shield className="h-4 w-4 text-gray-300" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">{item.category}</p>
                        {item.item && <p className="text-xs text-gray-400">{item.item}</p>}
                        {item.notes && (
                          <p className="mt-1 rounded-md bg-amber-50 px-2.5 py-1 text-xs text-amber-700">
                            {item.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-sm font-semibold text-gray-900">Analise por IA</h2>
              </div>
              <div className="flex flex-col items-center gap-4 p-6">
                <ScoreRing score={data.score} />
                {data.aiFlags && data.aiFlags.length > 0 && (
                  <div className="w-full">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Alertas detectados</p>
                    <div className="space-y-1.5">
                      {data.aiFlags.map((flag) => (
                        <div key={flag} className="flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2">
                          <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                          <span className="text-xs font-medium text-amber-700">{flag.replace(/_/g, ' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {(!data.aiFlags || data.aiFlags.length === 0) && data.score !== null && (
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 w-full">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-emerald-700">Nenhum alerta detectado</span>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-sm font-semibold text-gray-900">Dados do veiculo</h2>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <Car className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400">Modelo</p>
                    <p className="text-sm font-semibold text-gray-800">{data.vehicle.brand} {data.vehicle.model} {data.vehicle.year}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <p className="text-[10px] text-gray-400">Cor</p>
                    <p className="text-sm font-semibold text-gray-800">{data.vehicle.color}</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <p className="text-[10px] text-gray-400">Placa</p>
                    <p className="font-mono text-sm font-semibold text-gray-800">{data.vehicle.plate}</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <p className="text-[10px] text-gray-400">Quilometragem</p>
                    <p className="text-sm font-semibold text-gray-800">
                      <Gauge className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-gray-400" />
                      {data.vehicle.mileage.toLocaleString('pt-BR')} km
                    </p>
                  </div>
                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <p className="text-[10px] text-gray-400">Midias</p>
                    <p className="text-sm font-semibold text-gray-800">{data.media.length} arquivos</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <User className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400">Vendedor</p>
                    <p className="text-sm font-semibold text-gray-800">{data.vehicle.owner.name}</p>
                    <p className="truncate text-xs text-gray-400">{data.vehicle.owner.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <Calendar className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400">Data da inspecao</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {new Date(data.createdAt).toLocaleDateString('pt-BR', {
                        day: '2-digit', month: 'long', year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {canReview && (
              <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                <div className="border-b border-blue-100 bg-amber-50/60 px-6 py-4">
                  <h2 className="text-sm font-semibold text-gray-900">Decisao do revisor</h2>
                  <p className="text-xs text-gray-400">Esta acao e irreversivel</p>
                </div>
                <div className="p-5">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Observacoes sobre a decisao (opcional)..."
                    rows={3}
                    className="w-full resize-none rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => reviewMutation.mutate('APPROVED')}
                      disabled={reviewMutation.isPending}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
                    >
                      {reviewMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <CheckCircle className="h-4 w-4" />
                      )}
                      Aprovar
                    </button>
                    <button
                      onClick={() => reviewMutation.mutate('REJECTED')}
                      disabled={reviewMutation.isPending}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:opacity-50"
                    >
                      <XCircle className="h-4 w-4" />
                      Rejeitar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {data.reviewNotes && (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Notas da revisao</p>
                <p className="mt-2 text-sm text-gray-700">{data.reviewNotes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
