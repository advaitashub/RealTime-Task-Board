const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        role: {
          type: String,
          enum: ['owner', 'member'],
          default: 'member',
        },
      },
    ],
  },
  { timestamps: true }
);

boardSchema.methods.hasMember = function hasMember(userId) {
  const targetId = userId.toString();
  return this.members.some((member) => {
    const memberId = member.user && member.user._id ? member.user._id.toString() : member.user.toString();
    return memberId === targetId;
  });
};

boardSchema.methods.getMemberRole = function getMemberRole(userId) {
  const targetId = userId.toString();
  const member = this.members.find((entry) => {
    const memberId = entry.user && entry.user._id ? entry.user._id.toString() : entry.user.toString();
    return memberId === targetId;
  });
  return member ? member.role : null;
};

module.exports = mongoose.model('Board', boardSchema);
