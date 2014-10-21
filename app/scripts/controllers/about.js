'use strict';

/**
 * @ngdoc function
 * @name gluffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gluffApp
 */
angular.module('gluffApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
