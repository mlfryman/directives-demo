(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name:'Fluffy', age:'5'}, {name:'Snowball', age:'7'}, {name:'Ginger', age:'10'}];
  }]);
})();

