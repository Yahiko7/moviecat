(function(angular) {
	
	var in_theaters = angular.module('moviecat.in_theaters', ['ngRoute','moviecat.services.http']);

	in_theaters.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:label/:page', {
			controller: 'inTheatersContollers',
			templateUrl: 'in_theaters/view.html'
		})
	}]);

	in_theaters.controller('inTheatersContollers', ['$scope','$routeParams','HttpService','$route', function($scope,$routeParams,HttpService,$route) {
		
		$scope.movie_list = [];
		$scope.loading = true;
		
		
		$scope.page = ($routeParams.page - 1) * 10;	
		
		$scope.totalPages = 0;				//页码
		$scope.totalCount = 0;					//总记录数
		$scope.currentPage = parseInt($routeParams.page);
		HttpService.jsonp('https://api.douban.com/v2/movie/' + $routeParams.label,{
			start : $scope.page,
			count : 3
		},
		function(data){
			$scope.movie_list = data.subjects;
			$scope.totalCount = data.total,
			$scope.totalPages = Math.ceil($scope.totalCount / 10);
			$scope.loading = false;
			$scope.$apply();
		})
		
		$scope.go = function(page){
			if (page >= 1 && page <= $scope.totalPages) {
				$route.updateParams({ page: page });
			}
			
		}
		
	}])
})(angular)