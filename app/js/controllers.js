'use strict';

// Test controller

angular
  .module('adminApp')
  .controller('AdminCtrl', function($scope) {
 	$scope.test = 'test'
});


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
	.controller('UserListCtrl', function($scope, User) {

		// Display users with $http

		// $http.get('users/users.json').error(function(error) {
		// 	$scope.error = 'Unable to find a users file'
		// }).success(function(data) {
		// 	$scope.users = data;
		// });

		// Display users of services.js

		$scope.users = User.query();
});

/*************************************/

// Link on user detail

angular
	.module('adminApp')
	.controller('UserDetailCtrl', function($scope, $routeParams) {
		$scope.userName = $routeParams.userName;
});

/* Firebase Sign in*/

angular
  .module('adminApp')
  .controller('HomeCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

    var firebaseObj = new Firebase("https://firstapp12345.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
}]);

/* Firebase Sign up*/

angular
  .module('adminApp')
  .controller('RegisterCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
    var firebaseObj = new Firebase("https://firstapp12345.firebaseio.com/");
    var auth = $firebaseAuth(firebaseObj);


    $scope.signUp = function() {
      if (!$scope.regForm.$invalid) {

        var email = $scope.user.email;
        var password = $scope.user.password;

          if (email && password) {
              auth.$createUser({
                email,
                password

              }).then(function() {
                  // do things if success
                  console.log('User creation success');
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

    $scope.SignIn = function() {
      var email = $scope.user.email;
      var password = $scope.user.password; 

      ref.authWithPassword({
        email,
        password
      }).then(function() {
        //Success callback
        console.log('Authentication successful');
        $location.path('/home');

      }, function(error) {
          //Failure callback
          console.log('Authentication failure');
        });
    }

  }]);


// $scope.SignIn = function(event) {
//     event.preventDefault(); // предотвращаем перезагрузку страницы
//     var username = $scope.user.email;
//     var password = $scope.user.password;
//     loginObj.$login('password', {
//         email: username,
//         password: password
//     })
//         .then(function(user) {
//             // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
//             console.log('Authentication successful');
//         }, function(error) {
//             // колбэк при неудаче
//             console.log('Authentication failure');
//         });
// }
