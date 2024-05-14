const path =require('path')
const express = require("express");
const rootDir = require('../utils/path')

const Router = express.Router();
Router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});
Router.post("/products", (req, res, next) => {
  console.log("Body==", req?.body);
  res.redirect("/");
});
module.exports = Router;
