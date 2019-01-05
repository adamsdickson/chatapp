var socket = io();

socket.on("connect", ()=>{
    console.log('server is up');

    socket.emit("createMessage", {
        from:"Adams@yahoo.com",
        text:"I have something to tell you",
        timeCreated:"4pm"
    }
)

});

socket.on("disconnect",()=>{
console.log('server is down')
 })

socket.on("message",(message)=>{
    console.log("message is" , message);
});