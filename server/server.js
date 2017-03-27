const path = require('path');
var express = require('express');
const socketIO= require('socket.io');
const http=require('http');
var app =express();

const publicPath=path.join(__dirname+'./../public');
console.log(publicPath);

var server=http.createServer(app);

var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

socket.on('disconnect',()=>{
    console.log('User was disconnected');
  });
});
server.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
