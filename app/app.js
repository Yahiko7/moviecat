(function(angular){
	'use strict';
	
		angular.module('moviecat',['ngRoute','moviecat.in_theaters','moviecat.directives.auto_focus'])
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.otherwise({redirectTo:'/in_theaters/1'})
		}])
	 
	 
})(angular)



