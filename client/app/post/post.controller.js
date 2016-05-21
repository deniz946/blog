'use strict';
(function(){

class PostComponent {
  constructor($scope, Posts, $stateParams) {
    Posts.getById($stateParams.id).success(function (post) {
    	 $scope.post = post

    })
  }
}

angular.module('erpApp')
  .component('post', {
    templateUrl: 'app/post/post.html',
    controller: PostComponent,
    controllerAs: 'post'
  });

})();
