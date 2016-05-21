'use strict';

angular.module('erpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post/:id',
        template: '<post></post>'
      });
  });
