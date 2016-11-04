(function(angular){
	
	var in_theaters = angular.module('moviecat.top250',[]);
	
	in_theaters.config(['$routeProvider',function($routeProvider){
		
		$routeProvider.when('/top250',{
			controller: 'top250Contollers',
			templateUrl : 'top250/view.html'
		})
	}]);
	
	in_theaters.controller('top250Contollers',['$scope',function($scope){
		
	}])
})(angular)
