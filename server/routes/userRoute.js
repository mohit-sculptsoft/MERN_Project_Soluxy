const express = require("express");
const user_Route = express();
const UserController = require("../controllers/userController");

user_Route.post("/signup", UserController.register_user);

module.exports = user_Route;
