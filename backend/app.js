const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const boardRoutes = require("./routes/boardRoutes");
const taskRoutes = require("./routes/taskRoutes");
const activityRoutes = require("./routes/activityRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { env } = require("./config/environment");

const app = express();

const allowedOrigins = ["http://localhost:3000", env.CLIENT_URL];

app.use(
  cors({
    origin: (origin, callback) => {
      const isAllowedLocalDevOrigin =
        typeof origin === "string" &&
        /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(?::\d+)?$/.test(
          origin,
        );

      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        isAllowedLocalDevOrigin
      ) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Backend healthy" });
});

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api", taskRoutes);
app.use("/api", activityRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Real-Time Task Board API is running",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
