const path = require('path');
var express = require('express');

var app =express();

const publicPath=path.join(__dirname+'/../public');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
