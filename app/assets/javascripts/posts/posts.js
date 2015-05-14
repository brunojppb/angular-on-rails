angular.module('flapperNews')
  .factory('posts',
           ['$http', function($http){
    var o = {
      posts: []
    };

    o.getAll = function(){
      return $http.get('/posts').success(function(data){
        angular.copy(data, o.posts);
      });
    };

    o.create = function(post){
      return $http.post('/posts', post)
        .success(function(data){
          o.posts.push(data);
      });
    };

    o.upvote = function(post){
      return $http.put('/posts/' + post.id + '/upvote')
        .success(function(data){
          post.upvotes++;
        });
    };

    o.get = function(id) {
      return $http.get('/posts/'+id)
        .then(function(response){
          return response.data;
        });

    };

    o.addComment = function(post_id, comment){
      var url = '/posts/'+post_id+'/comments';
      return $http.post(url, comment);
    };

    o.upvoteComment = function(post, comment){
      var url = '/posts/'+post.id+'/comments/'+comment.id+'/upvote';
      return $http.put(url)
        .success(function(data){
          comment.upvotes++;
        });
    }

    return o;
  }]);
