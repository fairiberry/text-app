const io = require('socket.io')(2428);

io.on("connection", socket => {
    socket.emit("message", "Welcome!")
    socket.on("newMessage", message => {
        socket.broadcast.emit("showMessage", message)
    })
});