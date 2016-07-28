app.controller('userCtrl', ['$scope', '$http','$location', function($scope, $http, $location){
        
        //Regex to check for at least 1 Upper, Lower case letter and 1 digit
         $scope.regex = /^(?=.{6,20}$)\D*\d/;
        
        angular.extend($scope, {            
            login: function(){
                $http({
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   url: url + 'auth',
                   method: "post",
                   data: {
                       email: $scope.login.email,
                       password: $scope.login.password                       
                   }
                   //If success redirect user to home page
                }).success(function(){
                    $location.path('/home');
                    
                    //If error alert the user to the error message returned from Laravel Controller
                }).error(function(data){
                    alert(data);
                });
            }
        });
}]);