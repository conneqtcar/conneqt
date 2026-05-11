'use client';

import { useState, useRef, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Plus, Trash2, Eye, EyeOff, Loader2, ImagePlay, UploadCloud, X, Info,
} from 'lucide-react';
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
  title: z.string().optional(),
  order: z.coerce.number().int().min(0).default(0),
  active: z.boolean().default(true),
});
type FormValues = z.infer<typeof schema>;

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 10;

export default function BannersPage() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: banners = [], isLoading } = useQuery<Banner[]>({
    queryKey: ['banners-admin'],
    queryFn: () => api.get('/banners/admin').then((r) => r.data),
  });

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { active: true, order: 0 },
    });

  // ── Upload helpers ────────────────────────────────────────────────────────

  function handleFileSelect(file: File) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Formato inválido. Use JPG, PNG ou WebP.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      toast.error(`Arquivo muito grande. Máximo ${MAX_SIZE_MB} MB.`);
      return;
    }
    setSelectedFile(file);
    setUploadedImageUrl(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreviewUrl(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function onFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  }

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clearFile() {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadedImageUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function uploadFile(): Promise<string> {
    if (!selectedFile) throw new Error('Nenhum arquivo selecionado');
    const form = new FormData();
    form.append('file', selectedFile);
    const { data } = await api.post<{ url: string }>('/banners/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.url;
  }

  // ── Mutations ────────────────────────────────────────────────────────────

  const createMutation = useMutation({
    mutationFn: (data: FormValues & { imageUrl: string }) =>
      api.post('/banners', data).then((r) => r.data),
    onSuccess: () => {
      toast.success('Banner criado!');
      qc.invalidateQueries({ queryKey: ['banners-admin'] });
      cancelForm();
    },
    onError: () => toast.error('Erro ao criar banner'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<FormValues & { imageUrl: string }> }) =>
      api.patch(`/banners/${id}`, data).then((r) => r.data),
    onSuccess: () => {
      toast.success('Atualizado!');
      qc.invalidateQueries({ queryKey: ['banners-admin'] });
      cancelForm();
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
    setValue('title', banner.title ?? '');
    setValue('order', banner.order);
    setValue('active', banner.active);
    setUploadedImageUrl(banner.imageUrl);
    setPreviewUrl(banner.imageUrl);
    setSelectedFile(null);
    setShowForm(true);
  }

  async function onSubmit(values: FormValues) {
    let imageUrl = uploadedImageUrl;

    if (selectedFile) {
      setUploading(true);
      try {
        imageUrl = await uploadFile();
        setUploadedImageUrl(imageUrl);
      } catch {
        toast.error('Erro no upload. Verifique as configurações de armazenamento.');
        setUploading(false);
        return;
      } finally {
        setUploading(false);
      }
    }

    if (!imageUrl) {
      toast.error('Selecione uma imagem para o banner.');
      return;
    }

    if (editingId) {
      updateMutation.mutate({ id: editingId, data: { ...values, imageUrl } });
    } else {
      createMutation.mutate({ ...values, imageUrl });
    }
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
    reset();
    clearFile();
  }

  const isBusy = uploading || isSubmitting || createMutation.isPending || updateMutation.isPending;

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
            onClick={() => { setEditingId(null); reset(); clearFile(); setShowForm(true); }}
            className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110"
          >
            <Plus className="h-4 w-4" /> Novo Banner
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5"
        >
          <h2 className="font-semibold text-gray-800">
            {editingId ? 'Editar banner' : 'Novo banner'}
          </h2>

          {/* Drop zone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Imagem do banner *</label>

            {previewUrl ? (
              <div className="relative w-full overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '16/5' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={clearFile}
                  className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80"
                >
                  <X className="h-4 w-4" />
                </button>
                {selectedFile && (
                  <span className="absolute bottom-2 left-2 rounded-lg bg-black/60 px-2 py-1 text-xs text-white">
                    {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                )}
              </div>
            ) : (
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed py-12 transition-colors ${
                  isDragging
                    ? 'border-brand-gold bg-amber-50'
                    : 'border-gray-200 bg-gray-50 hover:border-brand-gold hover:bg-amber-50/40'
                }`}
              >
                <UploadCloud className={`h-10 w-10 ${isDragging ? 'text-brand-gold' : 'text-gray-300'}`} />
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">
                    Arraste uma imagem ou{' '}
                    <span className="text-brand-gold underline">clique para selecionar</span>
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">JPG, PNG ou WebP · máx. {MAX_SIZE_MB} MB</p>
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={onFileInputChange}
            />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Título (opcional)</label>
            <input
              {...register('title')}
              placeholder="Ex: Carro esportivo ao entardecer"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
          </div>

          {/* Order + Active */}
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Ordem de exibição</label>
              <input
                {...register('order')}
                type="number"
                min={0}
                className="w-28 rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
              {errors.order && <p className="text-xs text-red-500">{errors.order.message}</p>}
            </div>
            <div className="flex items-center gap-2 pb-2.5">
              <input
                {...register('active')}
                type="checkbox"
                id="active"
                className="h-4 w-4 rounded border-gray-300 accent-brand-gold"
              />
              <label htmlFor="active" className="text-sm font-medium text-gray-700">
                Ativo (visível no site)
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isBusy}
              className="flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-60"
            >
              {isBusy && <Loader2 className="h-4 w-4 animate-spin" />}
              {uploading ? 'Enviando imagem…' : editingId ? 'Salvar alterações' : 'Criar banner'}
            </button>
            <button
              type="button"
              onClick={cancelForm}
              disabled={isBusy}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-60"
            >
              Cancelar
            </button>
          </div>

          {/* Recommended size footer */}
          <div className="flex items-start gap-2 rounded-xl bg-blue-50 px-4 py-3 text-xs text-blue-700">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <div>
              <span className="font-semibold">Tamanho recomendado:</span>{' '}
              <span className="font-bold">1920 × 600 px</span> (proporção 16:5) •{' '}
              Formato <span className="font-semibold">JPG ou WebP</span> •{' '}
              Resolução <span className="font-semibold">mínima de 1280 × 400 px</span>.{' '}
              Imagens abaixo dessa resolução podem ficar com qualidade ruim no slideshow.
            </div>
          </div>
        </form>
      )}

      {/* Banner list */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-7 w-7 animate-spin text-brand-gold" />
        </div>
      ) : banners.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-16 text-center">
          <ImagePlay className="mb-3 h-10 w-10 text-gray-300" />
          <p className="font-medium text-gray-500">Nenhum banner cadastrado</p>
          <p className="mt-1 text-sm text-gray-400">Clique em &quot;Novo Banner&quot; para adicionar.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              {/* Thumbnail */}
              <div className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.imageUrl}
                  alt={banner.title ?? ''}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/112x64?text=?';
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-gray-800">
                  {banner.title || <span className="italic text-gray-400">Sem título</span>}
                </p>
                <p className="mt-0.5 truncate text-xs text-gray-400">{banner.imageUrl}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-gray-400">Ordem: {banner.order}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      banner.active
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
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
