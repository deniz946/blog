'use strict';

angular.module('erpApp')
  .factory('Categories', function ($http) {

    var factory = {};
    var urlBase = "http://localhost:9000/api"

    factory.submitCategory = function (category) {
       return $http.post(urlBase + '/categories/' + category); 
    }

    factory.getCategories = function () {
       return $http.get(urlBase + '/categories/'); 
    }

    return factory;
    
  });
