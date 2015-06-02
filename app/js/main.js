(function() {
  'use strict';

  angular.module('SampleApp', ['ngRoute', 'ngAnimate']);

  angular.module('SampleApp').config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: ".partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);

  angular.module('SampleApp').controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);
}());
