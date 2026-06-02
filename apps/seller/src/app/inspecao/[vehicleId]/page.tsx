'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { CheckCircle, Loader2, ArrowLeft, Camera } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import api from '@/lib/api';
import { CameraCapture } from '@/components/pwa/camera-capture';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

// Imagens de carros reais para simular fotos em demo mode
const DEMO_CAR_IMAGES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=70',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=70',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=70',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=70',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=70',
  'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&q=70',
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=70',
  'https://images.unsplash.com/photo-1471479917193-f00955256257?w=800&q=70',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=70',
  'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=70',
];

const UPLOAD_STEPS = [
  { label: 'Frente do veículo',       hint: 'Posicione o carro de frente, com boa iluminação' },
  { label: 'Traseira',                hint: 'Foto da parte traseira completa' },
  { label: 'Lateral esquerda',        hint: 'Vista lateral completa' },
  { label: 'Lateral direita',         hint: 'Vista lateral completa' },
  { label: 'Interior — painel',       hint: 'Painel com hodômetro visível' },
  { label: 'Interior — banco dianteiro', hint: 'Assentos dianteiros' },
  { label: 'Interior — banco traseiro',  hint: 'Assentos traseiros' },
  { label: 'Motor',                   hint: 'Capô aberto, motor limpo' },
  { label: 'Rodas e pneus',           hint: 'Foto de uma das rodas com pneu visível' },
  { label: 'Documento (CRLV)',        hint: 'Documento do veículo com placa visível' },
];


export default function InspecaoPage() {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { data: inspection, isLoading } = useQuery({
    queryKey: ['inspection', vehicleId],
    queryFn: async () => {
      // GET first — reuse existing active inspection
      const { data: existing } = await api.get<{ id: string; status: string }[]>(
        `/inspections?vehicleId=${vehicleId}`,
      );
      const active = Array.isArray(existing)
        ? existing.find((i) => i.status !== 'APPROVED' && i.status !== 'REJECTED' && i.status !== 'CANCELLED')
        : null;
      if (active) return active;
      // No active inspection found — create one
      const { data } = await api.post('/inspections', { vehicleId, type: 'REMOTE' });
      return data;
    },
    retry: false,
  });

  const handleCapture = async (file: File) => {
    if (!inspection?.id && !IS_DEMO) return;
    const stepIndex = currentStep;

    // Demo mode: simula upload com delay visual
    if (IS_DEMO) {
      setUploading(true);
      await new Promise((r) => setTimeout(r, 600));
      setCurrentStep((s) => s + 1);
      toast.success(`✓ ${UPLOAD_STEPS[stepIndex].label}`);
      setUploading(false);
      return;
    }

    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('label', UPLOAD_STEPS[stepIndex].label);
      form.append('sortOrder', String(stepIndex));

      await api.post(`/inspections/${inspection!.id}/upload-media`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setCurrentStep((s) => s + 1);
      toast.success(`✓ ${UPLOAD_STEPS[stepIndex].label}`);
    } catch {
      toast.error('Erro ao enviar foto. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  const [submitting, setSubmitting] = useState(false);

  const finishInspection = async () => {
    setSubmitting(true);
    if (IS_DEMO) {
      await new Promise((r) => setTimeout(r, 800));
      toast.success('Inspeção enviada! Score IA: 92/100 ✅');
      router.push('/');
      setSubmitting(false);
      return;
    }
    if (!inspection?.id) return;
    try {
      await api.patch(`/inspections/${inspection.id}/submit-media`);
      toast.success('Inspeção enviada para análise!');
      router.push('/');
    } catch {
      try {
        await api.patch(`/inspections/${inspection.id}/status`, { status: 'AWAITING_REVIEW' });
      } catch { /* best-effort */ }
      toast.success('Inspeção enviada para análise!');
      router.push('/');
    } finally {
      setSubmitting(false);
    }
  };

  const allDone = currentStep >= UPLOAD_STEPS.length;
  const progress = Math.min(100, Math.round((currentStep / UPLOAD_STEPS.length) * 100));

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header fixo */}
      <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <Link href="/" className="rounded-full p-2 hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">Inspeção Remota</p>
            <p className="text-xs text-gray-500">{currentStep} de {UPLOAD_STEPS.length} fotos</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-brand-gold">{progress}%</span>
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-lg h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-brand-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4 pt-5">
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-brand-gold" />
          </div>
        )}

        {!isLoading && !allDone && (
          <>
            {uploading && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-3 text-brand-gold">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm font-medium">Enviando foto...</span>
              </div>
            )}

            {IS_DEMO ? (
              /* ── Demo mode: botão "Simular foto" sem câmera real ── */
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-52 w-full bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={DEMO_CAR_IMAGES[currentStep % DEMO_CAR_IMAGES.length]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                    <Camera className="h-10 w-10 text-white/70" />
                    <p className="mt-2 text-sm font-medium text-white/80">Prévia da foto</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
                      {currentStep + 1}
                    </span>
                    <p className="font-semibold text-gray-900">{UPLOAD_STEPS[currentStep].label}</p>
                  </div>
                  <p className="mb-4 text-sm text-gray-500">{UPLOAD_STEPS[currentStep].hint}</p>
                  <button
                    onClick={() => handleCapture(new File([], 'demo.jpg', { type: 'image/jpeg' }))}
                    disabled={uploading}
                    className="w-full rounded-xl bg-brand-gold py-3.5 font-semibold text-white transition hover:bg-brand-gold-dark active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Simular foto tirada
                  </button>
                </div>
              </div>
            ) : (
              <CameraCapture
                label={UPLOAD_STEPS[currentStep].label}
                hint={UPLOAD_STEPS[currentStep].hint}
                step={currentStep + 1}
                onCapture={handleCapture}
                disabled={uploading || isLoading}
              />
            )}
          </>
        )}

        <div className="mt-6 space-y-2">
          {UPLOAD_STEPS.map((stepItem, i) => (
            <div
              key={stepItem.label}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                i < currentStep
                  ? 'bg-green-50'
                  : i === currentStep && !allDone
                  ? 'bg-amber-50 ring-1 ring-amber-200'
                  : 'bg-white opacity-50'
              }`}
            >
              {i < currentStep ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
              ) : (
                <div
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i === currentStep && !allDone
                      ? 'bg-brand-gold text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i + 1}
                </div>
              )}
              <span className={`text-sm ${i < currentStep ? 'font-medium text-green-700' : 'text-gray-700'}`}>
                {stepItem.label}
              </span>
            </div>
          ))}
        </div>

        {allDone && (
          <div className="mt-4 rounded-2xl bg-white p-8 text-center shadow-sm">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="mt-4 text-xl font-bold text-gray-900">Todas as fotos enviadas!</h2>
            <p className="mt-2 text-gray-500">
              Nossa IA irá analisar as imagens. Em até 24h você recebe o resultado.
            </p>
            <button
              onClick={finishInspection}
              disabled={submitting}
              className="mt-6 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white hover:bg-green-700 active:scale-95 transition-transform disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Enviar para análise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
