const baseURL = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');

/**
 * Small fetch wrapper used by every service.  It keeps cookies enabled for
 * session-based backends and turns non-2xx responses into useful Errors.
 */
export default async function api(path, options = {}) {
  const response = await fetch(`${baseURL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      (typeof body === 'object' && (body.message || body.error)) ||
      (typeof body === 'string' && body) ||
      'Something went wrong. Please try again.';
    throw new Error(message);
  }

  return body;
}
