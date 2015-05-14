angular.module('flapperNews')
  .controller('MainCtrl',
              ['$scope', 'posts', function($scope, posts){

    $scope.posts = posts.posts;
    console.log('Hey!');
    $scope.incrementUpvotes = function(post) {
      post.upvotes++;
    };

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '')
        return;
      // Adds new Post to array
      $scope.posts.push(
        {
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool Post!', upvotes: 0},
            {author: 'Bob', body: 'Great Idea!', upvotes: 0}
          ]
        }
      );
      // Clear form
      $scope.link = '';
      $scope.title = '';
    };
  }]);
