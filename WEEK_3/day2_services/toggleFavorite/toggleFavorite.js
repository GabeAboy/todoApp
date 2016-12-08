// We want to be able to 'favorite' each user and have that saved and reflected.
//
// * In the service, make a new function called `toggleFavorite`. It takes in an index number and uses it to modify the data at that index to change an 'isFavorite' property back and forth between true and false.
// * In the controller, add that function to your controller's $scope (Don't invoke it, just assign it).
// * In the html, Add a button inside the `ng-repeat` to each user that invokes the toggleFunction and passes in the user id.
// `ng-click="toggleFavorite(user.id)`
// Note: This only works because the user.id's match their index in the array of profiles.
//
// * Last, we're going to use `ng-class` to style the html conditionally.  The format looks like this `ng-class="{class-name: javascriptExpression }`
// Our code is going to look like this : `ng-class="{favorite: user.isFavorite}"`.  We're telling angular that when user.isFavorite is true to apply the .favorite class.  And when it's false to remove it.

// # Final Code

// ```javascript
//controller
angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
    }

    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
})
```

```javascript
//service

angular.module('userProfiles').service('mainService', function(){
    var data =  [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    "isFavorite": true
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }];

    this.getUsers = function(){
        return data;
    }

    this.toggleFavorite = function(userIndex){
        data[userIndex].isFavorite = !data[userIndex].isFavorite;
    }
})
```

```html
<!--index-->
<!DOCTYPE html>
<html ng-app="userProfiles">
<head>
    <meta charset="utf-8">
    <title>mini-userProfiles</title>
    <link rel="stylesheet" href="styles.css"></link>
</head>
<body ng-controller="MainController">

    <div ng-repeat="user in users" ng-class="{favorite: user.isFavorite}">
        <img ng-src="{{user.avatar}}"></img>
        <span>{{user.first_name}}</span>
        <span>{{user.last_name}}</span>
        <button ng-click="toggleFavorite(user.id)">+</button>
    </div>

     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.js"></script>
     <script src="app.js"></script>
     <script src="controller.js"></script>
     <script src="service.js"></script>
</body>
</html>
```
