// Initializing SOCKET for the Front-End
const socket = io()
const textField = document.getElementById("text")
const submitButton = document.getElementById("click")
const messageContainerList = document.getElementById("message-container")
const activeList = document.getElementById("active")
const emojiSlot = document.getElementById("emoji")
const logout = document.getElementById("logout")

// [! Creating and Validating newly Joined Users.
let userName
if (localStorage.getItem("user")) {
  userName = localStorage.getItem("user")
} else {
  userName = prompt("Username : ")
  localStorage.setItem("user", userName)
}
socket.emit("user", userName)

// [! Emoji Slots Code
for (let i = 0; i <= 5; i++) {
  emojiSlot.children[i].addEventListener("click", () => {
    const reactEmoji = emojiSlot.children[i].textContent
    socket.emit("click", reactEmoji)
  })
}

// [! Logout Code
logout.textContent = `Logout as ${userName}`
logout.addEventListener("click", () => {
  localStorage.clear()
  location.reload()
})

// [! Sending Message to the Back-End
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  socket.emit("click", textField.value)
  textField.value = ""
})

// [! Receiving Message from the Back-End
socket.on("response", (msg) => {
  const liElement = document.createElement("li")
  liElement.textContent = msg

  messageContainerList.appendChild(liElement)
})

// [! Updating newly Joined Users!!
socket.on("currentList", (msg) => {
  const liElement = document.createElement("li")
  liElement.textContent = msg
  activeList.appendChild(liElement)
})
