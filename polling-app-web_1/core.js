var app=angular.module('starterApp',['ngRoute', 'ngMaterial', 'ngMessages']);

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


app.controller('pollingController',function($scope, $http, $mdDialog){

       
       $scope.formData = {};
       $scope.formData.options = [{}];

      $scope.pollData = [];
      $scope.hiddenrows = [];

      // Load polls when app initialise.
      getPollData();

      $scope.addOption = function() {
        $scope.formData.options.push({});
      };

      $scope.removeOption = function() {
        if ($scope.formData.options.length > 1){
            $scope.formData.options.pop();
        }
        // validation error shown ? 
      };

    /*     
    Here you can handle controller for specific route as well.
    */
     $scope.submitPoll = function(ev) {
           console.log($scope.formData)
           $mdDialog.show(
                  $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title($scope.formData.pollQuestion)
                        .textContent($scope.formData.options)
                        .ok('Got it!')
                        .targetEvent(ev)
            );

      }

      function getPollData() {

            $http.get("http://localhost:3000" + "/polls").then(function(response){
                   $scope.pollData = response.data;
                   console.log($scope.pollData);
                   // how to cast the retuned data ?...
            });
      }

      $scope.updateVote = function(index) {
            console.log(index);
      }

});