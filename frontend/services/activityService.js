import { apiRequest } from '../lib/api';

export async function fetchBoardActivity(boardId) {
  const result = await apiRequest(`/boards/${boardId}/activity`);
  return result.activities || [];
}
