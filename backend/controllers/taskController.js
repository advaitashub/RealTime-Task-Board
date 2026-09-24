const { asyncHandler } = require('../utils/errors');
const { createTask, updateTask, deleteTask } = require('../services/taskService');

const createTaskHandler = asyncHandler(async (req, res) => {
  const task = await createTask(req.params.id, req.body, req.user._id);
  res.status(201).json({ success: true, task });
});

const updateTaskHandler = asyncHandler(async (req, res) => {
  const task = await updateTask(req.params.id, req.user._id, req.body);
  res.status(200).json({ success: true, task });
});

const deleteTaskHandler = asyncHandler(async (req, res) => {
  const result = await deleteTask(req.params.id, req.user._id);
  res.status(200).json({ success: true, ...result });
});

module.exports = { createTaskHandler, updateTaskHandler, deleteTaskHandler };
