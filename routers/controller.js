var app= angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template:'login.html'
    })
    .when('/dashboard',{
        template:'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})

app.controller('loginapp',function($scope,$location){
    $scope.submit= function(){
        var uname=$scope.username;
        var password=$scope.password;
        if (uname=="admin" && password=="admin") {
            $location.$state('/dashboard');
        } else{
            alert("wrong stuff");
        }
    }
}) 