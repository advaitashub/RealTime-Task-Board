import { BoardCard } from './BoardCard';

export function BoardList({ boards = [], onDelete }) {
  if (boards.length === 0) {
    return <div className="empty-state">No boards yet. Start with a new board.</div>;
  }

  return (
    <div className="board-grid">
      {boards.map((board) => (
        <BoardCard key={board._id} board={board} onDelete={onDelete} />
      ))}
    </div>
  );
}
