const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { requireEnv, env } = require('./environment');

let memoryServer;

async function connectDB() {
  let mongoUri = env.MONGODB_URI || process.env.MONGODB_URI;

  if (!mongoUri && env.NODE_ENV !== 'production') {
    memoryServer = await MongoMemoryServer.create({
      binary: { version: '7.0.14' },
    });
    mongoUri = memoryServer.getUri();
  }

  if (!mongoUri) {
    mongoUri = requireEnv('MONGODB_URI');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
}

async function disconnectDB() {
  await mongoose.disconnect();
  if (memoryServer) {
    await memoryServer.stop();
  }
}

module.exports = { connectDB, disconnectDB };
