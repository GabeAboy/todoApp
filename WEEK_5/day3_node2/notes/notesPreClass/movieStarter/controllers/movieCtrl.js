const movies = require('../movies.json');

module.exports = {
  get: function(req,res,next){
    // https://localhost3000/api/movies?page=18&pageSize=24
    var page = (req.query.page / 1) || 1;
    // var first20Movies = movies.slice(0,20);
    var pageSize = (req.query.pageSize / 1) || 20;
    var startIndex = (page - 1) * pageSize;
    var reqPage = movies.slice(startIndex, startIndex + pageSize)
    res.status(200).send(reqPage);
  },
  getById: function(req,res,next){
    var movieAtId = movies[req.params.movieId];
    var responseObj = {
      message :"you asked for movie Id " + req.params.movieId,
      movie : movieAtId
    }
    res.status(200).send(responseObj);
  },
  modify: function(req,res,next){
    movies.forEach(function(movie){
      if(movie.title === req.body.title){
        movie = req.body;
      }
    })
    res.status(200).send(movies)
  },
  add: function(req,res,next){

  },
  delete: function(req,res,next){

  }
}
