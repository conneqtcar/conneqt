'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, ShoppingCart, Car, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import api from '@/lib/api';

const schema = z.object({
  name: z.string().min(3, 'Nome deve ter ao menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  password: z.string().min(8, 'Mínimo de 8 caracteres'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword'],
});

type FormData = z.infer<typeof schema>;
type Role = 'BUYER' | 'SELLER';

const SELLER_URL = process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001';

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', {
        name: values.name,
        email: values.email,
        phone: values.phone || undefined,
        password: values.password,
        type: 'PF',
        role,
      });
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);

      if (role === 'BUYER') {
        toast.success('Conta criada! Bem-vindo à Conneqt 🎉');
        router.replace('/buscar');
      } else {
        toast.success('Cadastro enviado! Aguarde a análise da sua conta.');
        window.location.href = `${SELLER_URL}?cadastro=pendente`;
      }
    } catch (err: unknown) {
      const message =
        axios.isAxiosError(err) && err.response?.data?.message
          ? err.response.data.message
          : 'Erro ao criar conta. Tente novamente.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Step 1: escolha de perfil
  if (!role) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="mb-8 text-center">
            <Link href="/" className="text-2xl font-bold text-brand-gold">Conneqt</Link>
            <h2 className="mt-3 text-xl font-bold text-gray-900">Como você quer usar a Conneqt?</h2>
            <p className="mt-1 text-sm text-gray-500">Escolha seu perfil para começar</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Comprador */}
            <button
              onClick={() => setRole('BUYER')}
              className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-8 text-left transition hover:border-brand-gold hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-brand-gold/10">
                <ShoppingCart className="h-7 w-7 text-blue-500 transition group-hover:text-brand-gold" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">Quero comprar</p>
                <p className="mt-1 text-sm text-gray-500">Busque veículos, faça propostas e negocie diretamente com vendedores verificados.</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Acesso imediato
              </div>
            </button>

            {/* Vendedor */}
            <button
              onClick={() => setRole('SELLER')}
              className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-8 text-left transition hover:border-brand-gold hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 transition group-hover:bg-brand-gold/10">
                <Car className="h-7 w-7 text-brand-gold" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">Quero vender</p>
                <p className="mt-1 text-sm text-gray-500">Anuncie seu veículo com laudo de inspeção por IA e alcance compradores qualificados.</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-brand-gold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Análise de perfil
              </div>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Já tem conta?{' '}
            <Link href="/entrar" className="font-medium text-brand-gold hover:underline">Entrar</Link>
          </p>
        </div>
      </div>
    );
  }

  // Step 2: formulario
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <Link href="/" className="text-2xl font-bold text-brand-gold">Conneqt</Link>
            <p className="mt-1 text-sm text-gray-500">
              {role === 'BUYER' ? 'Criar conta de comprador' : 'Criar conta de vendedor'}
            </p>
          </div>

          {role === 'SELLER' && (
            <div className="mb-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <p className="font-semibold">Conta de vendedor</p>
              <p className="mt-0.5 text-xs text-amber-700">Após o cadastro, nossa equipe vai analisar seu perfil em até 24h. Você receberá uma notificação por e-mail.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome completo</label>
              <input
                {...register('name')}
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                {...register('email')}
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone <span className="text-gray-400">(opcional)</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                autoComplete="tel"
                placeholder="(11) 99999-9999"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                {...register('password')}
                type="password"
                autoComplete="new-password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmar senha</label>
              <input
                {...register('confirmPassword')}
                type="password"
                autoComplete="new-password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gold py-3 font-medium text-white hover:bg-brand-gold-dark disabled:opacity-70"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {role === 'BUYER' ? 'Criar conta e buscar veículos' : 'Enviar cadastro para análise'}
            </button>
          </form>

          <button
            onClick={() => setRole(null)}
            className="mt-4 w-full text-center text-xs text-gray-400 hover:text-gray-600"
          >
            ← Voltar à seleção de perfil
          </button>

          <p className="mt-3 text-center text-xs text-gray-400">
            Ao criar conta, você concorda com nossos{' '}
            <a href="#" className="text-brand-gold hover:underline">Termos de Uso</a> e{' '}
            <a href="#" className="text-brand-gold hover:underline">Política de Privacidade</a>.
          </p>

          <p className="mt-3 text-center text-sm text-gray-500">
            Já tem conta?{' '}
            <Link href="/entrar" className="font-medium text-brand-gold hover:underline">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
