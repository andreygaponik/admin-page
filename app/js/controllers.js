'use strict';

// Test controller

angular
  .module('adminApp')
  .controller('AdminCtrl', function($scope) {

});

angular
  .module('adminApp')
  .controller('HomeCtrl', 
    ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
    //
  }]);

angular
	.module('adminApp')
  .filter('startFrom', function(){
    return function(input, start){
      start = +start;
      return input.slice(start);
    }
  })
	.controller('UserListCtrl', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject) { 

    var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users");

    $scope.users = $firebaseArray(firebaseData);

    $scope.currentPage = 0;
    $scope.itemsPerPage = 3;
    
    $scope.firstPage = function() {
      return $scope.currentPage === 0;
    }
    $scope.lastPage = function() {
      var lastPageNum = Math.ceil($scope.users.length / $scope.itemsPerPage - 1);
      return $scope.currentPage === lastPageNum;
    }
    $scope.numberOfPages = function(){
      return Math.ceil($scope.users.length / $scope.itemsPerPage);
    }
    $scope.startingItem = function() {
      return $scope.currentPage * $scope.itemsPerPage;
    }
    $scope.pageBack = function() {
      $scope.currentPage = $scope.currentPage - 1;
    }
    $scope.pageForward = function() {
      $scope.currentPage = $scope.currentPage + 1;
    }

    // var sync = $firebaseArray(firebaseData.startAt($scope.users).endAt($scope.users).limitToFirst(6));
    // $scope.users = sync;


    // $scope.filteredTodos = $scope.users;
    // $scope.$watch('currentPage + numPerPage', function() {
    //   var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    //   var end = begin + $scope.numPerPage;

    //   $scope.filteredTodos = $scope.users.slice(begin, end);
    //   console.log($scope.filteredTodos);

    // });


    // Display users of services.js
    // *** $scope.users = User.query();
}]);

/*************************************/

/*Firebase detail user and edit data*/

angular
	.module('adminApp')
	.controller('UserDetailCtrl', ['$scope', '$routeParams', '$firebaseArray', '$firebaseObject',
    function($scope, $routeParams, $firebaseObject, $firebaseArray) {
		
    // var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users");
    // $scope.users = $firebaseArray(firebaseData);
    // console.log($scope.users);

    $scope.userId = $routeParams.userId;

    var firebaseDataInput = new Firebase(
        "https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users" + '/' 
        + $scope.userId);

    $scope.data = $firebaseObject(firebaseDataInput);

}]);

/* Firebase Sign up*/

angular
  .module('adminApp')
  .controller('RegisterCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
    
    var firebaseObj = new Firebase("https://firstapp12345.firebaseio.com/");
    var auth = $firebaseAuth(firebaseObj);

    $scope.signUp = function() {
      if (!$scope.regForm.$invalid) {

        var userName = $scope.user.userName;
        var firstName = $scope.user.firstName;
        var lastName = $scope.user.lastName;
        var email = $scope.user.email;
        var password = $scope.user.password;

          if (email && password) {
              auth.$createUser({
                email,
                password

              }).then(function() {
                  // do things if successн
                  console.log('User creation success');

                  // Добавляет данные пользователей в бд

                  var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog");
                  var usersData = firebaseData.child("users");

                  usersData.push({
                    data: {
                      userName: userName,
                      firstName: firstName,
                      lastName: lastName,
                      email: email            
                    }
                  });  

                  // Выводит список юзеров

                  // firebaseData.on("value", function(snapshot) {
                  //   console.log(snapshot.val());
                  // }, function (errorObject) {
                  //   console.log("The read failed: " + errorObject.code);
                  // });

                  $location.path('/signin');

                }, function(error) {
                      // do things if failure
                      console.log(error);

                      $scope.regError = true;
                      $scope.regErrorMessage = error.message;

                  } );
          }
      }
    };

  }]);

/* Firebase Sign in*/

angular
  .module('adminApp')
  .controller('SignInCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {

    var ref = new Firebase("https://firstapp12345.firebaseio.com/");

    $scope.signIn = function() {

      var email = $scope.user.email;
      var password = $scope.user.password; 

      ref.authWithPassword({
        email,
        password
      }).then(function() {
        //Success callback
          console.log('Authentication successful');
          $location.path('/home');

          if (!$scope.$$phase) $scope.$apply(); // help if $location not working

        }, function(error) {
            //Failure callback
            console.log('Authentication failure');

          });
    }

  }]);

angular
  .module('adminApp')
  .controller('TestCtrl', function($scope) {
    var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog");
    console.log('asd');


    // var usersRef = ref.child("users");
    // usersRef.set  ({
    //   alanisawesome: {
    //     date_of_birth: "June 23, 1912",
    //     full_name: "Andrew Andronik"
    //   },
    //   gracehop: {
    //     date_of_birth: "December 9, 1906",
    //     full_name: "Grace Hopper"
    //   }
    // });
  })