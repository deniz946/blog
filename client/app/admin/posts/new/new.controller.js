'use strict';

angular.module('erpApp')
  .controller('NewCtrl', function ($scope, Posts, $state, Auth, Categories) {

    Categories.getCategories().success(function (cats) {
        //console.log(cats);
        $scope.categories = cats;
    });

    $scope.submitPost = function (post) {
      console.log(post.categories);
    	post.user = {
        id: Auth.getCurrentUser()._id
      };

    	Posts.newPost(post).success(function (post) {
    		console.log(post);
    	});

    	$state.go('admin.posts');
    }
  });
