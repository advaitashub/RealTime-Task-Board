import { apiRequest } from '../lib/api';

export async function fetchBoards() {
  const result = await apiRequest('/boards');
  return result.boards || [];
}

export async function createBoard(title) {
  const result = await apiRequest('/boards', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });
  return result.board;
}

export async function fetchBoard(boardId) {
  const result = await apiRequest(`/boards/${boardId}`);
  return result.board;
}

export async function updateBoard(boardId, title) {
  const result = await apiRequest(`/boards/${boardId}`, {
    method: 'PATCH',
    body: JSON.stringify({ title }),
  });
  return result.board;
}

export async function deleteBoard(boardId) {
  const result = await apiRequest(`/boards/${boardId}`, {
    method: 'DELETE',
  });
  return result;
}

export async function addBoardMember(boardId, email) {
  const result = await apiRequest(`/boards/${boardId}/members`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  return result.board;
}

export async function removeBoardMember(boardId, memberId) {
  const result = await apiRequest(`/boards/${boardId}/members/${memberId}`, {
    method: 'DELETE',
  });
  return result.board;
}
