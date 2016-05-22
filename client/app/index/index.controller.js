'use strict';
(function(){

class IndexComponent {
  constructor($scope, Posts) {
  	this.Posts = Posts;
  	this.Posts.getActivePosts().success(function (posts) {
		$scope.posts = posts;
  	})
  }
}

angular.module('erpApp')
  .component('index', {
    templateUrl: 'app/index/index.html',
    controller: IndexComponent,
    controllerAs: "index"
  });

})();
