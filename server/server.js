const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')

var app = express()
var server = http.createServer(app)
var io = socketIo(server)


const publicPath = path.join(__dirname,'../public')
app.use (express.static(publicPath))

io.on('connection',(socket)=>{
    console.log('new user connected.')
    socket.on('disconnect',()=>{
        console.log('user was disconnect.')
    })
    
})


const port =process.env.PORT || 3000
/* Listening on request*/
server.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})