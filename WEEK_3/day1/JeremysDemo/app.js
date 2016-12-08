// Code goes here

angular.module("myApp", []);

angular.module("myApp").controller("mainCtrl", function($scope, $timeout){

  $scope.anything = "Words go here";

  $scope.twoWayText = "Starting Text"

  $scope.heroes = [{name:"Superman", powers: "Flight, laser eyes, super strength, flight"}, {name:"Batman", powers:"Kung fu, toolbelt, voice changer, $$$$$"}, {name:"Wonder Woman", powers: "strength, bracelets, lasso of truth, swordmanship"}]

  $scope.heroFilter = {
    name: "bat"
  }

  $scope.awesomeClicked = function(){
    $scope.isAwesome = !$scope.isAwesome;
  }

  $scope.checkNumber = function(){
    var num = $scope.num/1;
    if(isNaN(num)){
      $scope.nan = true;
    } else {
      $scope.nan = false;
    }
  }
})
