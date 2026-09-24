const express = require('express');
const { body } = require('express-validator');
const {
  createBoardHandler,
  getBoards,
  getBoard,
  updateBoardHandler,
  deleteBoardHandler,
  addMemberHandler,
  removeMemberHandler,
} = require('../controllers/boardController');
const { protect } = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validationMiddleware');

const router = express.Router();

router.use(protect);

router.post(
  '/',
  [body('title').trim().notEmpty().withMessage('Board title is required.')],
  validateRequest,
  createBoardHandler
);

router.get('/', getBoards);
router.get('/:id', getBoard);
router.patch(
  '/:id',
  [body('title').optional().trim().notEmpty().withMessage('Board title cannot be empty.')],
  validateRequest,
  updateBoardHandler
);
router.post(
  '/:id/members',
  [body('email').isEmail().withMessage('A valid member email is required.')],
  validateRequest,
  addMemberHandler
);
router.delete('/:id/members/:userId', removeMemberHandler);
router.delete('/:id', deleteBoardHandler);

module.exports = router;
