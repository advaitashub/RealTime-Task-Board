import { apiRequest } from '../lib/api';

export async function createTask(boardId, payload) {
  const result = await apiRequest(`/boards/${boardId}/tasks`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return result.task;
}

export async function updateTask(taskId, payload) {
  const result = await apiRequest(`/tasks/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  return result.task;
}

export async function deleteTask(taskId) {
  const result = await apiRequest(`/tasks/${taskId}`, {
    method: 'DELETE',
  });
  return result;
}
