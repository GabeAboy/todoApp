angular.module('myApp').service('mainService', function($http,$q){
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];




  // console.log('this is parse',JSON.parse(parsedData))
  // console.log(JSON.stringify(quotes));



  //  console.log(localStorage)



// localStorage.setItem() //turn into string JSON.stringify()
// localStorage.getItem() //parse from string to value JSON.parse()

// var parsedData = localStorage.getItem('quotes');
  this.getQuotes = function() {
    var existingQuotes = JSON.parse(localStorage.getItem('myQuotes'));
    // var dataToDisplay = JSON.parse(parsedData);
    if(!existingQuotes){
      localStorage.setItem('myQuotes',JSON.stringify(quotes));
      existingQuotes = quotes;
    }
    return existingQuotes;

  }


  this.addQuote = function(newQuote,author){
  var existingQuotes = JSON.parse(localStorage.getItem('myQuotes'));
  var obj = {};
  obj.text = newQuote
  obj.author = author
  existingQuotes.push(obj)
  localStorage.setItem('myQuotes',JSON.stringify(existingQuotes));
  return existingQuotes;

}
  this.deleteItem = function(item){
    var existingQuotes = JSON.parse(localStorage.getItem('myQuotes'));
    existingQuotes.splice(item,1);
  localStorage.setItem('myQuotes',JSON.stringify(existingQuotes))
  return existingQuotes
  }

})
// 53681
// 57673
