angular.module('myApp')
  .directive('partyButton', function(){
    return {
      restrict:'E',
      templateUrl:'./partyTmpl.html',
      scope:{
        message:'@partyMessage',
        buttonMessage:'=', 
        guests: '='
      }
    }
})
