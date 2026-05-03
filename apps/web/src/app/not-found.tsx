export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-bold mb-4">404 - Página não encontrada</h2>
      <p className="text-muted-foreground mb-8">
        Não conseguimos encontrar a página que você está procurando.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
