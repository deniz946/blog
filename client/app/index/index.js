'use strict';

angular.module('erpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<index></index>'
      });
  });
