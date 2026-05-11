'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, Plus, X, Building2, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface Dealer {
  id: string;
  companyName: string;
  cnpj: string;
  plan: string;
  status: string;
  createdAt: string;
  user: { name: string; email: string };
  _count: { listings: number };
}

const planBadge: Record<string, string> = {
  BASIC: 'bg-gray-100 text-gray-700',
  STARTER: 'bg-gray-100 text-gray-700',
  PREMIUM: 'bg-amber-100 text-brand-gold',
  PRO: 'bg-amber-100 text-brand-gold',
  ENTERPRISE: 'bg-purple-100 text-purple-700',
};

const planLabel: Record<string, string> = {
  STARTER: 'Starter',
  PRO: 'Pro',
  ENTERPRISE: 'Enterprise',
  BASIC: 'Basic',
  PREMIUM: 'Premium',
};

const formSchema = z.object({
  companyName: z.string().min(2, 'Razão social obrigatória'),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido. Use 00.000.000/0000-00'),
  plan: z.enum(['STARTER', 'PRO', 'ENTERPRISE']),
  name: z.string().min(2, 'Nome do responsável obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  password: z.string().min(8, 'Mínimo de 8 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

function CadastrarModal({ onClose }: { onClose: () => void }) {
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { plan: 'STARTER' },
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => api.post('/admin/dealers', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-dealers'] });
      toast.success('Lojista cadastrado com sucesso!');
      onClose();
    },
    onError: (err: unknown) => {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message
        ?? 'Erro ao cadastrar lojista.';
      toast.error(msg);
    },
  });

  // Formata CNPJ automaticamente
  const formatCnpj = (value: string) =>
    value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);

  const field = 'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20';
  const label = 'block text-sm font-medium text-gray-700';
  const err = 'mt-1 text-xs text-red-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10">
              <Building2 className="h-4 w-4 text-brand-gold" />
            </div>
            <h2 className="font-bold text-gray-900">Cadastrar Lojista</h2>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit((d) => mutation.mutate(d))} className="max-h-[80vh] overflow-y-auto px-6 py-5">
          <p className="mb-5 text-xs text-gray-500">
            Preencha os dados da empresa e do responsável. Uma conta de acesso será criada automaticamente.
          </p>

          {/* Dados da empresa */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Dados da empresa</p>
          <div className="space-y-4">
            <div>
              <label className={label}>Razão social</label>
              <input {...register('companyName')} type="text" placeholder="AutoCenter Exemplo Ltda" className={field} />
              {errors.companyName && <p className={err}>{errors.companyName.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={label}>CNPJ</label>
                <input
                  {...register('cnpj')}
                  type="text"
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = formatCnpj(target.value);
                  }}
                  className={`${field} font-mono`}
                />
                {errors.cnpj && <p className={err}>{errors.cnpj.message}</p>}
              </div>
              <div>
                <label className={label}>Plano</label>
                <select {...register('plan')} className={field}>
                  <option value="STARTER">Starter</option>
                  <option value="PRO">Pro</option>
                  <option value="ENTERPRISE">Enterprise</option>
                </select>
                {errors.plan && <p className={err}>{errors.plan.message}</p>}
              </div>
            </div>
          </div>

          {/* Dados do responsável */}
          <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Responsável / Acesso</p>
          <div className="space-y-4">
            <div>
              <label className={label}>Nome completo</label>
              <input {...register('name')} type="text" placeholder="João da Silva" className={field} />
              {errors.name && <p className={err}>{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={label}>E-mail</label>
                <input {...register('email')} type="email" placeholder="joao@empresa.com" className={field} />
                {errors.email && <p className={err}>{errors.email.message}</p>}
              </div>
              <div>
                <label className={label}>
                  Telefone <span className="text-gray-400">(opcional)</span>
                </label>
                <input {...register('phone')} type="tel" placeholder="(11) 99999-9999" className={field} />
              </div>
            </div>

            <div>
              <label className={label}>Senha temporária</label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  className={`${field} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className={err}>{errors.password.message}</p>}
              <p className="mt-1 text-xs text-gray-400">Compartilhe a senha com o lojista para o primeiro acesso.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
            <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-2 text-sm font-semibold text-white hover:bg-brand-gold-dark disabled:opacity-70"
            >
              {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              Cadastrar lojista
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function LojistasPage() {
  const [showModal, setShowModal] = useState(false);

  const { data = [], isLoading } = useQuery<Dealer[]>({
    queryKey: ['admin-dealers'],
    queryFn: async () => {
      const { data } = await api.get('/dealers?limit=100');
      return data.data ?? data;
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lojistas</h1>
          <p className="mt-1 text-gray-500">Concessionárias e lojistas cadastrados</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-gold-dark"
        >
          <Plus className="h-4 w-4" />
          Cadastrar lojista
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
                {['Empresa', 'CNPJ', 'Responsável', 'Plano', 'Anúncios', 'Status', 'Cadastro'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((dealer) => (
                <tr key={dealer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{dealer.companyName}</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{dealer.cnpj}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{dealer.user.name}</div>
                    <div className="text-xs text-gray-400">{dealer.user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${planBadge[dealer.plan] ?? 'bg-gray-100 text-gray-700'}`}>
                      {planLabel[dealer.plan] ?? dealer.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{dealer._count.listings}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        dealer.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {dealer.status === 'ACTIVE' ? 'Ativo' : dealer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(dealer.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && <CadastrarModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
