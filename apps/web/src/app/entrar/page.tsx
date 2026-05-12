'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Informe a senha'),
});

type FormData = z.infer<typeof schema>;

function EntrarForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/';
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
      const { data } = await axios.post(`${baseUrl}/api/v1/auth/login`, values);
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);
      router.replace(returnUrl);
    } catch {
      toast.error('E-mail ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08080F] px-4">

      {/* Decoração de fundo */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-[#C9A84C]/[0.12] blur-[110px]" />
        <div className="absolute -bottom-40 -left-24 h-[480px] w-[480px] rounded-full bg-[#C9A84C]/[0.08] blur-[100px]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.055]"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {[0.15, 0.28, 0.40, 0.52, 0.63, 0.73, 0.82, 0.90, 0.96, 1].map((t, i) => (
            <line
              key={`h${i}`}
              x1={720 - 720 * t} y1={900 - 900 * t * 0.55}
              x2={720 + 720 * t} y2={900 - 900 * t * 0.55}
              stroke="#C9A84C" strokeWidth="0.6"
            />
          ))}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i / 16) * Math.PI;
            const x2 = 720 + Math.cos(angle) * 900;
            const y2 = 900 + Math.sin(angle) * 600;
            return <line key={`r${i}`} x1="720" y1="900" x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.5" />;
          })}
        </svg>

        <svg className="absolute -bottom-16 -right-16 h-[420px] w-[420px] opacity-[0.06]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="95" stroke="#C9A84C" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="70" stroke="#C9A84C" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="22" stroke="#C9A84C" strokeWidth="1.5" />
          {Array.from({ length: 5 }, (_, i) => {
            const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
            return <line key={i} x1={100 + Math.cos(a) * 22} y1={100 + Math.sin(a) * 22} x2={100 + Math.cos(a) * 70} y2={100 + Math.sin(a) * 70} stroke="#C9A84C" strokeWidth="1.2" />;
          })}
        </svg>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

        <div className="rounded-b-2xl border border-t-0 border-[#C9A84C]/20 bg-white/[0.04] px-8 py-10 shadow-2xl shadow-black/60 backdrop-blur-xl">
          {/* Logo */}
          <div className="mb-10 flex flex-col items-center gap-3">
            <Link href="/">
              <img
                src="/icons/logonome.png"
                alt="Conneqt"
                className="h-11 w-auto drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]"
              />
            </Link>
            <p className="text-sm text-white/40">Entre na sua conta</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                E-mail
              </label>
              <input
                {...register('email')}
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#C9A84C]/60 focus:bg-white/[0.08] focus:ring-1 focus:ring-[#C9A84C]/30"
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Senha
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 pr-11 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#C9A84C]/60 focus:bg-white/[0.08] focus:ring-1 focus:ring-[#C9A84C]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/60"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B8922A] to-[#D4A832] py-3 text-sm font-bold text-[#08080F] shadow-lg shadow-[#C9A84C]/20 transition hover:brightness-110 disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {loading ? 'Autenticando...' : 'Entrar'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-white/30">
            Não tem conta?{' '}
            <Link href="/cadastro" className="text-[#C9A84C]/70 transition hover:text-[#C9A84C]">
              Cadastre-se gratuitamente
            </Link>
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>
    </div>
  );
}

export default function EntrarPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#08080F]"><Loader2 className="h-8 w-8 animate-spin text-[#C9A84C]" /></div>}>
      <EntrarForm />
    </Suspense>
  );
}