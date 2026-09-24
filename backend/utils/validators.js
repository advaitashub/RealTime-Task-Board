const mongoose = require('mongoose');

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function isValidStatus(status) {
  return ['Todo', 'In Progress', 'Done'].includes(status);
}

module.exports = { isValidObjectId, isValidStatus };
