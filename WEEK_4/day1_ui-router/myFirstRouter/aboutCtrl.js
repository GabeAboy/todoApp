angular.module('myApp').controller('aboutCtrl',function($scope,$stateParams){
  $scope.message = $stateParams.params;
  

})
