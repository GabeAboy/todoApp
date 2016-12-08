angular.module('app')
  .controller('mainCtrl', function($scope){
    $scope.message = "Hello World!"

    $scope.friends = [
      {
        name:'thai',
        age:28
      },
      {
        name:'roy',
        age:20
      },
      {
        name:'ron',
        age:30
      }
    ]
  })
