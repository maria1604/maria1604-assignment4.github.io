(function(){
	"use strict";

	angular.module("MenuApp")
	.controller("CategoriesStateController", CategoriesStateController);


	CategoriesStateController.$inject = ["categories"];
	function CategoriesStateController(categories){
		var menu = this;
		menu.items = categories;
		
	}

})();