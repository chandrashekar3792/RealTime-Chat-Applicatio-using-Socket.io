const path = require('path');
var express = require('express');
const socketIO= require('socket.io');
const http=require('http');
var app =express();

const publicPath=path.join(__dirname+'./../public');
console.log(publicPath);

var server=http.createServer(app);
app.use(express.static(publicPath));

server.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
