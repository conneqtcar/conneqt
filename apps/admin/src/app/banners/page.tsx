'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Trash2, GripVertical, Eye, EyeOff, Loader2, ImagePlay } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface Banner {
  id: string;
  title: string | null;
  imageUrl: string;
  order: number;
  active: boolean;
  createdAt: string;
}

const schema = z.object({
  imageUrl: z.string().url('Informe uma URL de imagem válida'),
  title: z.string().optional(),
  order: z.coerce.number().int().min(0).default(0),
  active: z.boolean().default(true),
});
type FormValues = z.infer<typeof schema>;

export default function BannersPage() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { data: banners = [], isLoading } = useQuery<Banner[]>({
    queryKey: ['banners-admin'],
    queryFn: () => api.get('/banners/admin').then((r) => r.data),
  });

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { active: true, order: 0 },
  });

  const createMutation = useMutation({
    mutationFn: (data: FormValues) => api.post('/banners', data).then((r) => r.data),
    onSuccess: () => {
      toast.success('Banner criado!');
      qc.invalidateQueries({ queryKey: ['banners-admin'] });
      reset();
      setShowForm(false);
    },
    onError: () => toast.error('Erro ao criar banner'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<FormValues> }) =>
      api.patch(`/banners/${id}`, data).then((r) => r.data),
    onSuccess: () => {
      toast.success('Atualizado!');
      qc.invalidateQueries({ queryKey: ['banners-admin'] });
      setEditingId(null);
      reset();
      setShowForm(false);
    },
    onError: () => toast.error('Erro ao atualizar'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/banners/${id}`),
    onSuccess: () => {
      toast.success('Banner removido');
      qc.invalidateQueries({ queryKey: ['banners-admin'] });
    },
    onError: () => toast.error('Erro ao remover'),
  });

  const toggleActive = (banner: Banner) =>
    updateMutation.mutate({ id: banner.id, data: { active: !banner.active } });

  function openEdit(banner: Banner) {
    setEditingId(banner.id);
    setValue('imageUrl', banner.imageUrl);
    setValue('title', banner.title ?? '');
    setValue('order', banner.order);
    setValue('active', banner.active);
    setShowForm(true);
  }

  function onSubmit(values: FormValues) {
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: values });
    } else {
      createMutation.mutate(values);
    }
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
    reset();
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banners do Hero</h1>
          <p className="mt-1 text-sm text-gray-500">
            Imagens de fundo que rodam no slideshow da página inicial.
          </p>
        </div>
        {!showForm && (
          <button
            onClick={() => { setEditingId(null); reset(); setShowForm(true); }}
            className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110"
          >
            <Plus className="h-4 w-4" /> Novo Banner
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <h2 className="font-semibold text-gray-800">{editingId ? 'Editar banner' : 'Novo banner'}</h2>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">URL da imagem *</label>
            <input
              {...register('imageUrl')}
              placeholder="https://images.unsplash.com/..."
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
            {errors.imageUrl && <p className="text-xs text-red-500">{errors.imageUrl.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Título (opcional)</label>
            <input
              {...register('title')}
              placeholder="Ex: Carro esportivo ao entardecer"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
          </div>

          <div className="flex gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Ordem</label>
              <input
                {...register('order')}
                type="number"
                min={0}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
            </div>
            <div className="flex items-end gap-2 pb-1">
              <input
                {...register('active')}
                type="checkbox"
                id="active"
                className="h-4 w-4 rounded border-gray-300 accent-brand-gold"
              />
              <label htmlFor="active" className="text-sm font-medium text-gray-700">Ativo</label>
            </div>
          </div>

          {/* Preview */}
          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting || createMutation.isPending || updateMutation.isPending}
              className="flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-60"
            >
              {(isSubmitting || createMutation.isPending || updateMutation.isPending) && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {editingId ? 'Salvar alterações' : 'Criar banner'}
            </button>
            <button
              type="button"
              onClick={cancelForm}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Lista */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-7 w-7 animate-spin text-brand-gold" />
        </div>
      ) : banners.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-16 text-center">
          <ImagePlay className="mb-3 h-10 w-10 text-gray-300" />
          <p className="font-medium text-gray-500">Nenhum banner cadastrado</p>
          <p className="mt-1 text-sm text-gray-400">Clique em "Novo Banner" para adicionar.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <GripVertical className="h-5 w-5 flex-shrink-0 text-gray-300" />

              {/* Thumbnail */}
              <div className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.imageUrl}
                  alt={banner.title ?? ''}
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/112x64?text=?'; }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-gray-800">{banner.title || <span className="text-gray-400 italic">Sem título</span>}</p>
                <p className="mt-0.5 truncate text-xs text-gray-400">{banner.imageUrl}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-gray-400">Ordem: {banner.order}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${banner.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {banner.active ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(banner)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                  title={banner.active ? 'Desativar' : 'Ativar'}
                >
                  {banner.active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => openEdit(banner)}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    if (confirm('Remover este banner?')) deleteMutation.mutate(banner.id);
                  }}
                  className="rounded-lg p-2 text-red-400 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
