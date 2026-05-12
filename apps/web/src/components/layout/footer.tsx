import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 sm:flex-row md:px-12">
        <div className="flex items-center gap-2 font-extrabold text-gray-900">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-dark">
            <img src="/icons/logo.svg" alt="Conneqt" className="h-4 w-4" />
          </div>
          Conneqt
        </div>
        <div className="text-center text-xs leading-relaxed">
          <p className="text-gray-500">© {new Date().getFullYear()} Conneqt. Todos os direitos reservados.</p>
          <p className="mt-0.5 text-gray-400">CNPJ 41.359.070/0001-18</p>
        </div>
        <div className="flex gap-4 text-xs">
          <Link href="/buscar" className="transition hover:text-gray-700">Buscar</Link>
          <Link href="/vender" className="transition hover:text-gray-700">Vender</Link>
          <Link href="/entrar" className="transition hover:text-gray-700">Entrar</Link>
        </div>
      </div>
    </footer>
  );
}
