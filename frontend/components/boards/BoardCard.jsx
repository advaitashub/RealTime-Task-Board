import { Link } from 'react-router-dom';

export function BoardCard({ board, onDelete }) {
  return (
    <div className="board-card">
      <div>
        <small>{board.members?.length || 1} members</small>
        <h3>{board.title}</h3>
      </div>

      <div className="board-card-meta">
        <small>Updated {new Date(board.updatedAt).toLocaleDateString()}</small>
      </div>

      <div className="utility-row">
        <Link to={`/boards/${board._id}`} className="secondary-button" style={{ textAlign: 'center' }}>
          Open
        </Link>
        <button className="danger-button" onClick={() => onDelete(board._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
