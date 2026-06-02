import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso da plataforma Conneqt — leia antes de criar sua conta.',
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:underline">
        ← Voltar ao início
      </Link>

      <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">Termos de Uso</h1>
      <p className="mb-10 text-sm text-gray-400">Última atualização: maio de 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900">

        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar a plataforma Conneqt (&ldquo;Plataforma&rdquo;), você concorda integralmente com estes Termos de Uso e com nossa{' '}
            <Link href="/privacidade" className="text-brand-gold hover:underline">Política de Privacidade</Link>.
            Se não concordar, não utilize a Plataforma.
          </p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>
            A Conneqt é uma plataforma de intermediação para compra e venda de veículos seminovos. Oferecemos:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>Cadastro e anúncio de veículos com laudo digital de inspeção</li>
            <li>Busca e filtragem de veículos verificados</li>
            <li>Sistema de propostas e negociação entre compradores e vendedores</li>
            <li>Chat seguro entre as partes</li>
          </ul>
          <p className="mt-3">
            A Conneqt não é parte nas transações entre compradores e vendedores; atua apenas como intermediária.
          </p>
        </section>

        <section>
          <h2>3. Cadastro e Conta do Usuário</h2>
          <p>
            Para utilizar funcionalidades avançadas, você deve criar uma conta fornecendo informações verídicas e atualizadas.
            Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
          </p>
          <p className="mt-3">
            A Conneqt reserva-se o direito de suspender ou excluir contas que violem estes Termos, usem informações falsas
            ou pratiquem atividades fraudulentas.
          </p>
        </section>

        <section>
          <h2>4. Responsabilidades do Usuário</h2>
          <p>Ao utilizar a Plataforma, você se compromete a:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>Fornecer informações verdadeiras sobre os veículos anunciados</li>
            <li>Não publicar anúncios fraudulentos ou enganosos</li>
            <li>Não utilizar a Plataforma para fins ilegais</li>
            <li>Respeitar os direitos de outros usuários</li>
            <li>Não realizar engenharia reversa ou tentativas de comprometer a segurança da Plataforma</li>
          </ul>
        </section>

        <section>
          <h2>5. Anúncios e Conteúdo</h2>
          <p>
            O conteúdo dos anúncios é de responsabilidade exclusiva dos vendedores. A Conneqt pode remover anúncios que
            violem estes Termos ou a legislação vigente, sem aviso prévio. A Conneqt não garante a exatidão das informações
            presentes nos anúncios.
          </p>
        </section>

        <section>
          <h2>6. Inspeção e Laudo Digital</h2>
          <p>
            O laudo digital de inspeção é gerado com base em avaliação técnica. Embora nos empenhemos para garantir a
            qualidade das inspeções, a Conneqt não se responsabiliza por defeitos ocultos não identificados no processo de
            inspeção. Recomendamos que o comprador realize sua própria due diligence antes de concluir qualquer negociação.
          </p>
        </section>

        <section>
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A Conneqt não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso
            da Plataforma, incluindo perdas financeiras em transações entre usuários. A Plataforma é fornecida &ldquo;como está&rdquo;,
            sem garantias de disponibilidade ininterrupta.
          </p>
        </section>

        <section>
          <h2>8. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo da Plataforma (logotipos, textos, imagens, software) é de propriedade da Conneqt ou licenciado
            para uso. É proibida a reprodução, distribuição ou criação de obras derivadas sem autorização expressa.
          </p>
        </section>

        <section>
          <h2>9. Privacidade e LGPD</h2>
          <p>
            O tratamento de dados pessoais realizado pela Conneqt está descrito em nossa{' '}
            <Link href="/privacidade" className="text-brand-gold hover:underline">Política de Privacidade</Link>,
            em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
        </section>

        <section>
          <h2>10. Alterações nos Termos</h2>
          <p>
            A Conneqt pode alterar estes Termos a qualquer momento. Alterações significativas serão comunicadas por e-mail
            ou notificação na Plataforma. O uso continuado após a comunicação implica aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2>11. Foro e Lei Aplicável</h2>
          <p>
            Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para
            dirimir quaisquer controvérsias decorrentes deste instrumento.
          </p>
        </section>

        <section>
          <h2>12. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos, entre em contato pelo e-mail{' '}
            <a href="mailto:juridico@conneqtcar.com.br" className="text-brand-gold hover:underline">
              juridico@conneqtcar.com.br
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
