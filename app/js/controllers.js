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

angular
  .module('adminApp',['firebase'])
  .controller('HomeCtrl', function($scope) {
 	$scope.test = 'test'
});

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
