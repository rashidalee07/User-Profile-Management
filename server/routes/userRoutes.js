const express = require("express");
const UserController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

// Middleware to create a new user
router.route("/createUser").post(UserController.createUser);
router.route("/login").post(authController.login);
router.route("/getUsers").get(UserController.fetchUserByEmail);

module.exports = router;
