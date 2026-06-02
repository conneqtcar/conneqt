'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, ShieldCheck, ShieldX, Ban, Crown } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface User {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  kycStatus: string;
  createdAt: string;
}

const kycBadge: Record<string, string> = {
  NOT_SUBMITTED: 'bg-gray-100 text-gray-600',
  PENDING: 'bg-yellow-100 text-yellow-700',
  APPROVED: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
};

export default function UsuariosPage() {
  const qc = useQueryClient();
  const [search, setSearch] = useState('');

  const { data = [], isLoading } = useQuery<User[]>({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data } = await api.get('/admin/users?limit=100');
      return data.data ?? data;
    },
  });

  const blockUser = useMutation({
    mutationFn: (id: string) => api.patch(`/admin/users/${id}/block`),
    onSuccess: () => {
      toast.success('Usuário bloqueado.');
      qc.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  const approveKyc = useMutation({
    mutationFn: (id: string) => api.patch(`/admin/users/${id}/kyc/approve`),
    onSuccess: () => {
      toast.success('KYC aprovado.');
      qc.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  const rejectKyc = useMutation({
    mutationFn: (id: string) => api.patch(`/admin/users/${id}/kyc/reject`),
    onSuccess: () => {
      toast.success('KYC rejeitado.');
      qc.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  const promoteToAdmin = useMutation({
    mutationFn: (id: string) => api.patch(`/admin/users/${id}/promote-admin`),
    onSuccess: (_, id) => {
      const user = data.find((u) => u.id === id);
      toast.success(`${user?.name ?? 'Usuário'} promovido a Administrador.`);
      qc.invalidateQueries({ queryKey: ['admin-users'] });
    },
    onError: () => toast.error('Erro ao promover usuário.'),
  });

  const filtered = data.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Usuários</h1>
      <p className="mt-1 text-gray-500">Gerenciamento de usuários e KYC</p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Buscar por nome ou e-mail..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-brand-gold focus:outline-none"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Usuário', 'Tipo', 'Conta', 'KYC', 'Cadastro', 'Ações'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {user.type === 'ADMIN' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-xs font-semibold text-brand-gold">
                        <Crown className="h-3 w-3" /> Admin
                      </span>
                    ) : (
                      <span className="text-gray-500">{user.type}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${kycBadge[user.kycStatus] ?? ''}`}>
                      {user.kycStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user.kycStatus === 'PENDING' && (
                        <>
                          <button
                            onClick={() => approveKyc.mutate(user.id)}
                            className="rounded p-1 text-green-600 hover:bg-green-50"
                            title="Aprovar KYC"
                          >
                            <ShieldCheck className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => rejectKyc.mutate(user.id)}
                            className="rounded p-1 text-red-600 hover:bg-red-50"
                            title="Rejeitar KYC"
                          >
                            <ShieldX className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      {user.type !== 'ADMIN' && (
                        <button
                          onClick={() => {
                            if (window.confirm(`Promover "${user.name}" a Administrador?\n\nEsta ação dará acesso total ao painel admin.`)) {
                              promoteToAdmin.mutate(user.id);
                            }
                          }}
                          disabled={promoteToAdmin.isPending}
                          className="rounded p-1 text-brand-gold hover:bg-brand-gold/10 disabled:opacity-50"
                          title="Promover a Administrador"
                        >
                          <Crown className="h-4 w-4" />
                        </button>
                      )}
                      {user.status === 'ACTIVE' && user.type !== 'ADMIN' && (
                        <button
                          onClick={() => blockUser.mutate(user.id)}
                          className="rounded p-1 text-gray-500 hover:bg-gray-100"
                          title="Bloquear usuário"
                        >
                          <Ban className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
