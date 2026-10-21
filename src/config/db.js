const mongoose = require("mongoose");
const config = require("./index");

// -------------------------------------------------------
// TODO: Connect MongoDB
// When you're ready, call connectDB() in server.js.
// The connection string is read from config.mongoUri.
// -------------------------------------------------------
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
