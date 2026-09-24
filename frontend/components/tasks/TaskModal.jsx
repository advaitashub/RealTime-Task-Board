export function TaskModal({
  visible,
  form,
  members,
  canEditAssignee,
  onClose,
  onSubmit,
  setForm,
  saving,
}) {
  if (!visible || !form) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3>{form._id ? 'Edit task' : 'Add task'}</h3>
          <button className="ghost-button" onClick={onClose}>Close</button>
        </div>

        <div className="form-grid">
          <div className="input-wrap">
            <label>Title</label>
            <input
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              placeholder="Task title"
            />
          </div>

          <div className="input-wrap">
            <label>Description</label>
            <textarea
              value={form.description || ''}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              rows={4}
              placeholder="Add details"
            />
          </div>

          <div className="input-wrap">
            <label>Status</label>
            <select
              value={form.status || 'Todo'}
              onChange={(event) => setForm({ ...form, status: event.target.value })}
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="input-wrap">
            <label>Assignee</label>
            <select
              value={form.assignee || ''}
              onChange={(event) => setForm({ ...form, assignee: event.target.value })}
              disabled={!canEditAssignee}
            >
              <option value="">Unassigned</option>
              {members.map((member) => {
                const user = member.user || member;
                return (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            {!canEditAssignee ? (
              <small className="field-hint">Only the board owner can change task assignments.</small>
            ) : null}
          </div>
        </div>

        <div className="modal-actions">
          <button className="ghost-button" onClick={onClose}>Cancel</button>
          <button className="primary-button" onClick={() => onSubmit(form)} disabled={saving}>
            {saving ? 'Saving...' : 'Save task'}
          </button>
        </div>
      </div>
    </div>
  );
}
