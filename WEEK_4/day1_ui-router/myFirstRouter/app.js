angular.module('myApp',['ui.router']).config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'./views/home.html',
      controller:'homeCtrl'
    })
    .state('about', {
      templateUrl:'./views/about.html',
      controller: 'aboutCtrl',
      url:'/about/:params'
    })
    .state('about.username', {
      template:'<h1>{{data}}</h1>',
      controller:'userCtrl'
    })

    .state('about.location', {
      template:'<h1>{{data}}</h1>',
      controller:'locationCtrl'
    })
    .state('error', {
      template:'<h1>Error</h1>',
      url:'/error'
    })


  $urlRouterProvider
    .otherwise('/')
})
