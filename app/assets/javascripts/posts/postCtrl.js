angular.module('flapperNews')
  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts', function($scope, $stateParams, posts){

    console.log('id: ' + $stateParams.post_id);
    $scope.post = posts.posts[$stateParams.post_id];

    $scope.upvoteComment = function(comment){
      comment.upvotes++;
    };

    $scope.addComment = function() {
      if ($scope.body === '')
        return;
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
  }]);
