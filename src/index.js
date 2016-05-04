var empty = require('is-empty')

module.exports = require('angular')
  .module('ngLoader', [])
  .directive('loader', Loader)
  .name

Loader.$inject = [
  '$parse',
  '$timeout'
]

function Loader ($parse, $timeout) {
  return {
    restrict: 'E',
    template: '<div style="height:100%;width:100%;"><div class="loading-loader" ng-show="loading">{{loadingMessage}}</div><div ng-show="!loading" ng-transclude></div></div>',
    transclude: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $scope.loading = true
      $scope.loadingMessage = $attrs.message || 'Loading...'
      var mintime = Number($attrs.min) || 600

      $scope.$watch(function () {
        return $attrs.loadValue
      }, function (nv, ov) {
        if (!nv) return
        var value = $parse(nv)($scope)

        if (empty(value) === false) {
          $timeout(function () {
            $scope.loading = false
          }, mintime)
        }
      })
    }
  }
}
