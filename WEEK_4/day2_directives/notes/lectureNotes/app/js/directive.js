angular.module('myApp').directive('ngButton', function(){

  function getColor() {
    var colors = ['red','yellow','green','brown','lightblue']
    return colors[Math.ceil(Math.random() * colors.length)]
  }


  return {
    templateUrl:'./views/buttonTmpl.html',
    restrict:'AE',
    scope: {
      buttonText : '@'
    },
    link: function(scope,element,attributes){
      element.on('click',function(){
        setInterval(function(){
          element.children().css('background-color',getColor())
        }, 500)
      })
    }
  }
})
