angular.module('quizApp',['ui.router']).config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'./components/home/homeView.html',
      controller:'homeCtrl',
      resolve:{
        quizArr: function(quizService){
          return quizService.getQuizNames();
        }
      }
    })
      .state('quiz',{
        url:'/quiz/:quizName',
        templateUrl:'./components/quiz/views/quizContainerView.html',
        controller:'quizCtrl',
        resolve: {
          questions: function(quizService,$stateParams){
            return quizService.getQuestions($stateParams.quizName);
          }
        }
      })


    $urlRouterProvider
      .otherwise('/')
})
