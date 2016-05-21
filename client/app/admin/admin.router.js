'use strict';

angular.module('erpApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        authenticate: 'admin'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      })
      .state('admin.posts', {
        url: '/posts',
        templateUrl: 'app/admin/posts/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts',
        authenticate: 'admin'
      })
      .state('admin.posts_new', {
        url: '/posts/new',
        templateUrl: 'app/admin/posts/new/new.html',
        controller: 'NewCtrl',
        controllerAs: 'newPosts',
        authenticate: 'admin'
      });
  });
