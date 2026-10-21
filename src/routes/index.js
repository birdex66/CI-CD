const express = require("express");
const router = express.Router();

// -------------------------------------------------------
// Health check — this works without MongoDB or Redis.
// The CI pipeline's test job hits this endpoint.
// -------------------------------------------------------
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// -------------------------------------------------------
// TODO: Add your own routes below.
// Example:
//   const userRoutes = require("./user");
//   router.use("/users", userRoutes);
// -------------------------------------------------------

module.exports = router;
