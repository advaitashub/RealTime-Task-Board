const Board = require('../models/Board');
const Task = require('../models/Task');
const User = require('../models/User');
const { AppError } = require('../utils/errors');
const { isValidObjectId } = require('../utils/validators');

async function ensureBoardAccess(boardId, userId, options = {}) {
  const { requireOwner = false } = options;

  if (!isValidObjectId(boardId)) {
    throw new AppError(400, 'Invalid board ID.');
  }

  const board = await Board.findById(boardId).populate('members.user', 'name email');
  if (!board) {
    throw new AppError(404, 'Board not found.');
  }

  if (!board.hasMember(userId)) {
    throw new AppError(403, 'You do not have access to this board.');
  }

  if (requireOwner && board.getMemberRole(userId) !== 'owner') {
    throw new AppError(403, 'Only the board owner can perform this action.');
  }

  return board;
}

async function createBoard(title, userId) {
  if (!title || !title.trim()) {
    throw new AppError(400, 'Board title is required.');
  }

  const board = await Board.create({
    title: title.trim(),
    createdBy: userId,
    members: [{ user: userId, role: 'owner' }],
  });

  return board.populate('members.user', 'name email');
}

async function listBoardsForUser(userId) {
  const boards = await Board.find({ 'members.user': userId })
    .populate('members.user', 'name email')
    .sort({ updatedAt: -1 });

  return boards;
}

async function getBoardById(boardId, userId) {
  const board = await ensureBoardAccess(boardId, userId);
  const tasks = await Task.find({ board: boardId })
    .sort({ position: 1, createdAt: 1 })
    .populate([
      { path: 'assignee', select: 'name email' },
      { path: 'createdBy', select: 'name email' },
    ]);
  return {
    ...board.toObject(),
    tasks,
  };
}

async function updateBoard(boardId, userId, payload) {
  const board = await ensureBoardAccess(boardId, userId, { requireOwner: true });

  if (payload.title !== undefined) {
    if (!payload.title || !payload.title.trim()) {
      throw new AppError(400, 'Board title cannot be empty.');
    }
    board.title = payload.title.trim();
  }

  await board.save();
  return board.populate('members.user', 'name email');
}

async function deleteBoard(boardId, userId) {
  const board = await ensureBoardAccess(boardId, userId, { requireOwner: true });

  await Task.deleteMany({ board: boardId });
  await Board.findByIdAndDelete(boardId);

  return { success: true, boardId };
}

async function addBoardMember(boardId, ownerId, email) {
  const board = await ensureBoardAccess(boardId, ownerId, { requireOwner: true });

  if (!email || !email.trim()) {
    throw new AppError(400, 'Member email is required.');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    throw new AppError(404, 'User not found.');
  }

  if (board.hasMember(user._id)) {
    throw new AppError(409, 'User is already a member of this board.');
  }

  board.members.push({ user: user._id, role: 'member' });
  await board.save();

  return board.populate('members.user', 'name email');
}

async function removeBoardMember(boardId, ownerId, memberId) {
  const board = await ensureBoardAccess(boardId, ownerId, { requireOwner: true });

  if (!isValidObjectId(memberId)) {
    throw new AppError(400, 'Invalid member ID.');
  }

  if (memberId.toString() === board.createdBy.toString()) {
    throw new AppError(400, 'The board owner cannot be removed.');
  }

  const memberExists = board.members.some((entry) => entry.user.toString() === memberId.toString());
  if (!memberExists) {
    throw new AppError(404, 'Member not found.');
  }

  board.members = board.members.filter((entry) => entry.user.toString() !== memberId.toString());
  await Task.updateMany({ board: boardId, assignee: memberId }, { $set: { assignee: null } });
  await board.save();

  return board.populate('members.user', 'name email');
}

module.exports = {
  ensureBoardAccess,
  createBoard,
  listBoardsForUser,
  getBoardById,
  updateBoard,
  deleteBoard,
  addBoardMember,
  removeBoardMember,
};
