const express = require('express');
const { body } = require('express-validator');
const { createTaskHandler, updateTaskHandler, deleteTaskHandler } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validationMiddleware');

const router = express.Router();

router.use(protect);

router.post(
  '/boards/:id/tasks',
  [
    body('title').trim().notEmpty().withMessage('Task title is required.'),
    body('status').optional().isIn(['Todo', 'In Progress', 'Done']).withMessage('Invalid task status.'),
  ],
  validateRequest,
  createTaskHandler
);

router.patch(
  '/tasks/:id',
  [
    body('title').optional().trim().notEmpty().withMessage('Task title cannot be empty.'),
    body('status').optional().isIn(['Todo', 'In Progress', 'Done']).withMessage('Invalid task status.'),
    body('version').optional().isNumeric().withMessage('Version must be numeric.'),
  ],
  validateRequest,
  updateTaskHandler
);

router.delete('/tasks/:id', deleteTaskHandler);

module.exports = router;
