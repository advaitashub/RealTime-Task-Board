'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppHeader } from '../../../components/layout/AppHeader';
import { ActivityPanel } from '../../../components/activity/ActivityPanel';
import { TaskBoard } from '../../../components/tasks/TaskBoard';
import { TaskModal } from '../../../components/tasks/TaskModal';
import { useAuth } from '../../../context/AuthContext';
import {
  addBoardMember,
  deleteBoard,
  fetchBoard,
  removeBoardMember,
  updateBoard,
} from '../../../services/boardService';
import { fetchBoardActivity } from '../../../services/activityService';
import { createTask, deleteTask, updateTask } from '../../../services/taskService';
import { useBoardSocket } from '../../../hooks/useBoardSocket';

const EMPTY_FORM = {
  title: '',
  description: '',
  status: 'Todo',
  assignee: '',
};

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() || '').join('');
}

export default function BoardPage() {
  const params = useParams();
  const boardId = params.id;
  const navigate = useNavigate();
  const { user, token, ready, logout } = useAuth();

  const [board, setBoard] = useState(null);
  const [boardName, setBoardName] = useState('');
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskForm, setTaskForm] = useState(null);
  const [error, setError] = useState('');
  const [membersOpen, setMembersOpen] = useState(false);
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [memberEmail, setMemberEmail] = useState('');
  const [memberError, setMemberError] = useState('');
  const [memberSuccess, setMemberSuccess] = useState('');
  const [memberLoading, setMemberLoading] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState(null);
  const [removeLoading, setRemoveLoading] = useState(false);
  const saveInProgress = useRef(false);

  const currentUserRole = useMemo(() => {
    if (!board?.members?.length) return 'member';
    const match = board.members.find((member) => {
      const targetId = member.user?._id || member.user;
      return targetId?.toString() === user?._id?.toString();
    });
    return match?.role || 'member';
  }, [board, user]);

  const isOwner = currentUserRole === 'owner';

  const loadBoard = async () => {
    try {
      const result = await fetchBoard(boardId);
      setBoard(result);
      setBoardName(result.title);
    } catch (err) {
      setError(err.message || 'Unable to load board.');
    }
  };

  const loadActivity = async () => {
    try {
      const result = await fetchBoardActivity(boardId);
      setActivities(result);
    } catch (err) {
      setError(err.message || 'Unable to load activity.');
    }
  };

  useEffect(() => {
    if (!ready) return;
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    Promise.all([loadBoard(), loadActivity()]).finally(() => setLoading(false));
  }, [ready, token, navigate, boardId]);

  useBoardSocket(boardId, (event, payload) => {
    if (!board) return;

    if (event === 'task:created' || event === 'task:updated') {
      const incomingTask = payload.task;
      setBoard((current) => {
        if (!current) return current;
        const existing = current.tasks.filter((task) => task._id !== incomingTask._id);
        return { ...current, tasks: [...existing, incomingTask] };
      });
      loadActivity();
    }

    if (event === 'task:deleted') {
      setBoard((current) => {
        if (!current) return current;
        return { ...current, tasks: current.tasks.filter((task) => task._id !== payload.taskId) };
      });
      loadActivity();
    }
  });

  const openNewTask = () => {
    setTaskForm({ ...EMPTY_FORM });
    setModalOpen(true);
  };

  const openTask = (task) => {
    setTaskForm({
      _id: task._id,
      title: task.title,
      description: task.description || '',
      status: task.status,
      assignee: task.assignee?._id || '',
      version: task.version || 1,
    });
    setModalOpen(true);
  };

  const upsertTask = (current, incomingTask) => {
    const tasks = current?.tasks || [];
    const withoutIncomingTask = tasks.filter((task) => task._id !== incomingTask._id);
    return { ...current, tasks: [...withoutIncomingTask, incomingTask] };
  };

  const handleSaveTask = async (form) => {
    if (saveInProgress.current) return;

    if (!form.title || !form.title.trim()) {
      setError('Task title is required.');
      return;
    }

    try {
      saveInProgress.current = true;
      setSaving(true);
      setError('');

      const payload = {
        title: form.title.trim(),
        description: form.description || '',
        status: form.status || 'Todo',
      };

      if (isOwner) {
        payload.assignee = form.assignee || null;
      }

      if (form._id) {
        const result = await updateTask(form._id, { ...payload, version: form.version || 1 });
        setBoard((current) => upsertTask(current, result));
      } else {
        const result = await createTask(boardId, payload);
        setBoard((current) => upsertTask(current, result));
      }

      setModalOpen(false);
      setTaskForm(null);
      loadActivity();
    } catch (err) {
      setError(err.message || 'Unable to save task.');
    } finally {
      saveInProgress.current = false;
      setSaving(false);
    }
  };

  const handleDeleteTask = async (task) => {
    if (!window.confirm(`Delete "${task.title}"?`)) return;

    try {
      await deleteTask(task._id);
      setBoard((current) => ({
        ...current,
        tasks: current.tasks.filter((item) => item._id !== task._id),
      }));
      loadActivity();
    } catch (err) {
      setError(err.message || 'Unable to delete task.');
    }
  };

  const handleMoveTask = async (task, status) => {
    try {
      const payload = {
        title: task.title,
        description: task.description || '',
        status,
        version: task.version || 1,
      };

      if (isOwner) {
        payload.assignee = task.assignee?._id || null;
      }

      const result = await updateTask(task._id, payload);

      setBoard((current) => ({
        ...current,
        tasks: current.tasks.map((item) => (item._id === result._id ? result : item)),
      }));
    } catch (err) {
      setError(err.message || 'Unable to move task.');
    }
  };

  const handleRenameBoard = async () => {
    if (!boardName.trim()) return;
    try {
      const result = await updateBoard(boardId, boardName.trim());
      setBoard((current) => ({ ...current, title: result.title }));
      setError('');
    } catch (err) {
      setError(err.message || 'Unable to rename board.');
    }
  };

  const handleDeleteBoardAction = async () => {
    if (!window.confirm('Delete this board? This action removes tasks and activity.')) return;

    try {
      await deleteBoard(boardId);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Unable to delete board.');
    }
  };

  const handleAddMember = async (event) => {
    event.preventDefault();
    if (!memberEmail.trim()) {
      setMemberError('Enter a user email.');
      return;
    }

    try {
      setMemberLoading(true);
      setMemberError('');
      setMemberSuccess('');
      const updatedBoard = await addBoardMember(boardId, memberEmail.trim());
      setBoard(updatedBoard);
      setAddMemberOpen(false);
      setMemberEmail('');
      setMemberSuccess('Member added successfully.');
      setMembersOpen(true);
    } catch (err) {
      setMemberError(err.message || 'Unable to add member.');
    } finally {
      setMemberLoading(false);
    }
  };

  const handleRemoveMember = async () => {
    if (!memberToRemove) return;

    try {
      setRemoveLoading(true);
      const updatedBoard = await removeBoardMember(boardId, memberToRemove.user._id);
      setBoard(updatedBoard);
      setMemberToRemove(null);
      setMemberSuccess('Member removed from the board.');
      setMembersOpen(true);
    } catch (err) {
      setMemberError(err.message || 'Unable to remove member.');
    } finally {
      setRemoveLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading || !board) {
    return (
      <div className="page-shell">
        <AppHeader user={user} onLogout={handleLogout} />
        <main className="container">
          <div className="loading-block">Loading board...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <AppHeader user={user} onLogout={handleLogout} />
      <main className="container board-page">
        <div className="board-topbar">
          <div className="board-title-wrap">
            <Link to="/dashboard" className="back-link">← Dashboard</Link>
            <div className="board-summary">
              <h1>{board.title}</h1>
              <div className="board-summary-meta">
                <span>{board.members?.length || 0} members</span>
                <span>{board.tasks?.length || 0} tasks</span>
              </div>
            </div>
          </div>

          <div className="board-topbar-actions">
            <button className="secondary-button" onClick={() => setMembersOpen(true)}>
              Members
            </button>
            {isOwner ? (
              <button className="primary-button" onClick={openNewTask}>
                + Add task
              </button>
            ) : null}
          </div>
        </div>

        <div className="board-control-panel">
          {isOwner ? (
            <div className="inline-rename">
              <input
                value={boardName}
                onChange={(event) => setBoardName(event.target.value)}
                placeholder="Board title"
              />
              <button className="secondary-button" onClick={handleRenameBoard}>Rename</button>
              <button className="danger-button" onClick={handleDeleteBoardAction}>Delete board</button>
            </div>
          ) : (
            <div className="panel-note">
              <span className="role-badge member">Member</span>
              <span>Board access is read/write for tasks and activity.</span>
            </div>
          )}
        </div>

        {error ? <div className="message error">{error}</div> : null}

        <div className="board-shell">
          <div className="board-main-panel">
            <TaskBoard
              tasks={board.tasks || []}
              onOpenTask={openTask}
              onMoveTask={handleMoveTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>

          <ActivityPanel items={activities} />
        </div>
      </main>

      <TaskModal
        visible={modalOpen}
        form={taskForm}
        members={board.members || []}
        canEditAssignee={isOwner}
        setForm={setTaskForm}
        onClose={() => {
          setModalOpen(false);
          setTaskForm(null);
        }}
        onSubmit={handleSaveTask}
        saving={saving}
      />

      {membersOpen ? (
        <div className="modal-backdrop" onClick={() => setMembersOpen(false)}>
          <div className="modal members-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header members-header">
              <div>
                <p className="eyebrow">Board members</p>
                <h3>Members</h3>
              </div>
              {isOwner ? (
                <button
                  className="primary-button"
                  onClick={() => {
                    setAddMemberOpen(true);
                    setMemberError('');
                    setMemberSuccess('');
                  }}
                >
                  + Add Member
                </button>
              ) : null}
            </div>

            {memberError ? <div className="message error">{memberError}</div> : null}
            {memberSuccess ? <div className="message success">{memberSuccess}</div> : null}

            <div className="member-list">
              {(board.members || []).map((memberEntry) => {
                const user = memberEntry.user || memberEntry;
                const role = memberEntry.role || 'member';
                const isBoardOwner = role === 'owner';

                return (
                  <div key={user._id} className="member-item">
                    <div className="member-avatar">{getInitials(user.name)}</div>
                    <div className="member-details">
                      <div className="member-name-row">
                        <strong>{user.name}</strong>
                        <span className={`role-badge ${role}`}>{role === 'owner' ? 'Owner' : 'Member'}</span>
                      </div>
                      <small>{user.email}</small>
                    </div>
                    {isOwner && !isBoardOwner ? (
                      <button
                        className="text-button danger"
                        onClick={() => setMemberToRemove({ user, role })}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="modal-actions">
              <button className="ghost-button" onClick={() => setMembersOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      ) : null}

      {addMemberOpen ? (
        <div className="modal-backdrop" onClick={() => setAddMemberOpen(false)}>
          <div className="modal compact-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow">Invite a teammate</p>
                <h3>Add member</h3>
              </div>
            </div>

            <form onSubmit={handleAddMember} className="form-grid">
              <div className="input-wrap">
                <label htmlFor="member-email">Email</label>
                <input
                  id="member-email"
                  type="email"
                  value={memberEmail}
                  onChange={(event) => setMemberEmail(event.target.value)}
                  placeholder="name@example.com"
                />
              </div>

              {memberError ? <div className="message error">{memberError}</div> : null}

              <div className="modal-actions">
                <button type="button" className="ghost-button" onClick={() => setAddMemberOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="primary-button" disabled={memberLoading}>
                  {memberLoading ? 'Adding...' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {memberToRemove ? (
        <div className="modal-backdrop" onClick={() => setMemberToRemove(null)}>
          <div className="modal compact-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow">Remove member</p>
                <h3>Remove {memberToRemove.user.name}?</h3>
              </div>
            </div>

            <p className="confirmation-copy">
              This removes them from the board and clears any task assignment linked to this board.
            </p>

            <div className="modal-actions">
              <button className="ghost-button" onClick={() => setMemberToRemove(null)}>Cancel</button>
              <button className="danger-button" onClick={handleRemoveMember} disabled={removeLoading}>
                {removeLoading ? 'Removing...' : 'Remove'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
