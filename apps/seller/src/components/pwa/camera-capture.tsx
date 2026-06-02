'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Camera, Upload, RefreshCw, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CameraCaptureProps {
  label: string;
  hint: string;
  onCapture: (file: File) => void;
  disabled?: boolean;
  step?: number;
}

type CaptureMode = 'idle' | 'camera' | 'preview';

export function CameraCapture({ label, hint, onCapture, disabled, step }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [mode, setMode] = useState<CaptureMode>('idle');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [capturedFile, setCapturedFile] = useState<File | null>(null);
  const [cameraError, setCameraError] = useState(false);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');

  useEffect(() => {
    return () => stopStream();
  }, []);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  const startCamera = async () => {
    setCameraError(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setMode('camera');
    } catch {
      setCameraError(true);
      fileInputRef.current?.click();
    }
  };

  const flipCamera = async () => {
    stopStream();
    const next = facingMode === 'environment' ? 'user' : 'environment';
    setFacingMode(next);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: next }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setCameraError(true);
    }
  };

  const takePhoto = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `foto-${Date.now()}.jpg`, { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        stopStream();
        setPreviewUrl(url);
        setCapturedFile(file);
        setMode('preview');
      },
      'image/jpeg',
      0.92,
    );
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setCapturedFile(file);
    setMode('preview');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const confirmPhoto = () => {
    if (capturedFile) onCapture(capturedFile);
    resetCapture();
  };

  const retakePhoto = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setCapturedFile(null);
    if (!cameraError) startCamera();
    else setMode('idle');
  };

  const resetCapture = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setCapturedFile(null);
    setMode('idle');
  };

  if (mode === 'preview' && previewUrl) {
    return (
      <div className="overflow-hidden rounded-2xl bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={previewUrl} alt="Preview" className="w-full object-cover max-h-[60vh]" />
        <div className="flex gap-3 p-4">
          <button onClick={retakePhoto} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 py-3 font-semibold text-white hover:bg-white/10">
            <RefreshCw className="h-5 w-5" /> Refazer
          </button>
          <button onClick={confirmPhoto} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white hover:bg-green-600">
            <Check className="h-5 w-5" /> Usar foto
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'camera') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-black">
        <video ref={videoRef} autoPlay playsInline muted className="w-full object-cover max-h-[60vh]" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <div className="rounded-lg border-2 border-white/60 w-4/5 h-4/5" />
        </div>
        <div className="absolute top-4 left-4 right-4 rounded-xl bg-black/50 px-3 py-2 text-center text-sm font-medium text-white backdrop-blur-sm">
          {hint}
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8 px-8">
          <button onClick={() => { stopStream(); setMode('idle'); }} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <X className="h-6 w-6" />
          </button>
          <button onClick={takePhoto} className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg active:scale-95 transition-transform">
            <div className="h-16 w-16 rounded-full border-4 border-gray-300 bg-white" />
          </button>
          <button onClick={flipCamera} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <RefreshCw className="h-6 w-6" />
          </button>
        </div>
        <canvas ref={canvasRef} className="hidden" />
      </div>
    );
  }

  return (
    <div className={cn('rounded-2xl bg-white p-6 shadow-sm', disabled && 'opacity-50')}>
      <div className="flex items-center gap-3">
        {step !== undefined && (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-white">
            {step}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-sm text-gray-500">{hint}</p>
        </div>
      </div>
      <div className="mt-5 flex gap-3">
        <button onClick={startCamera} disabled={disabled} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gold py-3 font-semibold text-white hover:bg-brand-gold-dark active:scale-95 transition-transform disabled:opacity-50">
          <Camera className="h-5 w-5" /> Câmera
        </button>
        <button onClick={() => fileInputRef.current?.click()} disabled={disabled} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-transform disabled:opacity-50">
          <Upload className="h-5 w-5" /> Galeria
        </button>
      </div>
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileInput} disabled={disabled} />
    </div>
  );
}
