const { Server } = require('socket.io');
const { verifyToken } = require('../utils/jwt');
const { registerBoardHandlers } = require('./boardSocket');

let ioInstance;

function initializeSocket(server) {
  ioInstance = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  ioInstance.use((socket, next) => {
    const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.replace('Bearer ', '');

    if (!token) {
      return next(new Error('Unauthorized socket connection.'));
    }

    try {
      const decoded = verifyToken(token);
      socket.user = { _id: decoded.id, id: decoded.id };
      return next();
    } catch (error) {
      return next(new Error('Invalid socket token.'));
    }
  });

  ioInstance.on('connection', (socket) => {
    registerBoardHandlers(ioInstance, socket);

    socket.on('disconnect', () => {
      
    });
  });

  return ioInstance;
}

module.exports = { initializeSocket, getIO: () => ioInstance };
