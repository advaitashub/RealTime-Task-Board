'use client';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BoardList } from '../../components/boards/BoardList';
import { createBoard, deleteBoard, fetchBoards } from '../../services/boardService';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { token, ready, logout, user } = useAuth();
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!ready) return;
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    loadBoards();
  }, [ready, token, navigate]);

  async function loadBoards() {
    try {
      setLoading(true);
      const result = await fetchBoards();
      setBoards(result);
    } catch (err) {
      setError(err.message || 'Unable to load boards.');
    } finally {
      setLoading(false);
    }
  }

  const handleCreateBoard = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    try {
      setError('');
      await createBoard(title.trim());
      setTitle('');
      loadBoards();
    } catch (err) {
      setError(err.message || 'Unable to create board.');
    }
  };

  const handleDeleteBoard = async (boardId) => {
    if (!window.confirm('Delete this board?')) return;

    try {
      await deleteBoard(boardId);
      setBoards((current) => current.filter((board) => board._id !== boardId));
    } catch (err) {
      setError(err.message || 'Unable to delete board.');
    }
  };

  return (
    <div className="page-shell">
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">Task Board</div>
          <div className="nav-actions">
            <span className="user-pill">{user?.name || 'Member'}</span>
            <button className="ghost-button" onClick={() => logout().then(() => navigate('/login'))}>
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="toolbar">
          <div>
            <h2 className="section-title">Boards</h2>
            <p style={{ margin: 0, color: '#64748b' }}>Track work across your active projects.</p>
          </div>
        </div>

        <form onSubmit={handleCreateBoard} className="utility-row" style={{ marginBottom: '24px', alignItems: 'stretch' }}>
          <input
            style={{ flex: 1 }}
            className="input-wrap"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Create a new board"
          />
          <button className="primary-button" type="submit" disabled={!title.trim()}>
            Create board
          </button>
        </form>

        {error ? <div className="inline-message" style={{ marginBottom: '18px' }}>{error}</div> : null}

        {loading ? (
          <div className="empty-state">Loading boards...</div>
        ) : (
          <BoardList boards={boards} onDelete={handleDeleteBoard} />
        )}
      </main>
    </div>
  );
}
