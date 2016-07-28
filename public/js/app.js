var app = angular.module('app', ['ngRoute', 'ngCookies']);
       
app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'templates/users/login.html',
            controller: 'userCtrl'
        });
        
        $routeProvider.when('/home',{
            templateUrl: 'templates/users/home.html',
            controller: 'userCtrl'
        });        
        
        $routeProvider.otherwise('/');
}]);