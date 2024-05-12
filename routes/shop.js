const express = require("express");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  res.send("<h1>welcome to the shop</h1>");
});
module.exports = Router;
