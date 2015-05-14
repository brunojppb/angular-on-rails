angular.module('flapperNews')
  .controller('MainCtrl',
              ['$scope',
              'posts', function($scope, posts){

    $scope.posts = posts.posts;

    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    };

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '')
        return;
      // Adds new Post to server
      posts.create({
        title: $scope.title,
        link: $scope.link
      });

      // Clear form
      $scope.link = '';
      $scope.title = '';
    };
  }]);
