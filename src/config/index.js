require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",

  // TODO: these values come from your .env file (or GitHub Secrets in CI/CD)
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/myapp",

  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
  },
};
