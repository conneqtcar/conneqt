'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';
import axios from 'axios';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Informe a senha'),
});

type FormData = z.infer<typeof schema>;

export default function AdminLoginPage() {
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
      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
      const { data } = await axios.post(`${baseUrl}/auth/login`, values);

      if (data.user.type !== 'ADMIN') {
        toast.error('Acesso restrito a administradores.');
        return;
      }

      localStorage.setItem('admin_access_token', data.accessToken);
      localStorage.setItem('admin_refresh_token', data.refreshToken);
      router.replace('/');
    } catch {
      toast.error('E-mail ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Conneqt Admin</h1>
            <p className="mt-1 text-sm text-gray-500">Acesso restrito a administradores</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-gold focus:outline-none"
                placeholder="admin@conneqtcar.com.br"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                {...register('password')}
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-gold focus:outline-none"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-gold py-2.5 font-medium text-white hover:bg-brand-gold-dark disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
