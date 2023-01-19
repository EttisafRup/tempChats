const path = require("path")
const { io } = require("../server/socket")

/*
  !! __NOTE__
          Always try to use the path.join() module while concating paths. It can be said
          as best practice in my opinion. In some cases, it throws an error, where 
          path.join() shines.
*/

io.on("connection", (client) => {
  // :__ Greetings to newUser who connects!
  client.on("user", (newUser) => {
    io.emit("response", `👋🏻 ${newUser} arrived! Say hi to ${newUser}`)
    io.emit("currentList", `🟢 ${newUser} joined the chat!`)

    // :__ Receiving Message and broadcasting to all the connected users!
    client.on("click", (msg) => {
      io.emit("response", `${newUser} : ${msg}`)
    })

    // :__ Aww! Someone has been crossed the conversation tab!
    client.on("disconnect", () => {
      io.emit("currentList", `🔴 ${newUser} left the conversation!`)
    })
  })
})

// Function that sends the index.html file
function chatAppController(req, res) {
  res.sendFile(path.join(__dirname, "/../views/index.html"))
}

module.exports = chatAppController
