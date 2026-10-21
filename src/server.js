const app = require("./app");
const config = require("./config");

// -------------------------------------------------------
// TODO: Uncomment these two blocks when you're ready
// to connect MongoDB and Redis.
// -------------------------------------------------------

// const connectDB = require("./config/db");
// const redisClient = require("./config/redis");

const start = async () => {
  // await connectDB();
  // await redisClient.connect();

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port} [${config.nodeEnv}]`);
  });
};

start();
