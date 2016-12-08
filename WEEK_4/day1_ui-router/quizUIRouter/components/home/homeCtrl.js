angular.module('quizApp').controller('homeCtrl', function($scope, quizArr){
  $scope.message = 'working';
  $scope.quizzes = quizArr;

})
