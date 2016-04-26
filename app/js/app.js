'use strict';

angular.module('adminApp', [
	'ngRoute',
	'userServices',
	'firebase'
]);



/* Routers */

var RouterConfiguration = function($routeProvider) {
	console.log('init');

	$routeProvider
		.when('/home', {
			templateUrl: '../views/home.tpl.html',
			controller: 'HomeCtrl'
		})
		.when('/register', {
			templateUrl: '../views/register.tpl.html',
			controller: 'RegisterCtrl'
		})
		.when('/signin', {
			templateUrl: '../views/signin.tpl.html',
			controller: 'SignInCtrl'
		})
		.when('/users', {
			templateUrl: '../views/users-list.tpl.html',
			controller: 'UserListCtrl'
		})
		.when('/users/:userName', {
      templateUrl: 'views/user-detail.tpl.html', 
      controller: 'UserDetailCtrl'
    })
		.when('/groups', {
			templateUrl: '../views/groups-list.tpl.html',
			controller: 'AdminCtrl'
		})
		.when('/test', {
			templateUrl: '../views/test.tpl.html',
			controller: 'TestCtrl'
		})		
		.otherwise({
        redirectTo: '/users'
      });
};

RouterConfiguration.$inject = ['$routeProvider'];

angular.module('adminApp').config(RouterConfiguration);
