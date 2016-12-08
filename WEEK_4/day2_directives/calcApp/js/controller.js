angular.module('myApp').controller('mainCtrl', function($scope){

  $scope.results = 3;
  $scope.message = 'working'
  console.log($scope.results)
  $scope.add = function(a,b){
    // alert(parseInt(a)+parseInt(b))
    console.log($scope.results);
    $scope.results = parseInt(a)+parseInt(b)
  }
  $scope.subtract = function(a,b){
    // alert(parseInt(a)-parseInt(b))
    $scope.results = parseInt(a)-parseInt(b)
  }
  $scope.multiply = function(a,b){
    // alert(parseInt(a)*parseInt(b))
    $scope.results = parseInt(a)*parseInt(b)
  }
  $scope.divide = function(a,b){
    // alert(parseInt(a)/parseInt(b))
    $scope.results = parseInt(a)/parseInt(b)
  }
})
