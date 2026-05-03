'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { CheckCircle, Loader2, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import api from '@/lib/api';
import { CameraCapture } from '@/components/pwa/camera-capture';

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

interface UploadUrlResponse {
  uploadUrl: string;
  key: string;
  publicUrl: string;
}

export default function InspecaoPage() {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { data: inspection, isLoading } = useQuery({
    queryKey: ['inspection', vehicleId],
    queryFn: async () => {
      try {
        const { data } = await api.post('/inspections', { vehicleId, type: 'REMOTE' });
        return data;
      } catch {
        const { data } = await api.get(`/inspections?vehicleId=${vehicleId}`);
        return data;
      }
    },
    retry: false,
  });

  const handleCapture = async (file: File) => {
    if (!inspection?.id) return;
    const stepIndex = currentStep;

    setUploading(true);
    try {
      const { data: urlData }: { data: UploadUrlResponse } = await api.post(
        `/inspections/${inspection.id}/upload-url`,
        {
          fileName: file.name,
          contentType: file.type,
          label: UPLOAD_STEPS[stepIndex].label,
        },
      );

      await fetch(urlData.uploadUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      });

      await api.post(`/inspections/${inspection.id}/media`, {
        url: urlData.publicUrl,
        type: 'PHOTO',
        label: UPLOAD_STEPS[stepIndex].label,
        sortOrder: stepIndex,
      });

      setCurrentStep((s) => s + 1);
      toast.success(`✓ ${UPLOAD_STEPS[stepIndex].label}`);
    } catch {
      toast.error('Erro ao enviar foto. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  const finishInspection = async () => {
    toast.success('Inspeção enviada para análise!');
    router.push('/');
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
            <CameraCapture
              label={UPLOAD_STEPS[currentStep].label}
              hint={UPLOAD_STEPS[currentStep].hint}
              step={currentStep + 1}
              onCapture={handleCapture}
              disabled={uploading || isLoading}
            />
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
              className="mt-6 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white hover:bg-green-700 active:scale-95 transition-transform"
            >
              Enviar para análise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
