const Activity = require('../models/Activity');
const { AppError } = require('../utils/errors');
const { isValidObjectId } = require('../utils/validators');
const { ensureBoardAccess } = require('./boardService');

async function recordBoardActivity({ boardId, taskId = null, userId, action, metadata = {} }) {
  if (!isValidObjectId(boardId) || !isValidObjectId(userId)) {
    throw new AppError(400, 'Invalid activity data.');
  }

  const entry = await Activity.create({
    board: boardId,
    task: taskId,
    user: userId,
    action,
    metadata,
  });

  await entry.populate([
    { path: 'user', select: 'name email' },
    { path: 'task', select: 'title' },
  ]);

  return entry;
}

async function getBoardActivity(boardId, userId) {
  await ensureBoardAccess(boardId, userId);

  const entries = await Activity.find({ board: boardId })
    .populate('user', 'name email')
    .populate('task', 'title')
    .sort({ createdAt: -1 })
    .limit(30);

  return entries;
}

module.exports = { recordBoardActivity, getBoardActivity };
