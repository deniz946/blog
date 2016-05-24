'use strict';

angular.module('erpApp')
  .factory('Users', function ($http) {
    var factory = {};
    var urlBase = 'http://localhost:9000/api';

    factory.getUserById = function (id) {
      return $http.get(urlBase + '/user')
    };

    factory.editBio = function (edit) {
      console.log(edit);
      return $http.put(urlBase + '/users/bio', edit);
    };

    return factory;
  });
