export function ActivityPanel({ items = [] }) {
  return (
    <aside className="activity-panel">
      <h3>Recent activity</h3>
      {items.length === 0 ? (
        <div className="empty-state">No recent activity.</div>
      ) : (
        <ul className="activity-list">
          {items.map((item) => (
            <li key={item._id || `${item.action}-${item.createdAt}`} className="activity-item">
              <strong>{item.action.replace(/_/g, ' ')}</strong>
              <div>
                {item.user?.name || 'Unknown'} • {item.task?.title || 'Task'}
              </div>
              <small>{new Date(item.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
