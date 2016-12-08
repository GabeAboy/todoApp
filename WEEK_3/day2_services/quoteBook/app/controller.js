angular.module('myApp').controller('mainCtrl', function($scope,mainService){
  $scope.message = 'Hello World Working'
  $scope.quotes =  mainService.getQuotes();

  console.log($scope.getQuotes)

  $scope.addQuote = mainService.addQuote;

  $scope.deleteItem = function(item){
    mainService.deleteItem(item);
  //   $scope.newText = {};
  //   console.log($scope.newText);
  //   $scope.newAuth = {};
  // console.log($scope.newAuth);
  }

})
