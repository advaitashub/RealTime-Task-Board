const Task = require('../models/Task');
const { AppError } = require('../utils/errors');
const { isValidObjectId, isValidStatus } = require('../utils/validators');
const { ensureBoardAccess } = require('./boardService');
const { recordBoardActivity } = require('./activityService');
const { getIO } = require('../sockets/socket');
const { emitBoardEvent } = require('../sockets/boardSocket');

async function getTask(taskId) {
  if (!isValidObjectId(taskId)) {
    throw new AppError(400, 'Invalid task ID.');
  }

  const task = await Task.findById(taskId)
    .populate('assignee', 'name email')
    .populate('createdBy', 'name email');

  if (!task) {
    throw new AppError(404, 'Task not found.');
  }

  return task;
}

async function createTask(boardId, payload, userId) {
  const board = await ensureBoardAccess(boardId, userId);
  const title = payload.title ? payload.title.trim() : '';
  const description = payload.description ? payload.description.trim() : '';
  const status = payload.status || 'Todo';

  if (!title) {
    throw new AppError(400, 'Task title is required.');
  }

  if (!isValidStatus(status)) {
    throw new AppError(400, 'Invalid task status.');
  }

  if (payload.assignee && !isValidObjectId(payload.assignee)) {
    throw new AppError(400, 'Invalid assignee ID.');
  }

  if (payload.assignee) {
    if (board.getMemberRole(userId) !== 'owner') {
      throw new AppError(403, 'Only the board owner can assign tasks.');
    }

    const assigneeInBoard = board.members.some((member) => {
      const memberId = member.user && member.user._id ? member.user._id.toString() : member.user.toString();
      return memberId === payload.assignee.toString();
    });

    if (!assigneeInBoard) {
      throw new AppError(400, 'Assigned user must be a member of the board.');
    }
  }

  const taskCount = await Task.countDocuments({ board: boardId });
  const task = await Task.create({
    board: boardId,
    title,
    description,
    status,
    assignee: payload.assignee || null,
    createdBy: userId,
    position: taskCount,
    version: 1,
  });

  await recordBoardActivity({
    boardId,
    taskId: task._id,
    userId,
    action: 'TASK_CREATED',
    metadata: { title, status },
  });

  await task.populate([
    { path: 'assignee', select: 'name email' },
    { path: 'createdBy', select: 'name email' },
  ]);
  const io = getIO();
  if (io) {
    emitBoardEvent(io, boardId, 'task:created', { task: task.toObject() });
  }

  return task;
}

async function updateTask(taskId, userId, payload) {
  const task = await getTask(taskId);
  const board = await ensureBoardAccess(task.board.toString(), userId);

  const incomingVersion = payload.version;
  if (incomingVersion !== undefined && incomingVersion !== task.version) {
    throw new AppError(409, 'Task was updated by another user. Please refresh and try again.', {
      currentVersion: task.version,
    });
  }

  const updates = { ...payload };
  delete updates.version;

  if (updates.title !== undefined) {
    if (!updates.title || !updates.title.trim()) {
      throw new AppError(400, 'Task title cannot be empty.');
    }
    updates.title = updates.title.trim();
  }

  if (updates.description !== undefined) {
    updates.description = updates.description.trim();
  }

  if (updates.status !== undefined && !isValidStatus(updates.status)) {
    throw new AppError(400, 'Invalid task status.');
  }

  if (updates.assignee !== undefined) {
    if (!updates.assignee) {
      updates.assignee = null;
    } else if (!isValidObjectId(updates.assignee)) {
      throw new AppError(400, 'Invalid assignee ID.');
    }

    const currentAssigneeId = task.assignee?._id
      ? task.assignee._id.toString()
      : task.assignee?.toString() || null;
    const requestedAssigneeId = updates.assignee ? updates.assignee.toString() : null;

    if (requestedAssigneeId !== currentAssigneeId && board.getMemberRole(userId) !== 'owner') {
      throw new AppError(403, 'Only the board owner can assign tasks.');
    }
  }

  if (updates.assignee) {
    const hasAssignee = board.members.some((member) => {
      const memberId = member.user && member.user._id ? member.user._id.toString() : member.user.toString();
      return memberId === updates.assignee.toString();
    });

    if (!hasAssignee) {
      throw new AppError(400, 'Assignee must be a member of the board.');
    }
  }

  const original = {
    title: task.title,
    description: task.description,
    status: task.status,
    assignee: task.assignee,
  };

  Object.keys(updates).forEach((key) => {
    if (updates[key] !== undefined) {
      task[key] = updates[key];
    }
  });

  task.version += 1;
  await task.save();

  const boardId = task.board.toString();
  if (original.status !== task.status) {
    await recordBoardActivity({
      boardId,
      taskId: task._id,
      userId,
      action: task.status === 'Done' ? 'TASK_COMPLETED' : 'TASK_MOVED',
      metadata: { from: original.status, to: task.status },
    });
  }

  if (updates.assignee !== undefined && updates.assignee !== original.assignee?.toString()) {
    await recordBoardActivity({
      boardId,
      taskId: task._id,
      userId,
      action: 'TASK_ASSIGNED',
      metadata: { from: original.assignee ? original.assignee.toString() : null, to: task.assignee ? task.assignee.toString() : null },
    });
  }

  if (updates.title && updates.title !== original.title) {
    await recordBoardActivity({
      boardId,
      taskId: task._id,
      userId,
      action: 'TASK_EDITED',
      metadata: { from: original.title, to: updates.title },
    });
  }

  if (updates.description !== undefined && updates.description !== original.description) {
    await recordBoardActivity({
      boardId,
      taskId: task._id,
      userId,
      action: 'TASK_EDITED',
      metadata: { field: 'description' },
    });
  }

  await task.populate([
    { path: 'assignee', select: 'name email' },
    { path: 'createdBy', select: 'name email' },
  ]);
  const io = getIO();
  if (io) {
    emitBoardEvent(io, boardId, 'task:updated', { task: task.toObject() });
  }

  return task;
}

async function deleteTask(taskId, userId) {
  const task = await getTask(taskId);
  await ensureBoardAccess(task.board.toString(), userId);

  await recordBoardActivity({
    boardId: task.board,
    taskId: task._id,
    userId,
    action: 'TASK_DELETED',
    metadata: { title: task.title },
  });

  const boardId = task.board.toString();
  await Task.findByIdAndDelete(taskId);

  const io = getIO();
  if (io) {
    emitBoardEvent(io, boardId, 'task:deleted', { taskId, boardId });
  }

  return { success: true, taskId };
}

module.exports = { createTask, updateTask, deleteTask, getTask };
