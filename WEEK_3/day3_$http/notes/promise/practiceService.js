angular.module('myApp').service(function($http,errorHandler){

  var baseUrl = 'https://Iknowallthepepole/anypeople/';


// GET METHOD
// =====================================================
  this.getAnypeople = function(peoplenum){
    if(response.status !== 200){

    }
    return response.data.people;
  },function (data, status, headers, config){
    errorHandler(data);
  }

  // PUT METHOD UPDATE
// =================================================
  this.updatePeopleName = function(name, id){
    return $http({
      method:'put',
      url:baseUrl+ id + '/?name' + name
      //https://iknowallthepeeps.com/anypeople/456/?name=petesteve
    }).then(function(response){
       response.data;
       response.status
    })
  }
})
// POST METHOD/ ADDING
// ======================================

this.addPeople = function(personObj) {
  return $http({
    method:'POST',
    url:baseUrl,
    data: personObj
  }).then(function(response){
    //debug to see what we have
    var abc = 123;
  })

}

// DELETE METHOD
// ==============================================

this.deletePeople = function(id){
  return $http({
    method:'delete',
    url:'baseUrl'+ id;
  }).then(function(response){
    //debug to see what we have
    var abc = 123;
  })
}
