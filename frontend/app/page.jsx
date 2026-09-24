'use client';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const { ready, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!ready) return;
    navigate(token ? '/dashboard' : '/login', { replace: true });
  }, [ready, token, navigate]);

  return <div className="container">Loading...</div>;
}
