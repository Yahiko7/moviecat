(function(angular){
	
	var in_theaters = angular.module('moviecat.coming_soon',[]);
	
	in_theaters.config(['$routeProvider',function($routeProvider){
		
		$routeProvider.when('/coming_soon',{
			controller: 'comingSoonContollers',
			templateUrl : 'coming_soon/view.html'
		})
	}]);
	
	in_theaters.controller('comingSoonContollers',['$scope',function($scope){
		
	}])
})(angular)
