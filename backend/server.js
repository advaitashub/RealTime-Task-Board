const http = require('http');
const app = require('./app');
const { connectDB } = require('./config/db');
const { env } = require('./config/environment');
const { initializeSocket } = require('./sockets/socket');

const port = Number(env.PORT) || 5000;

async function startServer() {
  await connectDB();
  const server = http.createServer(app);
  initializeSocket(server);

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
