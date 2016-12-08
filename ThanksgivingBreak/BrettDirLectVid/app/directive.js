angular.module('myApp').directive('partyDir',function($interval){
  var color;
  var colors = ['red','green','lightblue','purple','yellow','violet','pink','navy','salmon','teal','orange']
   var randColor = function() {
    color = colors[Math.ceil(Math.random() * colors.length)];
    return color
  }


  return {
    restrict:'E',
    templateUrl:'./partyTmpl.html',
    scope: {
      message:'@dirMessage',
      buttonMessage:'=',
      newMessage:'=button',
      guests:'=',
      alert:'&'
    },
    controller: function($scope){
      $scope.buttonMessage='noBurger'

    },
    link: function(scope,element,attribute) {
      scope.buttonMessage='fooburger';
      // element.on('click', function(){
      //   scope.alertMessage({message:scope.message});
      // })
      
    }
  }
})


// element.on('click', function(){
//   $interval(function(){
//     element.find('div').css('color',randColor());
//     element.find('div').css('background',randColor());
//   }, 50);

// })
