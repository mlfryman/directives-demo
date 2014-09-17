(function(){
  'use strict';

  angular.module('mfGreetingModule', [])
  .directive('mfGreeting', [function(){
    var o = {};

    o.restrict = 'A'; // restrict to attribute format, e.g. <mf-greeting>
    o.templateUrl = '/components/directives/mf-greeting/mf-greeting.html'; // location of HTML file to render (absolute path from public dir)
    o.scope =  {name:'@', age:'@'}; // can give 3 values: false, true, or {object}
    return o;
  }]);
})();
