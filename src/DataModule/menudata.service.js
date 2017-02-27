(function(){
	"use strict";

	angular.module("Data")
	.service("MenuDataService", MenuDataService)
	.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");


	MenuDataService.$inject = ["$http", "ApiBasePath"]
	function MenuDataService($http, ApiBasePath){
		var service = this;

		service.getAllItems = function (){
			return $http({
				method: "GET",
				url: (ApiBasePath + "/categories.json") 
			})
			.then(function (response){
				var categories = response.data;
				return categories;
				})
		}

		service.getItemsForCategory = function(categoryShortName){
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json"),
				params: {category: categoryShortName}
			})
			.then(function (response){
				var menuItems = response.data.menu_items;
				return menuItems;
				})
		}
	}
})();