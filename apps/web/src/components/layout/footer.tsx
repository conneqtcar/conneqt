import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-extrabold text-gray-900">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-dark">
                <img src="/icons/logo.svg" alt="Conneqt" className="h-4 w-4" />
              </div>
              Conneqt
            </div>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-gray-400">
              Compre e venda carros com segurança. Cada veículo inspecionado e verificado.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Plataforma</p>
              <ul className="space-y-2">
                <li><Link href="/buscar" className="text-gray-400 transition hover:text-gray-700">Buscar veículos</Link></li>
                <li><Link href="/vender" className="text-gray-400 transition hover:text-gray-700">Vender</Link></li>
                <li><Link href="/entrar" className="text-gray-400 transition hover:text-gray-700">Entrar</Link></li>
                <li><Link href="/cadastro" className="text-gray-400 transition hover:text-gray-700">Criar conta</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Legal</p>
              <ul className="space-y-2">
                <li><Link href="/termos" className="text-gray-400 transition hover:text-gray-700">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="text-gray-400 transition hover:text-gray-700">Privacidade</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-gray-400 md:px-12">
          <p>© {new Date().getFullYear()} Conneqt. Todos os direitos reservados. CNPJ 41.359.070/0001-18</p>
        </div>
      </div>
    </footer>
  );
}
