(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Title', ['$http', function($http){

    function all(){
      return $http.get('/movies');
    }

    function create(title){
      return $http.post('/movies', {title:title});
    }

    function destroy(index){
      return $http.delete('/movies', index);
    }
    return {all:all, create:create, destroy:destroy};

  }]);
})();
