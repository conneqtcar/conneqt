'use client';

import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const STORAGE_KEY = 'conneqtcar-pwa-install-dismissed';

export function InstallPrompt() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Não mostrar se já foi instalado ou dispensado
    if (
      typeof window === 'undefined' ||
      localStorage.getItem(STORAGE_KEY) ||
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true
    ) {
      return;
    }

    // Detectar iOS (Safari não dispara beforeinstallprompt)
    const isIosDevice =
      /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream;
    if (isIosDevice) {
      setIsIos(true);
      setVisible(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') {
      setVisible(false);
    }
    setPrompt(null);
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <div className="rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/5">
        <div className="flex items-start gap-3">
          {/* Ícone */}
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo.svg" alt="Conneqt" className="h-8 w-8" />
          </div>

          {/* Texto */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm">Instalar Conneqt</p>
            {isIos ? (
              <p className="mt-0.5 text-xs text-gray-500">
                Toque em{' '}
                <span className="font-medium text-brand-gold">
                  Compartilhar{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </span>{' '}
                e depois em{' '}
                <span className="font-medium text-brand-gold">Adicionar à Tela Inicial</span>
              </p>
            ) : (
              <p className="mt-0.5 text-xs text-gray-500">
                Acesso rápido e modo offline disponível
              </p>
            )}
          </div>

          {/* Fechar */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* CTA — só para Android/Desktop (iOS usa instrução manual) */}
        {!isIos && prompt && (
          <button
            onClick={handleInstall}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-gold-dark active:scale-95 transition-transform"
          >
            <Download className="h-4 w-4" />
            Instalar agora
          </button>
        )}
      </div>
    </div>
  );
}
