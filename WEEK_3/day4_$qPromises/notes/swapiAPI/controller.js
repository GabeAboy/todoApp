angular.module('myApp').controller('mainCtrl',function($scope){
 mainService.getPeople().then(function(people){
   $scope.people=people;
 })
 mainService.getNames().then(function(names){
   $scope.people=names;
 })
 .catch(function(err){
   $scope.error = err
 })
})
