var app=angular.module('starterApp',['ngRoute']);

// app.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix('');
// }]);
//anguler 1.6.1 issue //https://docs.angularjs.org/guide/migration#commit-aa077e8

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/create',{
                templateUrl: 'create.html'
          })
          .when('/view',{
                templateUrl: 'view.html'
          });
});
app.controller('pollingController',function($scope){

    /*     
    Here you can handle controller for specific route as well.
    */
});