const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchAPI(path: string, options = {}) {
  try {
    const requestUrl = `${STRAPI_URL}/api${path}`;
    
    // Next.js App Router usa fetch extendido para manejar caché
    const response = await fetch(requestUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      console.error(`Error en la API: ${response.statusText}`);
      throw new Error(`Fallo la petición a la API: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

export function getStrapiMedia(url: string) {
  if (url == null) return null;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${STRAPI_URL}${url}`;
}