// __ Initializing Express
const express = require("express")
const app = express()
const path = require("path")

// [!] Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static Folder for the Front-End's Style and CSS
app.use(express.static(path.join(__dirname, "/../assets")))

module.exports = app
