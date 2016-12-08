var books=[{
  name:"harry potter",
  author: "jk rowling"
}];
module.exports ={

  getBooks: function(req,res,next){
    res.status(200).send(books);
  }

}
