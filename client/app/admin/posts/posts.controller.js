'use strict';

angular.module('erpApp')
.controller('PostsCtrl', function ($scope, DTOptionsBuilder, DTColumnDefBuilder, Posts) {
	$scope.message = 'Hello';

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
		 console.log(posts); 
		 $scope.posts = posts;
	})

	


});
