'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, Star, Shield, ShieldCheck, Car, Clock, Edit2, Check, Camera } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface SellerProfile {
  id: string; name: string; email: string; phone: string;
  city: string; state: string; avatar: string; memberSince: string;
  verified: boolean; totalSold: number; rating: number; ratingCount: number; avgSaleDays: number;
}

export default function PerfilPage() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Partial<SellerProfile>>({});

  const { data: profile, isLoading } = useQuery<SellerProfile>({
    queryKey: ['seller-profile'],
    queryFn: async () => { const { data } = await api.get('/seller/profile'); return data; },
  });

  const update = useMutation({
    mutationFn: async (values: Partial<SellerProfile>) => {
      await api.patch('/seller/profile', values);
    },
    onSuccess: (_, values) => {
      qc.setQueryData(['seller-profile'], (old: SellerProfile | undefined) => ({ ...old, ...values }));
      toast.success('Perfil atualizado!');
      setEditing(false);
    },
    onError: () => toast.error('Erro ao salvar. Tente novamente.'),
  });

  function startEdit() {
    setForm({ name: profile?.name, phone: profile?.phone, city: profile?.city, state: profile?.state });
    setEditing(true);
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-300" />
      </div>
    );
  }

  if (!profile) return null;

  const memberSince = new Date(profile.memberSince).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  const STATS = [
    { label: 'Vendas realizadas',    value: String(profile.totalSold),        icon: Car,   color: 'text-brand-gold',   bg: 'bg-amber-50' },
    { label: 'Avaliação média',      value: `${profile.rating.toFixed(1)} ★`, icon: Star,  color: 'text-amber-500',  bg: 'bg-amber-50' },
    { label: 'Tempo médio de venda', value: `${profile.avgSaleDays} dias`,     icon: Clock, color: 'text-violet-600', bg: 'bg-violet-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white px-6 py-6 md:px-8">
        <h1 className="text-2xl font-extrabold text-gray-900">Meu perfil</h1>
        <p className="mt-1 text-sm text-gray-400">Gerencie suas informações pessoais e segurança</p>
      </div>

      <div className="mx-auto max-w-2xl space-y-5 px-6 py-6 md:px-8">
        {/* Profile card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="relative flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-2xl object-cover ring-4 ring-gray-50" />
              <button
                onClick={() => toast.success('Envio de foto disponível em breve!')}
                className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-white shadow-md transition hover:bg-brand-gold-dark"
              >
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-extrabold text-gray-900">{profile.name}</h2>
                {profile.verified && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verificado
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-400">{profile.email}</p>
              <p className="mt-0.5 text-xs text-gray-400">{profile.city}, {profile.state} · Membro desde {memberSince}</p>

              {/* Star rating */}
              <div className="mt-2 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(profile.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                ))}
                <span className="ml-1 text-xs text-gray-400">({profile.ratingCount} avaliações)</span>
              </div>
            </div>

            <button onClick={startEdit} className="flex-shrink-0 rounded-xl border border-gray-200 p-2.5 text-gray-500 transition hover:bg-gray-50">
              <Edit2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
              <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${s.bg}`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
              <p className="mt-0.5 text-[10px] font-medium text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Edit form */}
        {editing && (
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-gray-900">Editar informações</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">Nome completo</label>
                <input value={form.name ?? ''} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-brand-gold focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">Telefone</label>
                <input value={form.phone ?? ''} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="(11) 99999-9999"
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-brand-gold focus:outline-none" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">Cidade</label>
                  <input value={form.city ?? ''} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-brand-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">Estado</label>
                  <input value={form.state ?? ''} onChange={(e) => setForm((f) => ({ ...f, state: e.target.value.toUpperCase() }))}
                    maxLength={2} placeholder="SP"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm uppercase focus:border-brand-gold focus:outline-none" />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => update.mutate(form)} disabled={update.isPending}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gold py-2.5 text-sm font-semibold text-white transition hover:bg-brand-gold-dark disabled:opacity-60">
                  {update.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                  Salvar alterações
                </button>
                <button onClick={() => setEditing(false)}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-500 transition hover:bg-gray-50">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Security */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-bold text-gray-900">Segurança</h3>
          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Alterar senha</p>
                <p className="text-xs text-gray-400">Última alteração há 3 meses</p>
              </div>
            </div>
            <button
              onClick={() => toast.success('Link de redefinição enviado para seu e-mail!')}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              Alterar
            </button>
          </div>
        </div>

        {/* Verification CTA */}
        {!profile.verified && (
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
              <div>
                <p className="font-semibold text-amber-800">Torne-se um Vendedor Verificado</p>
                <p className="mt-1 text-sm text-amber-700">
                  Complete seu perfil e envie um documento para obter o badge de verificação e ganhar mais confiança dos compradores.
                </p>
                <button
                  onClick={() => toast.success('Em breve! Fluxo de verificação em desenvolvimento.')}
                  className="mt-3 rounded-lg bg-amber-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-600"
                >
                  Iniciar verificação
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
