angular.module('myApp').controller('mainCtrl',function($scope,mainService){
// $scope.hello = 'hello world working'
$scope.getQuotes = function(){
  $scope.quotes = mainService.getQuotes();
}
$scope.getQuotes();

$scope.addQuote = mainService.addQuote;

$scope.deleteQuote = mainService.deleteQuote;

$scope.toggleLike = mainService.toggleLike;
})
