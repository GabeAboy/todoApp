angular.module('myApp').controller('mainCtrl',function($scope){
  $scope.message = 'Hello';
  $scope.partyButtonMessage = 'party button message'
  $scope.salutation ='howdy ho'
  $scope.partyGuests = ['mom','dad','chipi','minh']
  $scope.alertMessage= function(message){
    console.log('working')
    alert('your message is '+ message)
  }
})
