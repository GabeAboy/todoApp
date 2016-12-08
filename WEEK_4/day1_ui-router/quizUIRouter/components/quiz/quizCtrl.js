angular.module('quizApp').controller('quizCtrl', function($scope,questions,$stateParams){
  $scope.quizQuestions = questions;
  $scope.quizName = $stateParams.quizName;
})
