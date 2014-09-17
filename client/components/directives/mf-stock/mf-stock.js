(function(){
  'use strict';

  angular.module('mfStockModule', [])
  .factory('StockApi', ['$http', function($http){
    function quote(symbol){
      return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=JSON_CALLBACK'); // use jsonp instead of get due to security issues
    }
    return {quote:quote};
  }])

  .directive('mfStock', ['$interval', function($interval){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mf-stock/mf-stock.html';
    o.scope = {symbol:'@'};
    o.link = function(scope, element, attrs){ // Link has access to the DOM
              element.on('$destroy', function(){
                $interval.cancel(scope.id);
              });
             };

    o.controller = ['$scope', 'StockApi', function($scope, StockApi){
      function getQuote(){
        StockApi.quote($scope.symbol).then(function(response){ // can return success & failure, OR success(=response)
          $scope.quote = response.data.LastPrice;
        });
      }

      $scope.id = $interval(getQuote, 30000);

      getQuote();
    }];
    return o;
  }]);
})();
