export function TaskBoard({ tasks, onOpenTask, onMoveTask, onDeleteTask }) {
  const columns = [
    { label: 'Todo', value: 'Todo' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Done', value: 'Done' },
  ];

  const handleDrop = (status, event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');
    const task = tasks.find((item) => item._id === taskId);
    if (task && task.status !== status) {
      onMoveTask(task, status);
    }
  };

  return (
    <div className="columns">
      {columns.map((column) => (
        <div
          key={column.value}
          className="column"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleDrop(column.value, event)}
        >
          <h4>{column.label}</h4>

          {tasks.filter((task) => task.status === column.value).length === 0 ? (
            <div className="empty-state">No tasks</div>
          ) : (
            <div className="task-list">
              {tasks
                .filter((task) => task.status === column.value)
                .map((task) => (
                  <div
                    key={task._id}
                    className="task-card"
                    draggable
                    onDragStart={(event) => event.dataTransfer.setData('taskId', task._id)}
                  >
                    <div>
                      <h5>{task.title}</h5>
                      <p>{task.description || 'No description provided.'}</p>
                    </div>

                    <div className="task-meta">
                      <span>{task.assignee?.name || 'Unassigned'}</span>
                      <span>{task.version || 1}</span>
                    </div>

                    <div className="task-actions">
                      <button className="secondary-button" onClick={() => onOpenTask(task)}>
                        Edit
                      </button>
                      <button className="danger-button" onClick={() => onDeleteTask(task)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
