// ========================================================================================================================
// variables
// ========================================================================================================================
var skittles = require('./skittles');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var books = [
{
  title:'the great divorce',
  author:'CS Lewis'
},
{
  title:'the great divorce',
  author:'CS Lewis'
},
{
  title:'the great divorce',
  author:'CS Lewis'
}
];
// ========================================================================================================================
// functions
// ========================================================================================================================
app.use(bodyParser.json());
console.log(skittles.title)
console.log(skittles.eat())


// ========================================================================================================================
// endpoints
// ========================================================================================================================
app.get('/',function(req,res){
    res.send('<h1>Hello world of my first express app</h1>');
})

app.get('/api/books', function(req,res){
  res.json(books);
})

app.post('/api/books/', function(req,res){
  console.log('new book added', req.body);
  books.push(req.body);
  res.end();
})
app.delete('/api/books/', function(req,res){
  
})
app.listen(3000, function(){
  console.log('listening on port 3000')
})
