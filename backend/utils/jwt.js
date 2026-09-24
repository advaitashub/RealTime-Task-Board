const jwt = require('jsonwebtoken');
const { requireEnv } = require('../config/environment');

function signToken(userId) {
  return jwt.sign({ id: userId }, requireEnv('JWT_SECRET'), { expiresIn: '7d' });
}

function verifyToken(token) {
  if (!token) {
    throw new Error('Token missing');
  }
  return jwt.verify(token, requireEnv('JWT_SECRET'));
}

module.exports = { signToken, verifyToken };
