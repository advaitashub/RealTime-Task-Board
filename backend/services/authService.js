const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { AppError } = require('../utils/errors');
const { signToken } = require('../utils/jwt');

async function registerUser({ name, email, password }) {
  if (!name || !name.trim()) {
    throw new AppError(400, 'Name is required.');
  }

  if (!email || !email.trim()) {
    throw new AppError(400, 'Email is required.');
  }

  if (!password || password.length < 6) {
    throw new AppError(400, 'Password must be at least 6 characters long.');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new AppError(409, 'Email is already registered.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
  });

  const token = signToken(user._id);

  return {
    user: user.toPublicObject(),
    token,
  };
}

async function loginUser({ email, password }) {
  if (!email || !email.trim()) {
    throw new AppError(400, 'Email is required.');
  }

  if (!password) {
    throw new AppError(400, 'Password is required.');
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() });
  if (!user) {
    throw new AppError(401, 'Invalid email or password.');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError(401, 'Invalid email or password.');
  }

  const token = signToken(user._id);

  return {
    user: user.toPublicObject(),
    token,
  };
}

module.exports = { registerUser, loginUser };
