const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.use(function(req,res,next){
  console.log('before everything one!');
  next()
})

app.use(function(req,res,next){
  console.log('before everything two!');
  next()
})


function a(req,res,next) {
  console.log('ayyyyeeee');
  next()
}

function b(req,res,next) {
  console.log('beeeeeee');
  next()
}

function z(req,res,next) {
  console.log('zzeeeeeee');
  res.end('Donezo')
}

app.get('/api/abz', a,b,z)
app.get('/api/abz', a,z)
app.listen(port, function(){
  console.log('listening on port',port);
})

app.get('/')
