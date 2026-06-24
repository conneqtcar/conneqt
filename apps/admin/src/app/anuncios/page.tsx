'use client';

import { useState, useRef, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Loader2, Plus, X, Car, XCircle, Upload, Play, Star, ChevronRight, Pencil, Trash2,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface Listing {
  id: string;
  status: string;
  price: number;
  createdAt: string;
  vehicle: {
    brand: string;
    model: string;
    year: number;
    plate: string;
    inspections?: Array<{ media: Array<{ url: string; type: string }> }>;
  };
  seller: { name: string; email: string };
}

const statusLabels: Record<string, { label: string; cls: string }> = {
  ACTIVE: { label: 'Ativo', cls: 'bg-green-100 text-green-700' },
  SOLD: { label: 'Vendido', cls: 'bg-amber-100 text-brand-gold' },
  EXPIRED: { label: 'Expirado', cls: 'bg-gray-100 text-gray-600' },
  INACTIVE: { label: 'Inativo', cls: 'bg-red-100 text-red-700' },
};

// ─── Form schema ───────────────────────────────────────────────────────────────
const schema = z.object({
  brand: z.string().min(1, 'Obrigatório'),
  model: z.string().min(1, 'Obrigatório'),
  year: z.coerce
    .number()
    .int()
    .min(1950, 'Ano inválido')
    .max(new Date().getFullYear() + 1, 'Ano inválido'),
  color: z.string().min(1, 'Obrigatório'),
  mileage: z.coerce.number().int().min(0, 'Inválido'),
  fuelType: z.enum(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'], { message: 'Obrigatório' }),
  transmission: z.enum(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'], { message: 'Obrigatório' }),
  bodyType: z.string().optional(),
  doors: z.coerce.number().int().optional(),
  plate: z.string().optional(),
  chassis: z.string().optional(),
  renavam: z.string().optional(),
  price: z.coerce.number().min(1, 'Preço obrigatório'),
  description: z.string().optional(),
  acceptsFinancing: z.boolean().default(false),
  acceptsTrade: z.boolean().default(false),
  sellerEmail: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface MediaFile { file: File; preview: string; isVideo: boolean }

const STEP1_FIELDS: (keyof FormData)[] = ['brand', 'model', 'year', 'color', 'mileage', 'fuelType', 'transmission'];
const STEP2_FIELDS: (keyof FormData)[] = ['price'];

// ─── Modal ─────────────────────────────────────────────────────────────────────
function CriarAnuncioModal({ onClose }: { onClose: () => void }) {
  const queryClient = useQueryClient();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: { acceptsFinancing: false, acceptsTrade: false },
    });

  const acceptsFinancing = watch('acceptsFinancing');
  const acceptsTrade = watch('acceptsTrade');

  const [isUploading, setIsUploading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      // Upload photos to Supabase Storage first
      let photoUrls: string[] = [];
      if (media.length > 0) {
        setIsUploading(true);
        try {
          photoUrls = await Promise.all(
            media.slice(0, 20).map(async (m) => {
              const form = new FormData();
              form.append('file', m.file);
              const { data: res } = await api.post('/admin/upload-photo', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
              });
              return res.url as string;
            }),
          );
        } finally {
          setIsUploading(false);
        }
      }
      return api.post('/admin/listings', { ...data, photoUrls });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-listings'] });
      toast.success('Anúncio publicado com sucesso!');
      onClose();
    },
    onError: (err: unknown) => {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        'Erro ao publicar anúncio.';
      toast.error(msg);
    },
  });

  const addFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const allowed = Array.from(files).filter(
        (f) => f.type.startsWith('image/') || f.type.startsWith('video/'),
      );
      const toAdd = allowed.slice(0, 20 - media.length).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        isVideo: file.type.startsWith('video/'),
      }));
      setMedia((prev) => [...prev, ...toAdd]);
    },
    [media.length],
  );

  const removeFile = (idx: number) => {
    setMedia((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const goNext = async () => {
    const ok = await trigger(step === 1 ? STEP1_FIELDS : STEP2_FIELDS);
    if (ok) setStep((s) => (s + 1) as 1 | 2 | 3);
  };

  const fi = 'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20';
  const la = 'block text-sm font-medium text-gray-700';
  const er = 'mt-1 text-xs text-red-600';
  const titles = ['Dados do veículo', 'Dados do anúncio', 'Fotos e mídias'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 pt-8 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10">
              <Car className="h-4 w-4 text-brand-gold" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Novo anúncio</h2>
              <p className="text-xs text-gray-400">{titles[step - 1]}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-1 border-b border-gray-100 px-6 py-3">
          {([1, 2, 3] as const).map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  step === s
                    ? 'bg-brand-gold text-white'
                    : step > s
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
              <span className={`text-xs ${ step >= s ? 'font-medium text-gray-700' : 'text-gray-400'}`}>
                {titles[s - 1]}
              </span>
              {s < 3 && <ChevronRight className="mx-1 h-3 w-3 text-gray-300" />}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="max-h-[62vh] overflow-y-auto px-6 py-5">

          {/* ── Step 1: Veículo ─────────────────────────── */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={la}>Marca *</label>
                  <input {...register('brand')} type="text" placeholder="Toyota" className={fi} />
                  {errors.brand && <p className={er}>{errors.brand.message}</p>}
                </div>
                <div>
                  <label className={la}>Modelo *</label>
                  <input {...register('model')} type="text" placeholder="Corolla" className={fi} />
                  {errors.model && <p className={er}>{errors.model.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={la}>Ano *</label>
                  <input {...register('year')} type="number" placeholder="2023" min={1950}
                    max={new Date().getFullYear() + 1} className={fi} />
                  {errors.year && <p className={er}>{errors.year.message}</p>}
                </div>
                <div>
                  <label className={la}>Cor *</label>
                  <input {...register('color')} type="text" placeholder="Branco" className={fi} />
                  {errors.color && <p className={er}>{errors.color.message}</p>}
                </div>
                <div>
                  <label className={la}>Quilometragem *</label>
                  <input {...register('mileage')} type="number" placeholder="45000" min={0} className={fi} />
                  {errors.mileage && <p className={er}>{errors.mileage.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={la}>Combustível *</label>
                  <select {...register('fuelType')} className={fi}>
                    <option value="">Selecione...</option>
                    <option value="FLEX">Flex</option>
                    <option value="GASOLINE">Gasolina</option>
                    <option value="DIESEL">Diesel</option>
                    <option value="ELECTRIC">Elétrico</option>
                    <option value="HYBRID">Híbrido</option>
                  </select>
                  {errors.fuelType && <p className={er}>{errors.fuelType.message}</p>}
                </div>
                <div>
                  <label className={la}>Câmbio *</label>
                  <select {...register('transmission')} className={fi}>
                    <option value="">Selecione...</option>
                    <option value="MANUAL">Manual</option>
                    <option value="AUTOMATIC">Automático</option>
                    <option value="CVT">CVT</option>
                    <option value="SEMI_AUTO">Semi-automático</option>
                  </select>
                  {errors.transmission && <p className={er}>{errors.transmission.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={la}>Carroceria</label>
                  <select {...register('bodyType')} className={fi}>
                    <option value="">Selecione...</option>
                    <option value="HATCH">Hatchback</option>
                    <option value="SEDAN">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="PICKUP">Picape</option>
                    <option value="CONVERTIBLE">Conversível</option>
                    <option value="MINIVAN">Minivan</option>
                    <option value="WAGON">Station Wagon</option>
                    <option value="COUPE">Cupê</option>
                    <option value="VAN">Van / Utilitário</option>
                  </select>
                </div>
                <div>
                  <label className={la}>Portas</label>
                  <select {...register('doors')} className={fi}>
                    <option value="">Selecione...</option>
                    <option value="2">2 portas</option>
                    <option value="4">4 portas</option>
                  </select>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Identificação (opcional)</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={la}>Placa</label>
                  <input
                    {...register('plate')}
                    type="text"
                    placeholder="ABC1D23"
                    maxLength={8}
                    className={`${fi} uppercase`}
                    onInput={(e) => {
                      const t = e.target as HTMLInputElement;
                      t.value = t.value.toUpperCase();
                    }}
                  />
                </div>
                <div>
                  <label className={la}>Chassi</label>
                  <input {...register('chassis')} type="text" placeholder="9BWZZZ..." maxLength={17}
                    className={`${fi} font-mono uppercase`} />
                </div>
                <div>
                  <label className={la}>RENAVAM</label>
                  <input {...register('renavam')} type="text" placeholder="12345678901" maxLength={11}
                    className={`${fi} font-mono`} />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Anúncio ─────────────────────────── */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className={la}>Preço de venda *</label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">R$</span>
                  <input
                    {...register('price')}
                    type="number"
                    min={1}
                    step={1}
                    placeholder="89900"
                    className={`${fi} pl-9`}
                  />
                </div>
                {errors.price && <p className={er}>{errors.price.message}</p>}
              </div>

              <div>
                <label className={la}>Descrição</label>
                <textarea
                  {...register('description')}
                  rows={4}
                  placeholder="Descreva detalhes do veículo, histórico de revisões, estado geral..."
                  className={`${fi} resize-none`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setValue('acceptsFinancing', !acceptsFinancing)}
                  className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                    acceptsFinancing ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 ${
                    acceptsFinancing ? 'border-brand-gold bg-brand-gold' : 'border-gray-300'
                  }`}>
                    {acceptsFinancing && <span className="text-xs font-bold text-white">✓</span>}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Aceita financiamento</p>
                    <p className="text-xs text-gray-500">Comprador pode financiar</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setValue('acceptsTrade', !acceptsTrade)}
                  className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                    acceptsTrade ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 ${
                    acceptsTrade ? 'border-brand-gold bg-brand-gold' : 'border-gray-300'
                  }`}>
                    {acceptsTrade && <span className="text-xs font-bold text-white">✓</span>}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Aceita troca</p>
                    <p className="text-xs text-gray-500">Troca por outro veículo</p>
                  </div>
                </button>
              </div>

              <div>
                <label className={la}>
                  E-mail do vendedor{' '}
                  <span className="font-normal text-gray-400">(opcional)</span>
                </label>
                <input
                  {...register('sellerEmail')}
                  type="email"
                  placeholder="vendedor@email.com"
                  className={fi}
                />
                <p className="mt-1 text-xs text-gray-400">
                  Se vazio, o anúncio ficará como publicação da plataforma.
                </p>
              </div>
            </div>
          )}

          {/* ── Step 3: Mídias ──────────────────────────── */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Adicione até <strong>20 fotos ou vídeos</strong>. A primeira imagem será a{' '}
                <strong>foto de capa</strong> do anúncio.
              </p>

              {/* Drop zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); addFiles(e.dataTransfer.files); }}
                onClick={() => inputRef.current?.click()}
                className={`cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
                  isDragging
                    ? 'border-brand-gold bg-brand-gold/5'
                    : 'border-gray-300 hover:border-brand-gold hover:bg-gray-50'
                }`}
              >
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-2 text-sm font-medium text-gray-700">Arraste fotos e vídeos aqui</p>
                <p className="mt-1 text-xs text-gray-400">ou clique para selecionar · JPG, PNG, WEBP, MP4, MOV</p>
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => addFiles(e.target.files)}
                />
              </div>

              {/* Preview grid */}
              {media.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {media.map((m, i) => (
                    <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                      {m.isVideo ? (
                        <div className="flex h-full items-center justify-center bg-gray-800">
                          <Play className="h-8 w-8 text-white" />
                          <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">Vídeo</span>
                        </div>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={m.preview} alt="" className="h-full w-full object-cover" />
                      )}
                      {i === 0 && (
                        <span className="absolute left-1 top-1 flex items-center gap-0.5 rounded bg-brand-gold/90 px-1.5 py-0.5 text-xs font-medium text-white">
                          <Star className="h-3 w-3" /> Capa
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                        className="absolute right-1 top-1 hidden rounded-full bg-black/60 p-0.5 text-white hover:bg-black/80 group-hover:flex"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {media.length < 20 && (
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="aspect-[4/3] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-brand-gold hover:bg-gray-50"
                    >
                      <Plus className="h-6 w-6 text-gray-400" />
                    </button>
                  )}
                </div>
              )}

              {media.length === 0 && (
                <p className="text-center text-xs text-gray-400">
                  Nenhuma mídia adicionada — o anúncio pode ser publicado sem fotos.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
          <button
            type="button"
            onClick={step === 1 ? onClose : () => setStep((s) => (s - 1) as 1 | 2 | 3)}
            className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            {step === 1 ? 'Cancelar' : '← Voltar'}
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-2 text-sm font-semibold text-white hover:bg-brand-gold-dark"
            >
              Próximo <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit((d) => mutation.mutate(d))}
              disabled={mutation.isPending || isUploading}
              className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-2 text-sm font-semibold text-white hover:bg-brand-gold-dark disabled:opacity-70"
            >
              {(mutation.isPending || isUploading) && <Loader2 className="h-4 w-4 animate-spin" />}
              {isUploading ? 'Enviando fotos...' : 'Publicar anúncio'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Edit Modal ────────────────────────────────────────────────────────────────
interface PhotoItem { preview: string; isNew: boolean; isVideo: boolean; url?: string; file?: File }

// Formulário interno — só monta quando listing já está disponível,
// usa defaultValues para preencher sem precisar de reset()
function EditForm({ listing, listingId, onClose }: {
  listing: Record<string, unknown>;
  listingId: string;
  onClose: () => void;
}) {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'dados' | 'fotos'>('dados');

  const v = (listing.vehicle ?? {}) as Record<string, unknown>;
  const existingMedia = ((v.inspections as Array<{ media: Array<{ url: string; type: string }> }> | undefined)?.[0]?.media ?? []);
  const [photos, setPhotos] = useState<PhotoItem[]>(
    () => existingMedia.map(m => ({ preview: m.url, url: m.url, isNew: false, isVideo: m.type === 'VIDEO' }))
  );

  const fi = 'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20';
  const la = 'block text-sm font-medium text-gray-700';

  const editSchema = z.object({
    brand: z.string().min(1, 'Obrigatório'),
    model: z.string().min(1, 'Obrigatório'),
    year: z.coerce.number().int().min(1950).max(new Date().getFullYear() + 1),
    color: z.string().min(1, 'Obrigatório'),
    mileage: z.coerce.number().int().min(0),
    fuelType: z.enum(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID']),
    transmission: z.enum(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO']),
    bodyType: z.string().optional(),
    doors: z.coerce.number().int().optional(),
    plate: z.string().optional(),
    chassis: z.string().optional(),
    renavam: z.string().optional(),
    price: z.coerce.number().min(1, 'Preço obrigatório'),
    description: z.string().optional(),
    acceptsFinancing: z.boolean().default(false),
    acceptsTrade: z.boolean().default(false),
  });
  type EditData = z.infer<typeof editSchema>;

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<EditData>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      brand:           String(v.brand ?? ''),
      model:           String(v.model ?? ''),
      year:            Number(v.year ?? new Date().getFullYear()),
      color:           String(v.color ?? ''),
      mileage:         Number(v.mileage ?? 0),
      fuelType:        (v.fuelType as EditData['fuelType']) ?? 'FLEX',
      transmission:    (v.transmission as EditData['transmission']) ?? 'MANUAL',
      plate:           String(v.plate ?? ''),
      chassis:         String(v.chassis ?? ''),
      renavam:         String(v.renavam ?? ''),
      price:           Number(listing.price ?? 0),
      description:     String(listing.description ?? ''),
      acceptsFinancing: Boolean(listing.acceptsFinancing),
      acceptsTrade:    Boolean(listing.acceptsTrade),
    },
  });

  const acceptsFinancing = watch('acceptsFinancing');
  const acceptsTrade = watch('acceptsTrade');

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const allowed = Array.from(files).filter(f => f.type.startsWith('image/') || f.type.startsWith('video/'));
    const toAdd = allowed.slice(0, 20 - photos.length).map(file => ({
      file, preview: URL.createObjectURL(file), isNew: true, isVideo: file.type.startsWith('video/'),
    }));
    setPhotos(prev => [...prev, ...toAdd]);
  }, [photos.length]);

  const removePhoto = (idx: number) => {
    setPhotos(prev => {
      if (prev[idx].isNew) URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const setAsCover = (idx: number) => {
    setPhotos(prev => [prev[idx], ...prev.filter((_, i) => i !== idx)]);
  };

  const mutation = useMutation({
    mutationFn: async (data: EditData) => {
      // Upload new photos and resolve final ordered URL list
      const vehicle = (listing?.vehicle ?? {}) as { inspections?: { media?: { url: string }[] }[] };
      const originalUrls = (vehicle.inspections?.[0]?.media ?? []).map((m: { url: string }) => m.url);
      const hasChanges = photos.some(p => p.isNew) ||
        photos.length !== originalUrls.length ||
        photos.some((p, i) => p.url !== originalUrls[i]);

      let photoUrls: string[] | undefined;
      if (hasChanges) {
        setIsUploading(true);
        try {
          const resolved = await Promise.all(photos.map(async p => {
            if (!p.isNew) return p.url!;
            const form = new FormData();
            form.append('file', p.file!);
            const { data: res } = await api.post('/admin/upload-photo', form, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            return res.url as string;
          }));
          photoUrls = resolved;
        } finally { setIsUploading(false); }
      }

      return api.patch(`/admin/listings/${listingId}`, {
        ...data,
        ...(photoUrls !== undefined && { photoUrls }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-listings'] });
      toast.success('Anúncio atualizado!');
      onClose();
    },
    onError: (err: unknown) => {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Erro ao salvar.';
      toast.error(msg);
    },
  });

  return (
    <>
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {(['dados', 'fotos'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === tab ? 'border-b-2 border-brand-gold text-brand-gold' : 'text-gray-500 hover:text-gray-700'}`}>
              {tab === 'dados' ? 'Dados do anúncio' : `Fotos (${photos.length})`}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="max-h-[62vh] overflow-y-auto px-6 py-5">
            <>
              {/* ── Tab: Dados ── */}
              {activeTab === 'dados' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className={la}>Marca</label><input {...register('brand')} className={fi} />{errors.brand && <p className="mt-1 text-xs text-red-600">{errors.brand.message}</p>}</div>
                    <div><label className={la}>Modelo</label><input {...register('model')} className={fi} />{errors.model && <p className="mt-1 text-xs text-red-600">{errors.model.message}</p>}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div><label className={la}>Ano</label><input {...register('year')} type="number" className={fi} /></div>
                    <div><label className={la}>Cor</label><input {...register('color')} className={fi} /></div>
                    <div><label className={la}>Quilometragem</label><input {...register('mileage')} type="number" className={fi} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={la}>Combustível</label>
                      <select {...register('fuelType')} className={fi}>
                        <option value="FLEX">Flex</option><option value="GASOLINE">Gasolina</option>
                        <option value="DIESEL">Diesel</option><option value="ELECTRIC">Elétrico</option><option value="HYBRID">Híbrido</option>
                      </select>
                    </div>
                    <div>
                      <label className={la}>Câmbio</label>
                      <select {...register('transmission')} className={fi}>
                        <option value="MANUAL">Manual</option><option value="AUTOMATIC">Automático</option>
                        <option value="CVT">CVT</option><option value="SEMI_AUTO">Semi-automático</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div><label className={la}>Placa</label><input {...register('plate')} className={`${fi} uppercase`} /></div>
                    <div><label className={la}>Chassi</label><input {...register('chassis')} className={`${fi} font-mono uppercase`} /></div>
                    <div><label className={la}>RENAVAM</label><input {...register('renavam')} className={`${fi} font-mono`} /></div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="relative">
                      <label className={la}>Preço de venda *</label>
                      <span className="absolute left-3 top-[calc(50%+6px)] -translate-y-1/2 text-sm text-gray-400">R$</span>
                      <input {...register('price')} type="number" min={1} step={1} className={`${fi} pl-9`} />
                      {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className={la}>Descrição</label>
                    <textarea {...register('description')} rows={3} className={`${fi} resize-none`} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      { field: 'acceptsFinancing' as const, val: acceptsFinancing, label: 'Aceita financiamento' },
                      { field: 'acceptsTrade' as const, val: acceptsTrade, label: 'Aceita troca' },
                    ]).map(({ field, val, label }) => (
                      <button key={field} type="button" onClick={() => setValue(field, !val)}
                        className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${val ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 ${val ? 'border-brand-gold bg-brand-gold' : 'border-gray-300'}`}>
                          {val && <span className="text-xs font-bold text-white">✓</span>}
                        </div>
                        <p className="text-sm font-medium text-gray-900">{label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Tab: Fotos ── */}
              {activeTab === 'fotos' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    A <strong>primeira foto</strong> é a capa exibida nos cards e na busca.
                    Clique em <strong>"Definir capa"</strong> para mover qualquer foto para a primeira posição.
                  </p>

                  {/* Grid unificado de fotos */}
                  {photos.length > 0 ? (
                    <div className="grid grid-cols-3 gap-3">
                      {photos.map((p, i) => (
                        <div key={p.preview} className="group relative overflow-hidden rounded-xl bg-gray-100">
                          {/* Imagem */}
                          <div className="aspect-[4/3] overflow-hidden">
                            {p.isVideo ? (
                              <div className="flex h-full items-center justify-center bg-gray-800"><Play className="h-8 w-8 text-white" /></div>
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={p.preview} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            )}
                          </div>

                          {/* Badge capa */}
                          {i === 0 ? (
                            <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-brand-gold px-2 py-0.5 text-xs font-bold text-white shadow">
                              <Star className="h-3 w-3 fill-white" /> Capa
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setAsCover(i)}
                              className="absolute left-2 top-2 hidden items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-brand-gold group-hover:flex"
                            >
                              <Star className="h-3 w-3" /> Definir capa
                            </button>
                          )}

                          {/* Badge nova */}
                          {p.isNew && (
                            <span className="absolute bottom-2 left-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">Nova</span>
                          )}

                          {/* Remover */}
                          <button
                            type="button"
                            onClick={() => removePhoto(i)}
                            className="absolute right-2 top-2 hidden rounded-full bg-red-500 p-1 text-white shadow transition hover:bg-red-600 group-hover:flex"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>

                          {/* Número */}
                          <div className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 text-[10px] font-bold text-white">
                            {i + 1}
                          </div>
                        </div>
                      ))}

                      {/* Botão adicionar */}
                      {photos.length < 20 && (
                        <button
                          type="button"
                          onClick={() => inputRef.current?.click()}
                          className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 transition-colors hover:border-brand-gold hover:bg-gray-50"
                        >
                          <Plus className="h-6 w-6 text-gray-400" />
                          <span className="mt-1 text-xs text-gray-400">Adicionar</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={() => inputRef.current?.click()}
                      className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-10 text-center hover:border-brand-gold hover:bg-gray-50 transition-colors"
                    >
                      <Upload className="mx-auto h-7 w-7 text-gray-400" />
                      <p className="mt-2 text-sm font-medium text-gray-700">Nenhuma foto — clique para adicionar</p>
                    </div>
                  )}

                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={e => { addFiles(e.target.files); if (inputRef.current) inputRef.current.value = ''; }}
                  />
                </div>
              )}
            </>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
          <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Cancelar</button>
          <button
            type="button"
            onClick={handleSubmit(d => mutation.mutate(d))}
            disabled={mutation.isPending || isUploading}
            className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-2 text-sm font-semibold text-white hover:bg-brand-gold-dark disabled:opacity-70"
          >
            {(mutation.isPending || isUploading) && <Loader2 className="h-4 w-4 animate-spin" />}
            {isUploading ? 'Enviando fotos...' : 'Salvar alterações'}
          </button>
        </div>
    </>
  );
}

// Wrapper — busca dados e renderiza EditForm apenas quando estiver pronto
function EditarAnuncioModal({ listingId, onClose }: { listingId: string; onClose: () => void }) {
  const { data: listing, isLoading, isError } = useQuery({
    queryKey: ['admin-listing', listingId],
    queryFn: async () => {
      const { data } = await api.get(`/admin/listings/${listingId}`);
      return data as Record<string, unknown>;
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 pt-8 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10">
              <Pencil className="h-4 w-4 text-brand-gold" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Editar anúncio</h2>
              {listing && (() => { const v = listing.vehicle as Record<string, unknown>; return <p className="text-xs text-gray-400">{String(v?.brand ?? '')} {String(v?.model ?? '')} {String(v?.year ?? '')}</p>; })()}
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-brand-gold" />
          </div>
        )}
        {isError && (
          <div className="px-6 py-10 text-center text-sm text-red-600">
            Erro ao carregar anúncio. Feche e tente novamente.
          </div>
        )}
        {!isLoading && !isError && listing && (
          <EditForm listing={listing} listingId={listingId} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AnunciosPage() {
  const qc = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { data = [], isLoading } = useQuery<Listing[]>({
    queryKey: ['admin-listings'],
    queryFn: async () => {
      const { data } = await api.get('/listings?limit=50');
      return data.data ?? data;
    },
  });

  const deactivate = useMutation({
    mutationFn: (id: string) => api.patch(`/admin/listings/${id}/deactivate`),
    onSuccess: () => {
      toast.success('Anúncio desativado.');
      qc.invalidateQueries({ queryKey: ['admin-listings'] });
    },
    onError: () => toast.error('Erro ao desativar anúncio.'),
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Anúncios</h1>
          <p className="mt-1 text-gray-500">Todos os anúncios publicados na plataforma</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-gold-dark"
        >
          <Plus className="h-4 w-4" />
          Novo anúncio
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Veículo', 'Vendedor', 'Preço', 'Status', 'Data', ''].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((item) => {
                const s = statusLabels[item.status] ?? { label: item.status, cls: 'bg-gray-100 text-gray-700' };
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const firstPhoto = item.vehicle.inspections?.[0]?.media?.[0]?.url;
                          return firstPhoto ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={firstPhoto} alt="" className="h-12 w-16 flex-shrink-0 rounded-lg object-cover" />
                          ) : (
                            <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                              <Car className="h-5 w-5 text-gray-400" />
                            </div>
                          );
                        })()}
                        <div>
                          <div className="font-medium text-gray-900">
                            {item.vehicle.brand} {item.vehicle.model} {item.vehicle.year}
                          </div>
                          <div className="text-sm text-gray-500">{item.vehicle.plate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div>{item.seller.name}</div>
                      <div className="text-xs text-gray-400">{item.seller.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => setEditingId(item.id)}
                          className="flex items-center gap-1 text-sm font-medium text-brand-gold hover:underline"
                        >
                          <Pencil className="h-3.5 w-3.5" /> Editar
                        </button>
                        {item.status === 'ACTIVE' && (
                          <button
                            onClick={() => deactivate.mutate(item.id)}
                            disabled={deactivate.isPending}
                            className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
                          >
                            Desativar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {showModal && <CriarAnuncioModal onClose={() => setShowModal(false)} />}
      {editingId && <EditarAnuncioModal listingId={editingId} onClose={() => setEditingId(null)} />}
    </div>
  );
}
