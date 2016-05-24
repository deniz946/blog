'use strict';

angular.module('erpApp')
.controller('PostsCtrl', function ($scope, DTOptionsBuilder, DTColumnDefBuilder, Posts, Categories) {
	$scope.addCategory = false;

	var vm = this;
	vm.dtOptions = DTOptionsBuilder.newOptions()
	.withPaginationType('full_numbers')
	.withDisplayLength(10)
	.withDOM('pitrfl');
	vm.dtColumnDefs = [
	DTColumnDefBuilder.newColumnDef(0),
	DTColumnDefBuilder.newColumnDef(1).notVisible(),
	DTColumnDefBuilder.newColumnDef(2).notSortable()
	];

	Posts.getPosts().success(function (posts) {
		 $scope.posts = posts;
	})

	$scope.categoryPanel = function () {
		 $scope.addCategory = true; 
	}

	$scope.submitCategory = function (category) {
		 console.log(category);
		 Categories.submitCategory(category).success(function (cat) {
		 	 console.log(cat);
		 	 $scope.category = ''; 
		 }) 
		 $scope.addCategory = false;
	}

	


});
