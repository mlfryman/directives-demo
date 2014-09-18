(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', 'Title', function($scope, $interval, Home, Title){
    $scope.people = [{name:'Fluffy', age:'5'}, {name:'Snowball', age:'7'}, {name:'Ginger', age:'10'}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
    $scope.zips = ['37219', '75711', '38004'];
    $scope.titles = [];

    Title.all().then(function(response){
      $scope.titles = response.data.titles;
    });

    $scope.addMovie = function(){
      Title.create($scope.title).then(function(response){
        $scope.titles.push(response.data.title);
        $scope.title = null; // clears title in form
      });
    };

    $scope.delMovie = function(index){
      Title.destroy($scope.title).then(function(response){
        $scope.titles.splice(index, 1); // pulls 1 title out of the array
      });
    };

  }]);
})();
