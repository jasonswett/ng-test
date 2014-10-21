'use strict';

/**
 * @ngdoc function
 * @name gluffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gluffApp
 */
angular.module('gluffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
