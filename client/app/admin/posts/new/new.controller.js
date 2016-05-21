'use strict';

angular.module('erpApp')
  .controller('NewCtrl', function ($scope, Posts, $state, Auth) {
    $scope.submitPost = function (post) {
    	
    	post.user = Auth.getCurrentUser().name

    	Posts.newPost(post).success(function (post) {
    		console.log(post); 
    	});
    	$state.go('admin.posts');
    }
  });
 