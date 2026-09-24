const express = require('express');
const { getBoardActivityHandler } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.get('/boards/:id/activity', getBoardActivityHandler);

module.exports = router;
