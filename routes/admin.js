const express = require("express");

const Router = express.Router();
Router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='product'/></form>"
  );
});
Router.post("/product", (req, res, next) => {
  console.log("Body==", req?.body);
  res.redirect("/");
});
module.exports = Router;
