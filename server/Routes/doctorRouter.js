const express = require("express");
const route = express.Router();
const doctorController = require("../Controller/doctorController")





route.post("/registration", doctorController.doctorRegistration);

module.exports = route;