angular.module('myApp').directive('calculator', function(){

  return {
    restrict:'AE',
    templateUrl:'./views/calcTmpl.html',
    scope: {
      text:'@',
      calc:'&',
      num1:'=',
      num2:'='
    },
    link: function(scope, element, attributes){

    },
    controller : function($scope){
      // $scope.num1 = 0;
      $scope.num2 = 0;


    }
  }
})
