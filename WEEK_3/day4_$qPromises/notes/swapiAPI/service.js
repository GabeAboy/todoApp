angular.module('myApp').service('mainService',function($http,$q){

  var baseUrl = ''

  this.getPeople = function(){
    var defer = $q.defer();
    $http({
      url:(baseUrl+'people'),
      method:'GET'
    }).then(function(response){
      // return response.data.results
      defer.resolve(response.data.results)
    })
    .catch(function(err){
      console.log(err)
      defer.resolve(err)
    })
    return defer.promise
  }












  this.getNames = function() {
    var defer = $q.defer();
    $http.get(baseUrl).then(function(response){
      var namesArr = response.map(function(person){
        return person.name
      })
      defer.reject('cant get names')
    })
    return defer.promise
  }
})
