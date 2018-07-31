var express = require('express');
var socket = require('socket.io'); // this socket is running on the server
var app = express();
var server = app.listen(4000,function(){
console.log("server is running on port 4000");

});
// ststic files
app.use(express.static('public')); 

// socket set up
var io = socket(server); // used socket is same which is in line no. 2
io.on('connection', function(socket){ //socket by which client is making connection to the server
    console.log("Made Socket Connections",socket.id); // socket id will be different for each refresh (each refresh means new chat window or new client)
    }); 
