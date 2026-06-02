import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade e proteção de dados da plataforma Conneqt — em conformidade com a LGPD.',
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:underline">
        ← Voltar ao início
      </Link>

      <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">Política de Privacidade</h1>
      <p className="mb-10 text-sm text-gray-400">Última atualização: maio de 2026 — Em conformidade com a LGPD (Lei nº 13.709/2018)</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900">

        <section>
          <h2>1. Controlador dos Dados</h2>
          <p>
            A <strong>Conneqt</strong> (CNPJ 41.359.070/0001-18) é a controladora dos dados pessoais coletados nesta
            Plataforma, responsável pelas decisões sobre o tratamento de dados conforme a LGPD.
          </p>
          <p className="mt-2">
            <strong>Encarregado de Proteção de Dados (DPO):</strong>{' '}
            <a href="mailto:privacidade@conneqtcar.com.br" className="text-brand-gold hover:underline">
              privacidade@conneqtcar.com.br
            </a>
          </p>
        </section>

        <section>
          <h2>2. Dados Coletados</h2>
          <p>Coletamos os seguintes dados pessoais:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li><strong>Dados de cadastro:</strong> nome completo, e-mail, telefone, CPF/CNPJ</li>
            <li><strong>Dados de veículos:</strong> informações sobre veículos anunciados (placa, chassi, fotos)</li>
            <li><strong>Dados de uso:</strong> histórico de buscas, propostas, mensagens na Plataforma</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo, cookies de sessão</li>
            <li><strong>Dados financeiros:</strong> apenas confirmação de transações; não armazenamos dados de cartão</li>
          </ul>
        </section>

        <section>
          <h2>3. Finalidade e Base Legal do Tratamento</h2>
          <table className="mt-3 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-2 pr-4 font-semibold text-gray-900">Finalidade</th>
                <th className="py-2 font-semibold text-gray-900">Base Legal (LGPD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="py-2 pr-4">Criação e gerenciamento de conta</td><td className="py-2">Execução de contrato (Art. 7°, V)</td></tr>
              <tr><td className="py-2 pr-4">Intermediação de compra e venda</td><td className="py-2">Execução de contrato (Art. 7°, V)</td></tr>
              <tr><td className="py-2 pr-4">Prevenção a fraudes e segurança</td><td className="py-2">Legítimo interesse (Art. 7°, IX)</td></tr>
              <tr><td className="py-2 pr-4">Comunicações sobre a conta</td><td className="py-2">Execução de contrato (Art. 7°, V)</td></tr>
              <tr><td className="py-2 pr-4">Marketing e comunicações promocionais</td><td className="py-2">Consentimento (Art. 7°, I)</td></tr>
              <tr><td className="py-2 pr-4">Cumprimento de obrigações legais</td><td className="py-2">Obrigação legal (Art. 7°, II)</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>4. Compartilhamento de Dados</h2>
          <p>Seus dados podem ser compartilhados com:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li><strong>Outros usuários:</strong> dados necessários para viabilizar a negociação (nome, telefone após aceite de proposta)</li>
            <li><strong>Prestadores de serviço:</strong> provedores de infraestrutura, pagamento e comunicação, vinculados por contrato de sigilo</li>
            <li><strong>Autoridades públicas:</strong> quando exigido por lei ou ordem judicial</li>
          </ul>
          <p className="mt-3">
            <strong>Não vendemos seus dados pessoais a terceiros.</strong>
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>Utilizamos cookies para:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento da Plataforma (sessão, autenticação)</li>
            <li><strong>Cookies analíticos:</strong> nos ajudam a entender como a Plataforma é utilizada (Google Analytics)</li>
            <li><strong>Cookies de preferência:</strong> memorizam suas configurações e preferências</li>
          </ul>
          <p className="mt-3">
            Você pode controlar o uso de cookies nas configurações do seu navegador. Desabilitar cookies essenciais
            pode afetar o funcionamento da Plataforma.
          </p>
        </section>

        <section>
          <h2>6. Retenção de Dados</h2>
          <p>Seus dados são armazenados pelo tempo necessário para as finalidades descritas:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>Dados de conta ativa: enquanto a conta existir</li>
            <li>Dados de transações: 5 anos (obrigação fiscal e legal)</li>
            <li>Logs de acesso: 6 meses (Marco Civil da Internet)</li>
            <li>Dados de marketing: até revogação do consentimento</li>
          </ul>
        </section>

        <section>
          <h2>7. Seus Direitos (LGPD)</h2>
          <p>Como titular de dados, você tem os seguintes direitos:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li><strong>Acesso:</strong> solicitar confirmação e acesso aos seus dados</li>
            <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados</li>
            <li><strong>Exclusão:</strong> solicitar a eliminação de dados desnecessários ou tratados em desconformidade</li>
            <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
            <li><strong>Revogação de consentimento:</strong> retirar o consentimento dado a qualquer momento</li>
            <li><strong>Oposição:</strong> opor-se ao tratamento realizado com base em legítimo interesse</li>
            <li><strong>Informação:</strong> ser informado sobre entidades públicas e privadas com as quais compartilhamos dados</li>
          </ul>
          <p className="mt-3">
            Para exercer seus direitos, entre em contato pelo e-mail{' '}
            <a href="mailto:privacidade@conneqtcar.com.br" className="text-brand-gold hover:underline">
              privacidade@conneqtcar.com.br
            </a>. Responderemos em até 15 dias.
          </p>
        </section>

        <section>
          <h2>8. Segurança dos Dados</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
            criptografia em trânsito (TLS/HTTPS), autenticação segura com JWT, controle de acesso baseado em funções,
            monitoramento contínuo de segurança e backups regulares.
          </p>
          <p className="mt-3">
            Em caso de incidente de segurança que possa gerar risco relevante, notificaremos a ANPD e os titulados
            afetados nos prazos previstos na LGPD.
          </p>
        </section>

        <section>
          <h2>9. Transferência Internacional</h2>
          <p>
            Utilizamos serviços de infraestrutura de provedores internacionais (ex: servidores em nuvem). Essas
            transferências ocorrem em conformidade com a LGPD, garantindo nível adequado de proteção contratual.
          </p>
        </section>

        <section>
          <h2>10. Contato e Reclamações</h2>
          <p>
            Para exercer seus direitos ou registrar reclamações relacionadas à privacidade, contate nosso DPO:
          </p>
          <p className="mt-2">
            <strong>E-mail:</strong>{' '}
            <a href="mailto:privacidade@conneqtcar.com.br" className="text-brand-gold hover:underline">
              privacidade@conneqtcar.com.br
            </a>
          </p>
          <p className="mt-2">
            Você também pode registrar reclamações perante a{' '}
            <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>{' '}
            em <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">www.gov.br/anpd</a>.
          </p>
        </section>

        <section>
          <h2>11. Alterações nesta Política</h2>
          <p>
            Esta Política pode ser atualizada periodicamente. A data de última atualização está indicada no topo deste
            documento. Alterações significativas serão comunicadas por e-mail ou notificação na Plataforma.
          </p>
        </section>

        <div className="mt-12 rounded-xl border border-brand-gold/20 bg-amber-50 px-6 py-4 text-sm text-amber-800">
          <p className="font-semibold">Dúvidas sobre esta Política?</p>
          <p className="mt-1">
            Entre em contato com nosso time de privacidade:{' '}
            <a href="mailto:privacidade@conneqtcar.com.br" className="font-medium hover:underline">
              privacidade@conneqtcar.com.br
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
