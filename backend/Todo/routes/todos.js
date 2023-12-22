const express = require("express");

const router = express.Router();

// import controller

const { createTodo } = require("../controller/createTodo");

// define  Api routes
router.post("/createTodo", createTodo);

module.exports = router;
