'use strict';

angular.module('adminApp', [
	'ngRoute',
	'userServices'
]);

/* Routers */

var RouterConfiguration = function($routeProvider) {
	console.log('init');

	$routeProvider
		.when('/home', {
			templateUrl: '../views/home.tpl.html',
			controller: 'HomeCtrl'
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
		
		.otherwise({
        redirectTo: '/home'
      });
};

RouterConfiguration.$inject = ['$routeProvider'];

angular.module('adminApp').config(RouterConfiguration);
