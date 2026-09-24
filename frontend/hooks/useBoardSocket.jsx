'use client';

import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from '../context/AuthContext';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

export function useBoardSocket(boardId, onEvent) {
  const { token } = useAuth();
  const socketRef = useRef(null);

  useEffect(() => {
    if (!boardId || !token) return undefined;

    const socket = io(SOCKET_URL, {
      auth: {
        token,
      },
      transports: ['websocket'],
    });

    socketRef.current = socket;
    socket.emit('board:join', { boardId });

    socket.on('task:created', (payload) => onEvent('task:created', payload));
    socket.on('task:updated', (payload) => onEvent('task:updated', payload));
    socket.on('task:deleted', (payload) => onEvent('task:deleted', payload));
    socket.on('activity:created', (payload) => onEvent('activity:created', payload));

    return () => {
      socket.emit('board:leave', { boardId });
      socket.disconnect();
    };
  }, [boardId, token, onEvent]);

  return socketRef.current;
}
