const { asyncHandler } = require('../utils/errors');
const { getBoardActivity } = require('../services/activityService');

const getBoardActivityHandler = asyncHandler(async (req, res) => {
  const activities = await getBoardActivity(req.params.id, req.user._id);
  res.status(200).json({ success: true, activities });
});

module.exports = { getBoardActivityHandler };
