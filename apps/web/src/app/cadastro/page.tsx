'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

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

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
      const { data } = await axios.post(`${baseUrl}/api/v1/auth/register`, {
        name: values.name,
        email: values.email,
        phone: values.phone || undefined,
        password: values.password,
        type: 'PF',
      });
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);
      toast.success('Conta criada com sucesso!');
      router.replace('/vender');
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-8 text-center">
            <Link href="/" className="text-2xl font-bold text-brand-gold">Conneqt</Link>
            <p className="mt-2 text-gray-500">Crie sua conta gratuitamente</p>
          </div>

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
              Criar conta
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            Ao criar conta, você concorda com nossos{' '}
            <a href="#" className="text-brand-gold hover:underline">Termos de Uso</a> e{' '}
            <a href="#" className="text-brand-gold hover:underline">Política de Privacidade</a>.
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            Já tem conta?{' '}
            <Link href="/entrar" className="font-medium text-brand-gold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
