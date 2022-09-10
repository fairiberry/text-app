const { send } = require("process");

const socket = io("http://localhost:3000");

const sendMessage = document.getElementById("sendMessage");

sendMessage.addEventListener("submit", () => {
    preventDefault()
    const message = document.getElementById("message").value;
    socket.emit("newMessage", message)
})

function showMessage(message) {
    const messageElement = document.getElementById("messages");
    messageElement.innerText = message;
}