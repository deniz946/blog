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
        name: Auth.getCurrentUser().name,
        username: Auth.getCurrentUser().username,
        email: Auth.getCurrentUser().email,
        img: Auth.getCurrentUser().img
      };

    	Posts.newPost(post).success(function (post) {
    		console.log(post);
    	});
      
    	$state.go('admin.posts');
    }
  });
