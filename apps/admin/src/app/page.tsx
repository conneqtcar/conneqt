import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { InspectionQueue } from '@/components/inspections/inspection-queue';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { CalendarDays, Bell } from 'lucide-react';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

function getFormattedDate() {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function DashboardPage() {
  const greeting = getGreeting();
  const date = getFormattedDate();

  return (
    <div className="min-h-full bg-gray-50/50">
      {/* Page Header */}
      <div className="border-b border-gray-100 bg-white px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{greeting}, Admin 👋</h1>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span className="capitalize">{date}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition hover:border-blue-200 hover:bg-amber-50">
              <Bell className="h-4 w-4 text-gray-500" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 shadow-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white">
                A
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Administrador</p>
                <p className="text-[10px] text-gray-400">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Stats */}
        <DashboardStats />

        {/* Bottom grid: Inspection Queue + Recent Activity */}
        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <InspectionQueue />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

