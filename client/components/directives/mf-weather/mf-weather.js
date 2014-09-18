/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('mfWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(query){
      return $http.jsonp('http://api.wunderground.com/api/f62d84d2f24e71aa/conditions/q/' + query + '.json?callback=JSON_CALLBACK');
    }
    return {conditions:conditions};
  }])

  .directive('mfWeather', [function(){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mf-weather/mf-weather.html';
    o.scope = {zip:'@'};
    o.link = function(scope, element, attrs){
             };

    o.controller = ['$scope', 'WeatherApi', function($scope, WeatherApi){
      $scope.$on('position', function(event, pos){
        if($scope.zip){return;}
        var query = pos.coords.latitude +  ',' + pos.coords.longitude;
        console.log(query);
        getWeather(query);
      });

      function getWeather(query){
        WeatherApi.conditions(query).then(function(response){
          $scope.conditions = response.data.current_observation;
        });
      }
      if($scope.zip){getWeather($scope.zip);}
    }];
    return o;
  }]);
})();
