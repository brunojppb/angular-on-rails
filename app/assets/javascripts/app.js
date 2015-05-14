angular.module('flapperNews', ['ui.router', 'templates'])
  .config([ '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state(
      'home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      })

    .state(
      'posts', {
        url: '/posts/:post_id',
        templateUrl: 'posts/_post.html',
        controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');

  }]);




























