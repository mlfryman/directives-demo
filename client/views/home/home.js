(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name:'Fluffy', age:'5'}, {name:'Snowball', age:'7'}, {name:'Ginger', age:'10'}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
    $scope.zips = ['37219', '75711', '38004'];
    $scope.titles = ['Mad Max Beyond Thunderdome', 'The Land Before Time', 'The Labrynth'];
  }]);
})();

