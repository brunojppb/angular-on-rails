angular.module('flapperNews', ['ui.router', 'templates'])
  .config([ '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state(
      'home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      })

    .state(
      'posts', {
        url: '/posts/:post_id',
        templateUrl: 'posts/_post.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['posts', '$stateParams', function(posts, $stateParams){
            return posts.get($stateParams.post_id);
          }]
        }
      });

    $urlRouterProvider.otherwise('home');

  }]);




























