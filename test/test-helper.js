var $authProvider,
    $auth,
    $http,
    $q,
    $location,
    $cookieStore,
    $window,
    $timeout,
    $rootScope,
    $interpolate

beforeEach(function() {
  module('gluffApp', function(_$authProvider_, $provide) {
    $authProvider = _$authProvider_;
  });

  inject(function($injector) {
    $auth        = $injector.get('$auth');
    $http        = $injector.get('$http');
    $q           = $injector.get('$q');
    $location    = $injector.get('$location');
    $cookieStore = $injector.get('$cookieStore');
    $window      = $injector.get('$window');
    $timeout     = $injector.get('$timeout');
    $rootScope   = $injector.get('$rootScope');
    $interpolate = $injector.get('$interpolate');
  });
});
