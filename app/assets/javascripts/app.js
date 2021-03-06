angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
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
      })

    .state(
      'login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          });
        }]
      })

    .state(
      'register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          });
        }]
    });

    $urlRouterProvider.otherwise('home');

  }]);




























