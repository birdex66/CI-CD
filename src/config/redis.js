const { createClient } = require("redis");
const config = require("./index");

// -------------------------------------------------------
// TODO: Connect Redis
// Call redisClient.connect() in server.js when ready.
// Use redisClient.set() / redisClient.get() in your routes.
// -------------------------------------------------------
const redisClient = createClient({
  socket: {
    host: config.redis.host,
    port: config.redis.port,
  },
  password: config.redis.password,
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err.message);
});

redisClient.on("connect", () => {
  console.log("Redis connected");
});

module.exports = redisClient;
