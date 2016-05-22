'use strict';

angular.module('erpApp')
  .factory('Posts', function ($http) {
    var factory = {};
    var urlBase = "http://localhost:9000/api"

    factory.getPosts = function () { 
      return $http.get(urlBase + '/posts');
    }

    factory.getActivePosts = function () { 
      return $http.get(urlBase + '/posts/active');
    }

    factory.newPost = function (post) {
      return $http.post(urlBase + '/posts', post); 
    }

    factory.getById = function (id) {
      return $http.get(urlBase + '/posts/' + id);
    }

    return factory;
  });
