const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(`💬 Server on port ${PORT}`))

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))

let socketsConnected = new Map() // Store users

io.on('connection', (socket) => {
    console.log('Socket connected', socket.id)

    // Listen for username from client
    socket.on('user-joined', (username) => {
        socketsConnected.set(socket.id, username)
        io.emit('chat-message', { 
            name: "System", 
            message: `${username} has entered the chat.`,
            dateTime: new Date()
        })
        io.emit('clients-total', socketsConnected.size)
    })

    socket.on('disconnect', () => {
        let username = socketsConnected.get(socket.id) || "A user"
        socketsConnected.delete(socket.id)

        io.emit('chat-message', { 
            name: "System", 
            message: `${username} has left the chat.`,
            dateTime: new Date()
        })
        io.emit('clients-total', socketsConnected.size)

        console.log('Socket disconnected', socket.id)
    })

    socket.on('message', (data) => {
        socket.broadcast.emit('chat-message', data)
    })

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data)
    })
})
