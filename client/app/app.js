'use strict';

angular.module('erpApp', [
  'erpApp.auth',
  'erpApp.admin',
  'erpApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'datatables',
  'ui.tinymce',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
