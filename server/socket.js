// ___ Initializing socket.io
// [*] Importing Express Function to create an Instance Server.

const app = require("./express")

const { createServer } = require("http")
const socketIO = require("socket.io")

const httpServer = createServer(app)
const io = socketIO(httpServer)

module.exports = { io, httpServer }
