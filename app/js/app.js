'use strict';


var monPrenom = angular.module('yandv', ['yandv.filters', 'yandv.services', 'yandv.directives', 'yandv.controllers']);


monPrenom.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


monPrenom.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/message/add', {templateUrl: 'partials/addMessage.html', controller: 'MessageController'});    
    $routeProvider.when('/show/:name', {templateUrl: 'partials/showMessage.html', controller: 'ShowController'});
    $routeProvider.otherwise({templateUrl: 'partials/home.html', controller: 'HomeController'});
  }]);


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}