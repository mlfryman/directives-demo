(function(){
  'use strict';

  angular.module('mfClockModule', [])
  .directive('mfClock', ['$interval', function($interval){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mf-clock/mf-clock.html';
    o.scope = {frequency:'@'};
    o.link = function(scope, element, attrs){ // allows you to manipulate or change teh DOM in real-time
      function updateTime(){
        scope.date = new Date();
      }

      var id = $interval(updateTime, scope.frequency * 1); // takes the fn you want to call, & how often you want to call it

      element.on('$destroy', function(){
        // console.log('~~~~~ I am dying.........', id);
        $interval.cancel(id);
      });
      updateTime();
    };
    return o;
  }]);
})();
