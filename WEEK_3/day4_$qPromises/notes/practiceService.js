angular.module('myApp').service('multiPointDataService', function($http, $q) {
    var config = null;

    this.getConfig = function() {
        var deferred = $q.defer();
        if (config) {
            deferred.resolve(config)
        } else {
            $http.get({
                method: 'get',
                url: 'https://www.someurl.com'
            }).then(function(response) {
                config = response.data
                deferred.resolve(config)
            })
        }
        return deferred.promise;
    }
})

// MULTIPOINT SERVICE RESOLVING PROMISE WHEN ALL DATA IS RETURNED
// =============================================================================
angular.module('app').service('multiPointDataService', function($http,$q){
  this.getMultipointsOfData = function() {

      var defer = $q.defer();
      var data1;
      var data2;
      var data3;

    $http.get('http://datapoint1.com/api/data1').then(function(response){
        data1 = response.data;
        checkIfAllDataDone();
    })
    $http.get('http://datapoint1.com/api/data2').then(function(response){
        data2 = response.data;
        checkIfAllDataDone();
    })
    $http.get('http://datapoint1.com/api/data3').then(function(response){
        data3 = response.data;
        checkIfAllDataDone();
    })
    function checkIfAllDataDone() {
      if(data1 && data2 && data3){
        defer.resolve({
          data1:data1,
          data1:data2,
          data1:data3
        })
      }
    }
    return defer.promise;
  }
})



// FACTORIAL
// ====================================

$scope.doFiveFactorial = function() {
  var defer = $q.defer();

  defer.resolve({
    currentTotal:5,
    currentNum:5
  })

  return defer.promise;
}
$scope.handNextFactorial = function(num) {
  num.currentNum--;
  return {
    currentTotal:num.currentTotal + num.currentNum,
    currentNum: num.currentNum
  }
}
$scope.doFiveFactorial()
.then(handNextFactorial)
.then(handNextFactorial)
.then(handNextFactorial)
.then(handNextFactorial)





});

// Submit application
// +===================================

$scope.sbmitApplication = function() {
  validationService.checkAllFrieldsCompleted()
  .then(creditService.creditCheck)
  .then(validationService.checkEmailIsValid)
  .then(validationService.checkAdsressValid)
  .then(brokerService.asssignBrokerBasedOnAdress, errorService.handleInvalidAddress)
  .then(loanService.calculateInterestRate)



}
