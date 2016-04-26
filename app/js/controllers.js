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


// Display users 

// angular
// 	.module('adminApp')
// 	.controller('UserList', function($scope) {
// 	$scope.users = [
//     {
// 		  "name": "Andrew",
// 		  "age": "24",
// 		  "id": "0"
// 		 },
// 		 {
// 		  "name": "Test",
// 		  "age": "test age",
// 		  "id": "1"
// 		 }
//   ];
// });

/*************************************/

// Display users of UserList.json

angular
	.module('adminApp')
	.controller('UserListCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) { // User argument 

    var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users");

    $scope.users = $firebaseArray(firebaseData);
    console.log($scope.users);

    // Display users of services.js
    // *** $scope.users = User.query();

		// Display users with $http

		// $http.get('users/users.json').error(function(error) {
		// 	$scope.error = 'Unable to find a users file'
		// }).success(function(data) {
		// 	$scope.users = data;
		// });
}]);

/*************************************/

// Link on user detail

angular
	.module('adminApp')
	.controller('UserDetailCtrl', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray) {
		
    var firebaseData = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users");
    $scope.users = $firebaseArray(firebaseData);
    console.log($scope.users.data);

    $scope.userId = $routeParams.userId;

      // add new items to the array
      // the message is automatically added to our Firebase database!
 
      var firebaseData1 = new Firebase("https://firstapp12345.firebaseio.com/web/saving-data/fireblog");

      var usersData = firebaseData.child("users");

      $scope.addMessage = function() {
        usersData.push({
          data: {
            userName: $scope.newMessageText 
          }
        });
      };


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

/*Firebase edit data*/



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


                  firebaseData.on("value", function(snapshot) {
                    console.log(snapshot.val());
                  }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                  });



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