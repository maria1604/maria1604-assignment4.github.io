(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'src/templates/home.html'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'src/templates/categories.html',
			controller: 'CategoriesStateController as ctrl',
			resolve: {
				categories: ["MenuDataService", function(MenuDataService){
						return MenuDataService.getAllItems();
				}]
					
			}
		})

		.state('categories.items', {
			url: '/items/{categoryShortName}',
			templateUrl: 'src/templates/items.html',
			controller: 'ItemsListController as ctrl',
			params: {categoryShortName: null},
			resolve: {
				items: ["$stateParams","MenuDataService", function($stateParams, MenuDataService){
						return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]
					
			}
		});
	}
})();