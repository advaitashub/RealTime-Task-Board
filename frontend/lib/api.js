const API_BASE_URL = (() => {
  const configuredBase = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').trim();
  const normalizedBase = configuredBase.replace(/\/+$/, '');
  return normalizedBase.endsWith('/api') ? normalizedBase : `${normalizedBase}/api`;
})();

function readStoredSession() {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem('task-board-session');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeStoredSession(session) {
  if (typeof window === 'undefined') return;
  if (!session) {
    window.localStorage.removeItem('task-board-session');
    return;
  }
  window.localStorage.setItem('task-board-session', JSON.stringify(session));
}

export async function apiRequest(path, options = {}) {
  const storedSession = readStoredSession();
  const token = storedSession?.token;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const payload = await response.text();
  const data = payload ? JSON.parse(payload) : {};

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
}

export { API_BASE_URL, readStoredSession, writeStoredSession };
