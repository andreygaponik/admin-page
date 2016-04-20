'use strict';

angular.module('userServices', ['ngResource']).
  factory('User', function($resource){
  	return $resource('users/:userName.json', {}, {
    	query: {method:'GET', params:{userName:'users'}, isArray:true}
  	});
});