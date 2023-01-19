const express = require("express")
const chatApp = express()
const chatAppController = require("../controller/__chatapp")

chatApp.get("/", chatAppController)

module.exports = chatApp
