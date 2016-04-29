'use strict';

// angular.module('userServices', ['ngResource']).
//   factory('User', function($resource){
//   	return $resource('users/:userName.json', {}, {
//     	query: {
//     		method:'GET', 
//     		params:{
//     			userName:'users'
//     		},
//     		isArray:true
//     	}
//   	});
// });


// angular
// 	.module('adminApp')
// 	.factory('GetUsers', ['$scope', '$routeParams', '$firebaseArray', '$firebaseObject', function($scope, $routeParams, $firebaseArray, $firebaseObject) {
// 		$scope.userId = $routeParams.userId;
// 		var firebaseDataInput = new Firebase(
//         "https://firstapp12345.firebaseio.com/web/saving-data/fireblog/users" + '/' 
//         + $scope.userId);


// 		return {
// 			getUserById: function() {
c
// 				return $firebaseObject(firebaseDataInput)
// 			}
// 		}
// 	}])