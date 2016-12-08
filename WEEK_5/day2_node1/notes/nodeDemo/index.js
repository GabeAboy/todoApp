// ================================================================================================
// variables
// ================================================================================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
var names = ['jack','mo','larry']
var books=[{
  name:"harry potter",
  author: "jk rowling"
}];
const bookCtrl = require('./controller/bookController')

// ================================================================================================================
// functions
// ================================================================================================================================
// middleware
app.use(bodyParser.json());

function sayHello(req,res,next){
  console.log('Hello');
  next()
}
app.use(sayHello)

app.get('/api/books',sayHello,sayHello,bookCtrl.getBooks);

app.post('/', function(req,res,next){
  console.log(req);
  names.push(req.body.name)
  // console.log(req.body);
  console.log(names);
  var sendBack = 'request saved'
  res.send(sendBack)
  res.end()
})
app.post('/books', function(req,res,next){
  // var books = [];
  books.push(req.body.name)
  res.status(200).send(books);


})
app.get('/books', function(req,res,next){
  res.status(200).send(books);

})

app.put('/books', function(req,res,next){
  for (var i = 0; i < books.length; i++){
    console.log('runnn')
    if (books[i].name === req.body.name){

    }
  }
    books[i] = req.body;
    res.status(200).send(books)
})

app.listen(port, function() {
  console.log('listening on port', port);
})
