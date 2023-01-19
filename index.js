/*
    Project     : socket.io BASIC Chat Setup
    Author      : Ettisaf Rup
    Date        : 19 January, 2023.
    Purpose     : Socket Simplified for Fresh nodeJs Developers.
    Description : A Beginner Friendly Well Arranged Code to Understand the Socket a.K.a WebSocket
                  All the comments were added ordered by priority. For a proper code explaination, read
                  the README.md file by watching the Explaination video (provided) Side by Side.
*/

console.clear() // __Cleaning up the Terminal__

// [!] Server Imports
const app = require("./server/express")
const { httpServer } = require("./server/socket")
// [=> IMPORT -> Routes
const chatJs = require("./routes/chat.js")

// __route_initializing__
app.use("/", chatJs)

// [+] Running up the Server <- ]
httpServer.listen(4000, () => console.log("http://localhost:4000"))
