/**
 * Cliente API para uso em Server Components (Next.js).
 * Em modo demo (NEXT_PUBLIC_DEMO_MODE=true), retorna dados mock sem chamar a API.
 */
import { MOCK_LISTINGS } from './demo-mock';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';

async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const apiServer = {
  listings: {
    findById: (id: string) => {
      if (IS_DEMO) {
        const found = MOCK_LISTINGS.find((l) => l.id === id) ?? MOCK_LISTINGS[0];
        return Promise.resolve(found as never);
      }
      return fetchApi<{ vehicle: { brand: string; model: string; year: number }; price: number; description: string | null }>(
        `/listings/${id}`,
        { next: { revalidate: 20, tags: [`listing-${id}`] } },
      );
    },
    search: (params: Record<string, string | undefined>) => {
      if (IS_DEMO) {
        return Promise.resolve({ data: MOCK_LISTINGS, total: MOCK_LISTINGS.length });
      }
      const query = new URLSearchParams(
        Object.entries(params).filter(([, v]) => v !== undefined) as [string, string][],
      ).toString();
      return fetchApi(`/listings?${query}`, { next: { revalidate: 60 } });
    },
  },
};
