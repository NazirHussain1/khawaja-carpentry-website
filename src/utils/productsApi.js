export async function fetchManagedProducts() {
  const endpoint = `${import.meta.env.VITE_API_BASE_URL || ''}/api/products`;
  const response = await fetch(endpoint);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Unable to load products.');
  return data.products || [];
}
