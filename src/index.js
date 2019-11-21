const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// let count = 0 
const WelcomingMessage = "Welcome !"

io.on('connection', (socket) => {
    console.log('New WebSocket connection')


    socket.emit("WelcomingMessage",WelcomingMessage)

    socket.on("SendMessageForSever", (input) => { //Listen for a message from Client
        console.log(input)
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})