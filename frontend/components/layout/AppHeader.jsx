import { Link } from 'react-router-dom';

export function AppHeader({ user, onLogout, title = 'Task Board' }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/dashboard" className="brand">{title}</Link>
        <div className="nav-actions">
          <span className="user-pill">{user?.name || 'Member'}</span>
          <button className="ghost-button" onClick={onLogout}>Log out</button>
        </div>
      </div>
    </header>
  );
}
