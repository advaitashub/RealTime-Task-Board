const { asyncHandler } = require('../utils/errors');
const {
  createBoard,
  listBoardsForUser,
  getBoardById,
  updateBoard,
  deleteBoard,
  addBoardMember,
  removeBoardMember,
} = require('../services/boardService');

const createBoardHandler = asyncHandler(async (req, res) => {
  const board = await createBoard(req.body.title, req.user._id);
  res.status(201).json({ success: true, board });
});

const getBoards = asyncHandler(async (req, res) => {
  const boards = await listBoardsForUser(req.user._id);
  res.status(200).json({ success: true, boards });
});

const getBoard = asyncHandler(async (req, res) => {
  const board = await getBoardById(req.params.id, req.user._id);
  res.status(200).json({ success: true, board });
});

const updateBoardHandler = asyncHandler(async (req, res) => {
  const board = await updateBoard(req.params.id, req.user._id, req.body);
  res.status(200).json({ success: true, board });
});

const deleteBoardHandler = asyncHandler(async (req, res) => {
  const result = await deleteBoard(req.params.id, req.user._id);
  res.status(200).json({ success: true, ...result });
});

const addMemberHandler = asyncHandler(async (req, res) => {
  const board = await addBoardMember(req.params.id, req.user._id, req.body.email);
  res.status(200).json({ success: true, board });
});

const removeMemberHandler = asyncHandler(async (req, res) => {
  const board = await removeBoardMember(req.params.id, req.user._id, req.params.userId);
  res.status(200).json({ success: true, board });
});

module.exports = {
  createBoardHandler,
  getBoards,
  getBoard,
  updateBoardHandler,
  deleteBoardHandler,
  addMemberHandler,
  removeMemberHandler,
};
