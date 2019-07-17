var app=angular.module('mainApp',[]);
app.controller('httpDemo',function($scope, $http){
$http.get('http://8080/AngularjsDemo/https demo/database.json')
.success(function(response){
    $scope.peoples = response.records;
})
})