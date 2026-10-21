const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const applyMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
};

module.exports = applyMiddleware;
