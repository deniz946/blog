'use strict';
(function(){

  class PostComponent {
    constructor($scope, Posts, $stateParams, Auth, $window, $timeout) {
      Posts.getById($stateParams.id).success(function (post) {
       $scope.post = post
       console.log(post.comments)
     });
      $scope.nullComment = false;

      $scope.submitComment = function (comment, postid) {
        if(typeof comment != 'undefined'){
          var newComment = {
            username: Auth.getCurrentUser().name,
            body: comment.body,
            postid: postid
          };
          console.log(newComment)
          Posts.postNewComment(newComment)
          $window.location.reload();
        }
        else{
          $scope.nullComment = true;
          $timeout(function () {
            $scope.nullComment = false;
          }, 3000)
        }
      }
    }}

    angular.module('erpApp')
    .component('post', {
      templateUrl: 'app/post/post.html',
      controller: PostComponent,
      controllerAs: 'post'
    });

  })();
