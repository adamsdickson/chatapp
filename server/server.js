const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");


const publicPath = path.join(__dirname , "../public");
const port = process.env.PORT ||3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on("connection", (socket)=>{
    console.log("user connected");
    socket.on("createMessage",(message)=>{
        console.log("createMessage", message);
    });

    socket.emit("message",{
        email:"codemasterjs@socket.com",
        text:"dudes werin be chelsea scores",
        timeStamp:"Abi"
    });
    socket.on("disconnect", ()=>{
        console.log("user disconnected")
    });
});




server.listen(port,()=>{
    console.log(`app is running on ${port}`)
})

