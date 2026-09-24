'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest, readStoredSession, writeStoredSession } from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedSession = readStoredSession();
    if (storedSession?.user && storedSession?.token) {
      setUser(storedSession.user);
      setToken(storedSession.token);
    }
    setReady(true);
  }, []);

  const saveSession = (session) => {
    setUser(session.user);
    setToken(session.token);
    writeStoredSession(session);
  };

  const login = async (payload) => {
    const result = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    saveSession({ user: result.user, token: result.token });
    return result;
  };

  const register = async (payload) => {
    const result = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    saveSession({ user: result.user, token: result.token });
    return result;
  };

  const logout = async () => {
    try {
      if (token) {
        await apiRequest('/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      // no-op for stateless JWT logout
    }

    setUser(null);
    setToken(null);
    writeStoredSession(null);
  };

  const value = useMemo(
    () => ({ user, token, ready, login, register, logout }),
    [user, token, ready]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
