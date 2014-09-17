/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('mfWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function conditions(zip){
      return $http.jsonp('http://api.wunderground.com/api/f62d84d2f24e71aa/conditions/q/' + zip + '.json?callback=JSON_CALLBACK');
    }
    return {conditions:conditions};
  }])

  .directive('mfWeather', ['$interval', function($interval){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mf-weather/mf-weather.html';
    o.scope = {zip:'@'};
    o.link = function(scope, element, attrs){
             };

    o.controller = ['$scope', 'WeatherApi', function($scope, WeatherApi){
      function getWeather(){
        WeatherApi.conditions($scope.zip).then(function(response){
          $scope.conditions = response.data.current_observation;
        });
      }

      $scope.id = $interval(getWeather, 50000);

      getWeather();
    }];
    return o;
  }]);
})();
