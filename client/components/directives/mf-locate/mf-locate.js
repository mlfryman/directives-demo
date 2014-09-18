/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('mfLocateModule', [])
  .factory('LocationService', ['$q', function($q){

    function locate(){
      var deferred = $q.defer(), // creates defer object
          options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};

      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);

      return deferred.promise; // returns promise (resolved || rejected) that we create
    }

    return {locate:locate};
  }])

  // directive functions run 2nd
  .directive('mfLocate', [function(){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mf-locate/mf-locate.html';
    o.scope = {};
    o.link = function(scope, element, attrs){
             };

    // controller functions run 1st
    o.controller = ['$scope', 'LocationService', function($scope, LocationService){
                      $scope.findMe = function(){
                        // alert('I found you!');
                        LocationService.locate().then(success, error);
                      };

                      function success(pos){
                        console.log(pos);
                      }

                      function error(err){
                        console.log(err);
                      }
                  }];
    return o;
  }]);
})();
