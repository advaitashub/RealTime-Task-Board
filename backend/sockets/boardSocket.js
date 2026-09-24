const { ensureBoardAccess } = require('../services/boardService');

function emitBoardEvent(io, boardId, event, payload) {
  if (!io || !boardId) return;
  io.to(`board:${boardId}`).emit(event, payload);
}

function registerBoardHandlers(io, socket) {
  socket.on('board:join', async ({ boardId }) => {
    try {
      if (!boardId) {
        socket.emit('board:join:error', { message: 'Board ID is required.' });
        return;
      }

      await ensureBoardAccess(boardId, socket.user._id);
      socket.join(`board:${boardId}`);
      socket.emit('board:joined', { boardId });
    } catch (error) {
      socket.emit('board:join:error', { message: error.message || 'Unable to join board.' });
    }
  });

  socket.on('board:leave', ({ boardId }) => {
    if (boardId) {
      socket.leave(`board:${boardId}`);
    }
  });
}

module.exports = { emitBoardEvent, registerBoardHandlers };
